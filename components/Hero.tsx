import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Ghost Vitruvian Man behind the hero — purely decorative */}
      <Image
        className="hero__ghost hero__ghost--vitruvian"
        src="/assets/vitruvian.png"
        alt=""
        aria-hidden="true"
        width={2131}
        height={2953}
        priority={false}
      />

      <div className="hero__text">
        <div className="hero__folio">
          <span className="rule" />
          <span>Studii di Clinton — Anno MMXXVI</span>
        </div>

        <h1 className="hero__name">
          Clinton
          <br />
          <em>Kibet.</em>
        </h1>

        <div className="hero__role">
          <span className="dot" />
          <span>Polymath · Nairobi</span>
        </div>

        <p className="hero__lede">
          Software engineer by trade, draughtsman by instinct, painter by blood,
          and <em>maker of small machines</em> by inheritance. I build the things
          I cannot yet buy — applications, brands, paintings, and go-karts in the
          back yard.
        </p>

        <div className="hero__cta">
          <a href="#codex" className="btn">
            <span>Open the Codex</span>
            <span className="arrow" />
          </a>
          <a href="#workshop" className="btn btn--ghost">
            <span>Selected Works</span>
          </a>
        </div>
      </div>

      <div className="hero__portrait">
        <div className="portrait-frame">
          {/* Vitruvian-style geometric frame (animated) */}
          <svg
            className="vitruvian-frame"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="48" />
            <rect x="2" y="2" width="96" height="96" />
            <line x1="50" y1="2" x2="50" y2="98" />
            <line x1="2" y1="50" x2="98" y2="50" />
            <line className="tick" x1="50" y1="2" x2="50" y2="6" />
            <line className="tick" x1="50" y1="94" x2="50" y2="98" />
            <line className="tick" x1="2" y1="50" x2="6" y2="50" />
            <line className="tick" x1="94" y1="50" x2="98" y2="50" />
            <line className="tick" x1="2" y1="2" x2="98" y2="98" />
            <line className="tick" x1="98" y1="2" x2="2" y2="98" />
          </svg>

          <span className="corner tl" />
          <span className="corner tr" />
          <span className="corner bl" />
          <span className="corner br" />

          {/* The portrait — using next/image so it actually loads */}
          <Image
            className="portrait-img"
            src="/assets/portrait.png"
            alt="Portrait of Clinton Kibet"
            fill
            sizes="(max-width: 960px) 90vw, 540px"
            priority
          />
        </div>

        <aside className="marginalia marginalia--tr" aria-hidden="true">
          <span className="lead-line" />
          <em>il portatore di luce —</em>
          <br />
          bearer of light;
          <br />
          observe the
          <br />
          warm umber.
        </aside>

        <aside className="marginalia marginalia--bl" aria-hidden="true">
          <em>fig. I —</em> the subject
          <br />
          regards the heavens,
          <br />
          uncertain, undeterred.
          <span className="lead-line" />
        </aside>
      </div>
    </section>
  );
}
