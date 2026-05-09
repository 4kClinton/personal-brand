import { projects } from '@/lib/projects';

/** Vitruvian try-on figure for Nima */
function NimaDiagram() {
  return (
    <svg viewBox="0 0 160 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* outer circle (Vitruvian-style frame) */}
      <circle className="draw draw--bronze" cx="80" cy="80" r="72" strokeWidth="0.6" />

      {/* figure body */}
      <circle className="draw" cx="80" cy="32" r="10" /> {/* head */}
      <line className="draw" x1="80" y1="42" x2="80" y2="105" /> {/* spine */}
      <line className="draw" x1="80" y1="50" x2="40" y2="60" /> {/* L arm */}
      <line className="draw" x1="80" y1="50" x2="120" y2="60" /> {/* R arm */}
      <line className="draw" x1="80" y1="105" x2="62" y2="140" /> {/* L leg */}
      <line className="draw" x1="80" y1="105" x2="98" y2="140" /> {/* R leg */}

      {/* garment overlay (ember) — tunic shape */}
      <path
        className="draw draw--ember"
        d="M 56 56 L 104 56 L 110 64 L 108 110 L 52 110 L 50 64 Z"
      />
      {/* garment seam lines */}
      <line className="draw draw--ember" x1="60" y1="80" x2="100" y2="80" />

      {/* registration crosshairs */}
      <circle className="draw draw--bronze" cx="80" cy="68" r="3" />
      <line className="draw draw--bronze" x1="74" y1="68" x2="86" y2="68" />
      <line className="draw draw--bronze" x1="80" y1="62" x2="80" y2="74" />

      <circle className="draw draw--bronze" cx="80" cy="92" r="3" />
      <line className="draw draw--bronze" x1="74" y1="92" x2="86" y2="92" />
      <line className="draw draw--bronze" x1="80" y1="86" x2="80" y2="98" />

      {/* tick scale on right */}
      <line className="draw" x1="138" y1="50" x2="142" y2="50" />
      <line className="draw" x1="138" y1="80" x2="142" y2="80" />
      <line className="draw" x1="138" y1="110" x2="142" y2="110" />
      <line className="draw" x1="140" y1="50" x2="140" y2="110" />
    </svg>
  );
}

/** Route map for Swyft */
function SwyftDiagram() {
  return (
    <svg viewBox="0 0 160 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* outer frame */}
      <rect className="draw draw--bronze" x="12" y="12" width="136" height="136" strokeWidth="0.5" />

      {/* compass rose (top-right) */}
      <circle className="draw draw--bronze" cx="130" cy="30" r="10" />
      <line className="draw draw--bronze" x1="130" y1="20" x2="130" y2="40" />
      <line className="draw draw--bronze" x1="120" y1="30" x2="140" y2="30" />
      <path className="draw" d="M 130 20 L 133 30 L 130 27 L 127 30 Z" />

      {/* curved route path */}
      <path
        className="draw draw--ember"
        d="M 30 130 C 50 80, 90 60, 130 80"
        strokeWidth="1.4"
      />

      {/* origin pin */}
      <circle className="draw" cx="30" cy="130" r="8" />
      <circle className="draw draw--bronze" cx="30" cy="130" r="3" />
      <line className="draw" x1="30" y1="118" x2="30" y2="122" />

      {/* waypoints */}
      <circle className="draw draw--bronze" cx="58" cy="100" r="3" />
      <circle className="draw draw--bronze" cx="92" cy="68" r="3" />

      {/* destination pin */}
      <circle className="draw draw--ember" cx="130" cy="80" r="8" />
      <circle className="draw" cx="130" cy="80" r="3" />
      <line className="draw draw--ember" x1="130" y1="68" x2="130" y2="72" />

      {/* grid lines (ghost map) */}
      <line className="draw" x1="50" y1="20" x2="50" y2="148" strokeWidth="0.3" />
      <line className="draw" x1="80" y1="20" x2="80" y2="148" strokeWidth="0.3" />
      <line className="draw" x1="110" y1="20" x2="110" y2="148" strokeWidth="0.3" />
      <line className="draw" x1="20" y1="50" x2="148" y2="50" strokeWidth="0.3" />
      <line className="draw" x1="20" y1="100" x2="148" y2="100" strokeWidth="0.3" />
    </svg>
  );
}

