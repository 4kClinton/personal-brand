'use client';

import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import type { Id } from '@/convex/_generated/dataModel';
import Nav from '@/components/Nav';
import { Article, convexConfigured, formatDate } from '@/lib/articles';

const KEY_STORE = 'marginalia_admin_key';
const MAX_DIM = 1600; // longest edge after downscale
const JPEG_QUALITY = 0.85;

type ProcessedImage = { file: File; width: number; height: number };

// Downscale + recompress an image in the browser before upload so we never
// ship a multi-megabyte phone photo. Falls back to the original on failure.
async function processImage(raw: File): Promise<ProcessedImage> {
  const bitmap = await createImageBitmap(raw, {
    imageOrientation: 'from-image', // respect EXIF rotation from phones
  });
  const scale = Math.min(1, MAX_DIM / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('no canvas context');
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close?.();

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY)
  );
  if (!blob) throw new Error('encode failed');

  const name = (raw.name || 'image').replace(/\.[^.]+$/, '') + '.jpg';
  return { file: new File([blob], name, { type: 'image/jpeg' }), width, height };
}

/* ------------------------------- password gate ------------------------------ */

function Gate({ onAuthed }: { onAuthed: (key: string) => void }) {
  const [input, setInput] = useState('');
  const [attempt, setAttempt] = useState<string | null>(null);
  const ok = useQuery(
    api.articles.checkKey,
    attempt ? { key: attempt } : 'skip'
  );

  // Auto-attempt with a remembered key on first mount.
  useEffect(() => {
    const saved =
      typeof window !== 'undefined' ? localStorage.getItem(KEY_STORE) : null;
    if (saved) {
      setInput(saved);
      setAttempt(saved);
    }
  }, []);

  useEffect(() => {
    if (attempt && ok === true) {
      localStorage.setItem(KEY_STORE, attempt);
      onAuthed(attempt);
    }
  }, [attempt, ok, onAuthed]);

  const wrong = attempt !== null && ok === false;
  const checking = attempt !== null && ok === undefined;

  return (
    <form
      className="admin-gate"
      onSubmit={(e) => {
        e.preventDefault();
        setAttempt(input.trim());
      }}
    >
      <div className="section-head__index">
        <span className="roman">Ø</span>
        <span>Scriptorium</span>
      </div>
      <h1 className="admin-gate__title">The keeper&apos;s key.</h1>
      <p className="admin-gate__hint">
        This room is private. Enter the admin key to write.
      </p>
      <input
        className="field"
        type="password"
        placeholder="Admin key"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      {wrong && <p className="admin-gate__error">Wrong key. Try again.</p>}
      <button className="btn" type="submit" disabled={checking}>
        {checking ? 'Checking…' : 'Enter'}
        <span className="arrow" aria-hidden="true" />
      </button>
    </form>
  );
}

/* -------------------------------- dashboard -------------------------------- */

