import Image from 'next/image';

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">
      <Image
        className="manifesto__ghost"
        src="/assets/john.png"
        alt=""
        aria-hidden="true"
        width={800}
        height={1036}
      />

      <div className="manifesto__inner">
        <header
          className="section-head"
          style={{ gridTemplateColumns: '1fr', gap: 0, marginBottom: 56 }}
        >
          <div className="section-head__index">
            <span className="roman">IV</span>
            <span>The Manifesto</span>
          </div>
        </header>

        <p className="manifesto__lead">
          I do not believe in <em>specialisation</em> — at least, not for myself.
          The disciplines speak to each other in private. To learn one is to
          half-learn the others.
        </p>

        <p>
          I started as a tattoo artist. I taught myself to code. I have spent a
          decade since holding both pencil and keyboard at once, building
          software companies and sketchbooks in parallel — and lately, a few
          welded contraptions in the back yard.
        </p>

        <p>
          The thread is the same in all of them: <em>look closely, build with
          care, ship the thing</em>. Whether it is a Convex backend, a brand
          mark, a portrait, or a kart that will not fall apart at speed — the
          discipline is identical. Only the material changes.
        </p>

        <p>
          I am based in Nairobi. I work mostly on Africa-first products —
          virtual try-on, ride-hailing, creative tools. I am usually building
          something at any given hour, and you are welcome to write.
        </p>
      </div>
    </section>
  );
}
