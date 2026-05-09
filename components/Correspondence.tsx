import Image from 'next/image';

export default function Correspondence() {
  return (
    <section className="correspondence" id="correspondence">
      <Image
        className="correspondence__ghost"
        src="/assets/mona.png"
        alt=""
        aria-hidden="true"
        width={1500}
        height={1000}
      />

      <div className="correspondence__inner">
        <div className="section-head__index" style={{ marginBottom: 24 }}>
          <span className="roman">V</span>
          <span>Correspondence</span>
        </div>

        <h2 className="correspondence__title">
          Send a <em>letter.</em>
        </h2>
        <p className="correspondence__lede">
          I read everything. I reply slowly, in full sentences, like a
          19th-century correspondent. Pick whichever channel suits you.
        </p>

        <div className="correspondence__channels">
          <a
            className="channel"
            href="https://www.linkedin.com/in/clinton-kibet-b62817302/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="channel__label">LinkedIn</div>
            <div className="channel__value">Clinton Kibet</div>
            <div className="channel__hand">— professional correspondence.</div>
          </a>

          <a
            className="channel"
            href="https://github.com/4kClinton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="channel__label">The Workshop</div>
            <div className="channel__value">github · @4kClinton</div>
            <div className="channel__hand">— things compiled and shipped.</div>
          </a>

          <a
            className="channel"
            href="https://instagram.com/clint_bor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="channel__label">Sketchbook</div>
            <div className="channel__value">instagram · @clint_bor</div>
            <div className="channel__hand">— drawings &amp; works in progress.</div>
          </a>

          <a
            className="channel"
            href="https://www.linkedin.com/in/swyft-kenya-235486370/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="channel__label">Swyft Kenya</div>
            <div className="channel__value">linkedin · Swyft</div>
            <div className="channel__hand">— for Swyft-related letters.</div>
          </a>

          <a
            className="channel"
            href="https://wa.me/254796205375"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="channel__label">WhatsApp</div>
            <div className="channel__value">+254 796 205 375</div>
            <div className="channel__hand">— quick notes &amp; voice messages.</div>
          </a>
        </div>

        <div className="signature-block">
          <div>
            <div className="signature">Clinton Kibet</div>
          </div>
          <div className="signature-meta">
            <div>Nairobi · Kenya</div>
            <div>Anno Domini MMXXVI</div>
            <div style={{ color: 'var(--ember)' }}>Codex closes here. ❦</div>
          </div>
        </div>
      </div>
    </section>
  );
}