function Dashboard({
  adminKey,
  onLogout,
}: {
  adminKey: string;
  onLogout: () => void;
}) {
  const all = useQuery(api.articles.listAll, { key: adminKey });
  const create = useMutation(api.articles.create);
  const update = useMutation(api.articles.update);
  const remove = useMutation(api.articles.remove);
  const generateUploadUrl = useMutation(api.articles.generateUploadUrl);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  // Object URL for a freshly pasted image; existing image kept separately.
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  // True when the user removed an already-saved image without pasting a new one.
  const [imageCleared, setImageCleared] = useState(false);
  // Dimensions of the processed image about to be uploaded.
  const [imageDims, setImageDims] = useState<{ w: number; h: number } | null>(
    null
  );
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  // Keep the object URL in sync with the pasted file, and clean it up.
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  function resetForm() {
    setEditingId(null);
    setTitle('');
    setBody('');
    setPublished(true);
    setFile(null);
    setExistingImageUrl(null);
    setImageCleared(false);
    setImageDims(null);
  }

  // Compress/resize the chosen image, then stage it for upload.
  async function acceptImage(raw: File) {
    setImageCleared(false);
    try {
      const { file: processed, width, height } = await processImage(raw);
      setFile(processed);
      setImageDims({ w: width, h: height });
    } catch {
      // Fall back to the original if the browser can't process it.
      setFile(raw);
      setImageDims(null);
    }
  }

  // Grab an image straight out of a paste into the body.
  function handlePaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    const item = Array.from(e.clipboardData.items).find((i) =>
      i.type.startsWith('image/')
    );
    if (!item) return; // let normal text paste through
    const img = item.getAsFile();
    if (!img) return;
    e.preventDefault();
    void acceptImage(img);
  }

  // Mobile browsers (Chrome on Android especially) don't support pasting
  // images into a textarea, so offer an explicit picker too.
  function handlePickFile(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = e.target.files?.[0] ?? null;
    if (picked) void acceptImage(picked);
    // Reset so picking the same file again still fires onChange.
    e.target.value = '';
  }

  function removeImage() {
    setFile(null);
    setExistingImageUrl(null);
    setImageCleared(true);
    setImageDims(null);
  }

  async function uploadImage(): Promise<string | undefined> {
    if (!file) return undefined;
    const url = await generateUploadUrl({ key: adminKey });
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': file.type },
      body: file,
    });
    const json = await res.json();
    return json.storageId as string;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setStatus('A note needs both a title and a body.');
      return;
    }
    setBusy(true);
    setStatus('');
    try {
      const imageId = await uploadImage();
      const imageMeta =
        imageId && imageDims
          ? { imageWidth: imageDims.w, imageHeight: imageDims.h }
          : {};
      if (editingId) {
        await update({
          key: adminKey,
          id: editingId as unknown as Id<'articles'>,
          title,
          body,
          published,
          ...(imageId ? { imageId: imageId as never, ...imageMeta } : {}),
          ...(!imageId && imageCleared ? { removeImage: true } : {}),
        });
        setStatus('Note updated.');
      } else {
        await create({
          key: adminKey,
          title,
          body,
          published,
          ...(imageId ? { imageId: imageId as never, ...imageMeta } : {}),
        });
        setStatus('Note posted.');
      }
      resetForm();
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  function startEdit(a: Article) {
    setEditingId(a._id);
    setTitle(a.title);
    setBody(a.body);
    setPublished(a.published);
    setFile(null);
    setImageDims(null);
    setExistingImageUrl(a.imageUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(a: Article) {
    if (!confirm(`Delete “${a.title}”? This cannot be undone.`)) return;
    await remove({ key: adminKey, id: a._id as unknown as Id<'articles'> });
    if (editingId === a._id) resetForm();
  }

  return (
    <div className="admin">
      <header className="admin__head">
        <div className="section-head__index">
          <span className="roman">Ø</span>
          <span>Scriptorium · Admin</span>
        </div>
        <button className="admin__logout" onClick={onLogout}>
          Lock the room
        </button>
      </header>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h1 className="admin-form__title">
          {editingId ? 'Revise a note.' : 'Write a note.'}
        </h1>

        <label className="field-label" htmlFor="t">
          Title
        </label>
        <input
          id="t"
          className="field"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's on your mind?"
        />

        <label className="field-label" htmlFor="b">
          Body{' '}
          <span className="field-label__hint">
            — attach an image below, or paste one in (desktop)
          </span>
        </label>
        <textarea
          id="b"
          className="field field--area"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onPaste={handlePaste}
          placeholder="Write freely. Leave a blank line between paragraphs."
          rows={12}
        />

        <div className="attach-row">
          <label className="attach-btn">
            <input
              type="file"
              accept="image/*"
              onChange={handlePickFile}
              hidden
            />
            <span aria-hidden="true">＋</span> Attach image
          </label>
          <span className="attach-row__hint">
            photo, screenshot, or paste on desktop
          </span>
        </div>

        {(previewUrl || existingImageUrl) && (
          <div className="paste-preview">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewUrl ?? existingImageUrl ?? ''} alt="Attached illustration preview" />
            <button
              type="button"
              className="paste-preview__remove"
              onClick={removeImage}
              aria-label="Remove image"
            >
              ×
            </button>
            <span className="paste-preview__caption">
              {previewUrl ? 'Pasted image — will attach on save' : 'Current image'}
            </span>
          </div>
        )}

        <label className="admin-toggle">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          <span>{published ? 'Published (visible)' : 'Draft (hidden)'}</span>
        </label>

        <div className="admin-form__actions">
          <button className="btn" type="submit" disabled={busy}>
            {busy ? 'Saving…' : editingId ? 'Update note' : 'Post note'}
            <span className="arrow" aria-hidden="true" />
          </button>
          {editingId && (
            <button
              className="btn btn--ghost"
              type="button"
              onClick={resetForm}
            >
              Cancel edit
            </button>
          )}
        </div>
        {status && <p className="admin-form__status">{status}</p>}
      </form>

      <section className="admin-list">
        <h2 className="admin-list__title">All notes</h2>
        {all === undefined && <p className="leaves__state">Loading…</p>}
        {all && all.length === 0 && (
          <p className="leaves__state">No notes yet.</p>
        )}
        {all &&
          all.map((raw) => {
            const a = raw as Article;
            return (
              <div className="admin-row" key={a._id}>
                <div className="admin-row__main">
                  <div className="admin-row__meta">
                    <span
                      className={`badge ${a.published ? 'badge--live' : 'badge--draft'}`}
                    >
                      {a.published ? 'Live' : 'Draft'}
                    </span>
                    <span>{formatDate(a.publishedAt)}</span>
                  </div>
                  <div className="admin-row__title">{a.title}</div>
                </div>
                <div className="admin-row__actions">
                  <button onClick={() => startEdit(a)}>Edit</button>
                  <button
                    className="danger"
                    onClick={() => handleDelete(a)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}

/* --------------------------------- wrapper -------------------------------- */

function AdminApp() {
  const [key, setKey] = useState<string | null>(null);

  function logout() {
    localStorage.removeItem(KEY_STORE);
    setKey(null);
  }

  return (
    <main className="admin-page">
      {key ? (
        <Dashboard adminKey={key} onLogout={logout} />
      ) : (
        <Gate onAuthed={setKey} />
      )}
    </main>
  );
}

export default function AdminPageRoute() {
  return (
    <>
      <Nav />
      {convexConfigured ? (
        <AdminApp />
      ) : (
        <main className="admin-page">
          <p className="leaves__state">
            Convex isn&apos;t configured yet. Set NEXT_PUBLIC_CONVEX_URL and run
            <code> npx convex dev</code>.
          </p>
        </main>
      )}
    </>
  );
}