/** Content grid / canvas for Monty */
function MontyDiagram() {
  return (
    <svg viewBox="0 0 160 160" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* outer frame */}
      <rect className="draw draw--bronze" x="12" y="12" width="136" height="136" strokeWidth="0.5" />

      {/* 3x3 grid of post tiles */}
      <rect className="draw" x="24" y="24" width="32" height="32" />
      <rect className="draw draw--ember" x="64" y="24" width="32" height="32" strokeWidth="1.4" />
      <rect className="draw" x="104" y="24" width="32" height="32" />

      <rect className="draw" x="24" y="64" width="32" height="32" />
      <rect className="draw" x="64" y="64" width="32" height="32" />
      <rect className="draw" x="104" y="64" width="32" height="32" />

      {/* timeline at bottom */}
      <line className="draw draw--bronze" x1="24" y1="115" x2="136" y2="115" />
      <circle className="draw draw--bronze" cx="32" cy="115" r="2.5" />
      <circle className="draw draw--ember" cx="56" cy="115" r="3.5" />
      <circle className="draw draw--bronze" cx="80" cy="115" r="2.5" />
      <circle className="draw draw--bronze" cx="104" cy="115" r="2.5" />
      <circle className="draw draw--bronze" cx="128" cy="115" r="2.5" />

      {/* ticks below timeline */}
      <line className="draw" x1="32" y1="118" x2="32" y2="124" strokeWidth="0.5" />
      <line className="draw" x1="56" y1="118" x2="56" y2="124" strokeWidth="0.5" />
      <line className="draw" x1="80" y1="118" x2="80" y2="124" strokeWidth="0.5" />
      <line className="draw" x1="104" y1="118" x2="104" y2="124" strokeWidth="0.5" />
      <line className="draw" x1="128" y1="118" x2="128" y2="124" strokeWidth="0.5" />

      {/* tiny stylus / brush mark inside selected tile */}
      <path
        className="draw draw--ember"
        d="M 70 32 L 78 40 L 90 48"
        strokeWidth="1.4"
      />

      {/* corner registration mark */}
      <line className="draw draw--bronze" x1="138" y1="135" x2="144" y2="135" />
      <line className="draw draw--bronze" x1="141" y1="132" x2="141" y2="138" />
    </svg>
  );
}

const diagramMap = {
  nima: NimaDiagram,
  swyft: SwyftDiagram,
  monty: MontyDiagram,
};

export default function Workshop() {
  return (
    <section className="workshop" id="workshop">
      <header className="section-head">
        <div className="section-head__index">
          <span className="roman">III</span>
          <span>The Workshop</span>
        </div>
        <div>
          <h2 className="section-head__title">
            Things in <em>circulation.</em>
          </h2>
          <p className="section-head__lede">
            Selected works currently shipping into the world. Some bear my name,
            some bear my fingerprints. All of them, both.
          </p>
        </div>
      </header>

      <div className="workshop__grid">
        {projects.map((p) => {
          const Diagram = diagramMap[p.diagram];
          return (
            <a
              key={p.name}
              className="work-card"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="work-card__num">
                <span>Folio {p.folio}</span>
                <span className="pip" />
              </div>

              <div className="work-card__diagram">
                <Diagram />
              </div>

              <h3 className="work-card__name">{p.name}</h3>
              <p className="work-card__hand">{p.tagline}</p>
              <p className="work-card__body">{p.description}</p>

              <div className="work-card__meta">
                <div>
                  <div className="work-card__meta-label">Role</div>
                  <div className="work-card__meta-value">{p.role}</div>
                </div>
                <div>
                  <div className="work-card__meta-label">Year</div>
                  <div className="work-card__meta-value">{p.year}</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <div className="work-card__meta-label">Sector</div>
                  <div className="work-card__meta-value">{p.sector}</div>
                </div>
              </div>

              <ul className="work-card__tags">
                {p.stack.map((t, i) => (
                  <li key={t}>
                    {t}
                    {i < p.stack.length - 1 && <span style={{ marginLeft: '12px' }}>·</span>}
                  </li>
                ))}
              </ul>

              <span className="work-card__visit">
                Visit
                <span aria-hidden="true">→</span>
              </span>
            </a>
          );
        })}
      </div>

      <div className="workshop__more">
        <span className="workshop__more-hand">— and a quieter half-shelf of repositories.</span>
        <a
          href="https://github.com/4kClinton?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View All on GitHub</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
