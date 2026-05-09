export default function Codex() {
  return (
    <section className="codex" id="codex">
      <header className="section-head">
        <div className="section-head__index">
          <span className="roman">II</span>
          <span>The Codex of Disciplines</span>
        </div>
        <div>
          <h2 className="section-head__title">
            Five hands.
            <br />
            <em>One workshop.</em>
          </h2>
          <p className="section-head__lede">
            Each discipline a study unto itself. Each study, a refinement of the others.
          </p>
        </div>
      </header>

      <div className="folios">
        {/* ================== FOLIO II.i — SOFTWARE ================== */}
        <article className="folio">
          <div className="folio__num">
            <span>Folio II.i</span>
            <span className="pip" />
            <span>Of Engines and Logic</span>
          </div>

          <div className="folio__diagram">
            <span className="corner-tick tl" />
            <span className="corner-tick tr" />
            <span className="corner-tick bl" />
            <span className="corner-tick br" />
            <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <line className="draw" x1="40" y1="120" x2="120" y2="120" />
              <line className="draw" x1="160" y1="120" x2="240" y2="120" />
              <line className="draw" x1="280" y1="120" x2="360" y2="120" />
              <circle className="draw" cx="40" cy="120" r="12" />
              <circle className="draw draw--ember" cx="40" cy="120" r="4" />
              <rect className="draw" x="120" y="100" width="40" height="40" />
              <line className="draw" x1="124" y1="108" x2="156" y2="108" />
              <line className="draw" x1="124" y1="116" x2="148" y2="116" />
              <line className="draw" x1="124" y1="124" x2="156" y2="124" />
              <line className="draw" x1="124" y1="132" x2="140" y2="132" />
              <path className="draw" d="M 240 100 L 270 120 L 240 140 L 210 120 Z" />
              <text className="label" x="222" y="125">if</text>
              <circle className="draw draw--ember" cx="360" cy="120" r="12" />
              <line className="draw draw--ember" x1="360" y1="108" x2="360" y2="132" />
              <line className="draw draw--ember" x1="348" y1="120" x2="372" y2="120" />
              <line className="draw" x1="240" y1="100" x2="240" y2="60" />
              <line className="draw" x1="240" y1="60" x2="320" y2="60" />
              <circle className="draw" cx="320" cy="60" r="8" />
              <text className="label" x="334" y="64">cache</text>
              <line className="draw" x1="240" y1="140" x2="240" y2="180" />
              <line className="draw" x1="240" y1="180" x2="320" y2="180" />
              <rect className="draw" x="320" y="170" width="20" height="20" />
              <text className="label" x="346" y="184">db</text>
              <text className="label" x="20" y="100">in</text>
              <text className="label" x="100" y="92">parse</text>
              <text className="label" x="350" y="100">out</text>
              <text className="stamp" x="40" y="220">FIG. II.i — DATAFLOW PRIMITIVE</text>
            </svg>
          </div>

          <h3 className="folio__title">
            Software <em>Engineering</em>
          </h3>
          <p className="folio__hand">— building things that think.</p>
          <p className="folio__body">
            Full-stack systems with a bias toward AI agents and African
            infrastructure. Convex, Next.js, React Native, Python — the working
            hands of a workshop that ships products, not slide decks.
          </p>
          <ul className="folio__tags">
            <li>Next.js</li><li>·</li>
            <li>React Native</li><li>·</li>
            <li>Convex</li><li>·</li>
            <li>Python</li><li>·</li>
            <li>LLM systems</li>
          </ul>
        </article>

        {/* ================== FOLIO II.ii — DESIGN ================== */}
        <article className="folio">
          <div className="folio__num">
            <span>Folio II.ii</span>
            <span className="pip" />
            <span>Of Proportion and Letter</span>
          </div>

          <div className="folio__diagram">
            <span className="corner-tick tl" />
            <span className="corner-tick tr" />
            <span className="corner-tick bl" />
            <span className="corner-tick br" />
            <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <rect className="draw" x="40" y="40" width="320" height="160" />
              <line className="draw" x1="238" y1="40" x2="238" y2="200" />
              <line className="draw" x1="40" y1="138" x2="238" y2="138" />
              <line className="draw" x1="238" y1="40" x2="238" y2="138" />
              <line className="draw" x1="161" y1="40" x2="161" y2="138" />
              <line className="draw" x1="161" y1="92" x2="238" y2="92" />
              <line className="draw" x1="161" y1="92" x2="200" y2="92" />
              <line className="draw" x1="200" y1="40" x2="200" y2="92" />
              <path
                className="draw draw--ember"
                d="M 238 138 A 98 98 0 0 1 40 138 M 40 138 A 98 98 0 0 1 40 40 M 40 40 A 60 60 0 0 1 161 40 M 161 40 A 38 38 0 0 1 161 92 M 161 92 A 23 23 0 0 1 200 92"
              />
              <circle className="draw draw--ember" cx="200" cy="92" r="3" />
              <line className="draw draw--bronze" x1="190" y1="92" x2="210" y2="92" />
              <line className="draw draw--bronze" x1="200" y1="82" x2="200" y2="102" />
              <path
                className="draw draw--bronze"
                d="M 290 180 L 320 100 L 350 180 M 300 160 L 340 160"
                strokeWidth="2"
              />
              <text className="label" x="48" y="56">φ</text>
              <text className="label" x="246" y="56">1 : 1.618</text>
              <text className="label" x="290" y="92">aa</text>
              <text className="stamp" x="40" y="222">FIG. II.ii — DIVINE PROPORTION</text>
            </svg>
          </div>

          <h3 className="folio__title">
            Graphic <em>Design</em>
          </h3>
          <p className="folio__hand">— when type and grid become music.</p>
          <p className="folio__body">
            Brand systems, identities, interfaces. I treat type like architecture
            and composition like Renaissance painters treated the picture
            plane — proportion is invisible until it isn&apos;t.
          </p>
          <ul className="folio__tags">
            <li>Identity</li><li>·</li>
            <li>Typography</li><li>·</li>
            <li>UI/UX</li><li>·</li>
            <li>Editorial</li>
          </ul>
        </article>

        {/* ================== FOLIO II.iii — DRAWING ================== */}
        <article className="folio">
          <div className="folio__num">
            <span>Folio II.iii</span>
            <span className="pip" />
            <span>Of the Hand</span>
          </div>

          <div className="folio__diagram">
            <span className="corner-tick tl" />
            <span className="corner-tick tr" />
            <span className="corner-tick bl" />
            <span className="corner-tick br" />
            <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path
                className="draw"
                d="M 110 200 C 110 170, 100 150, 110 130 C 120 110, 150 100, 180 105 C 210 110, 230 130, 235 160 C 240 180, 240 200, 230 220"
              />
              <path
                className="draw"
                d="M 110 160 C 90 150, 70 145, 60 130 C 55 120, 60 110, 75 105 C 90 100, 105 110, 115 125"
              />
              <path
                className="draw draw--ember"
                d="M 145 105 C 142 90, 140 70, 142 50 C 144 40, 152 35, 158 40 C 162 50, 160 80, 160 110"
              />
              <path
                className="draw"
                d="M 175 105 C 175 85, 178 65, 180 55 C 184 50, 190 52, 192 60 C 192 80, 190 100, 188 115"
              />
              <path
                className="draw"
                d="M 200 110 C 202 95, 205 80, 208 72 C 212 70, 216 75, 216 84 C 215 100, 213 115, 210 120"
              />
              <path
                className="draw"
                d="M 222 120 C 224 110, 228 100, 232 95 C 236 95, 238 100, 236 110 C 234 120, 232 130, 230 135"
              />
              <path className="draw draw--bronze" d="M 130 175 C 150 170, 180 168, 215 175" strokeWidth="0.6" />
              <path className="draw draw--bronze" d="M 125 195 C 150 190, 190 188, 220 195" strokeWidth="0.6" />
              <path className="draw draw--bronze" d="M 145 130 L 148 105" strokeWidth="0.6" />
              <path className="draw draw--bronze" d="M 175 130 L 178 110" strokeWidth="0.6" />
              <path className="draw draw--bronze" d="M 200 130 L 205 115" strokeWidth="0.6" />
              <circle className="draw draw--ember" cx="148" cy="115" r="2" />
              <circle className="draw" cx="180" cy="115" r="2" />
              <circle className="draw" cx="208" cy="120" r="2" />
              <line className="draw" x1="320" y1="50" x2="340" y2="50" />
              <line className="draw" x1="320" y1="100" x2="340" y2="100" />
              <line className="draw" x1="320" y1="150" x2="340" y2="150" />
              <line className="draw" x1="320" y1="200" x2="340" y2="200" />
              <line className="draw" x1="330" y1="50" x2="330" y2="200" />
              <text className="label" x="160" y="35">il dito</text>
              <text className="label" x="50" y="100">pollice</text>
              <text className="label" x="350" y="55">1.</text>
              <text className="label" x="350" y="105">2.</text>
              <text className="label" x="350" y="155">3.</text>
              <text className="stamp" x="40" y="222">FIG. II.iii — STUDY OF THE HAND</text>
            </svg>
          </div>

          <h3 className="folio__title">
            Drawing &amp; <em>Draughtsmanship</em>
          </h3>
          <p className="folio__hand">— the discipline beneath every other.</p>
          <p className="folio__body">
            Pencil, ink, charcoal. Portraits, anatomy, observation. Drawing is
            the foundation; every screen I design and every brushstroke I lay
            down begins as a line in a notebook.
          </p>
          <ul className="folio__tags">
            <li>Portrait</li><li>·</li>
            <li>Anatomy</li><li>·</li>
            <li>Ink</li><li>·</li>
            <li>Charcoal</li>
          </ul>
        </article>

        {/* ================== FOLIO II.iv — PAINTING ================== */}
        <article className="folio">
          <div className="folio__num">
            <span>Folio II.iv</span>
            <span className="pip" />
            <span>Of Pigment and Light</span>
          </div>

          <div className="folio__diagram">
            <span className="corner-tick tl" />
            <span className="corner-tick tr" />
            <span className="corner-tick bl" />
            <span className="corner-tick br" />
            <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <circle className="draw" cx="200" cy="120" r="80" />
              <circle className="draw" cx="200" cy="120" r="56" />
              <circle className="draw draw--ember" cx="200" cy="120" r="6" />
              <circle className="draw" cx="200" cy="120" r="2" />
              <line className="draw" x1="200" y1="40" x2="200" y2="200" />
              <line className="draw" x1="120" y1="120" x2="280" y2="120" />
              <line className="draw" x1="143" y1="63" x2="257" y2="177" />
              <line className="draw" x1="257" y1="63" x2="143" y2="177" />
              <line className="draw" x1="160" y1="51" x2="240" y2="189" />
              <line className="draw" x1="240" y1="51" x2="160" y2="189" />
              <path className="draw draw--ember" d="M 60 90 C 50 100, 50 120, 60 130" strokeWidth="3" />
              <path className="draw draw--bronze" d="M 60 130 C 50 140, 50 160, 60 170" strokeWidth="3" />
              <path className="draw" d="M 60 50 C 50 60, 50 80, 60 90" strokeWidth="3" />
              <path className="draw" d="M 340 50 C 350 60, 350 80, 340 90" strokeWidth="3" />
              <path className="draw draw--bronze" d="M 340 90 C 350 100, 350 120, 340 130" strokeWidth="3" />
              <path className="draw draw--ember" d="M 340 130 C 350 140, 350 160, 340 170" strokeWidth="3" />
              <text className="label" x="195" y="32">rosso</text>
              <text className="label" x="284" y="124">giallo</text>
              <text className="label" x="195" y="216">azzurro</text>
              <text className="label" x="92" y="124">verde</text>
              <text className="stamp" x="40" y="222">FIG. II.iv — RUOTA DEI COLORI</text>
            </svg>
          </div>

          <h3 className="folio__title">
            Painting &amp; <em>Pigment</em>
          </h3>
          <p className="folio__hand">— what cannot be said in code.</p>
          <p className="folio__body">
            Oils, acrylic, mixed media. Where draughtsmanship gives bones,
            painting gives blood. The work is private, slow, and stubborn —
            the antidote to a profession otherwise lived at machine speed.
          </p>
          <ul className="folio__tags">
            <li>Oil</li><li>·</li>
            <li>Acrylic</li><li>·</li>
            <li>Portrait</li><li>·</li>
            <li>Study</li>
          </ul>
        </article>

        {/* ================== FOLIO II.v — MAKER (full-width) ================== */}
        <article className="folio folio--wide">
          <div className="folio__num">
            <span>Folio II.v</span>
            <span className="pip" />
            <span>Of Wheels and Steel</span>
          </div>

          <div className="folio__diagram" style={{ aspectRatio: '24/9' }}>
            <span className="corner-tick tl" />
            <span className="corner-tick tr" />
            <span className="corner-tick bl" />
            <span className="corner-tick br" />
            <svg viewBox="0 0 800 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <path className="draw" d="M 200 160 L 560 160 L 580 180 L 600 180 L 600 200 L 560 200 L 520 220 L 240 220 L 200 200 L 180 200 L 180 180 L 200 180 Z" />
              <line className="draw draw--bronze" x1="220" y1="180" x2="560" y2="180" />
              <line className="draw draw--bronze" x1="240" y1="200" x2="540" y2="200" />
              <path className="draw" d="M 360 160 L 360 110 C 360 100, 370 95, 380 95 L 440 95 C 450 95, 460 100, 460 110 L 460 160" />
              <line className="draw draw--bronze" x1="370" y1="120" x2="450" y2="120" />
              <line className="draw draw--bronze" x1="370" y1="135" x2="450" y2="135" />
              <line className="draw draw--ember" x1="280" y1="160" x2="280" y2="80" />
              <circle className="draw draw--ember" cx="280" cy="70" r="22" />
              <line className="draw draw--ember" x1="258" y1="70" x2="302" y2="70" />
              <line className="draw draw--ember" x1="280" y1="48" x2="280" y2="92" />
              <rect className="draw" x="500" y="100" width="80" height="60" />
              <line className="draw draw--bronze" x1="510" y1="115" x2="570" y2="115" />
              <line className="draw draw--bronze" x1="510" y1="130" x2="570" y2="130" />
              <line className="draw draw--bronze" x1="510" y1="145" x2="570" y2="145" />
              <path className="draw" d="M 580 110 L 640 110 L 660 100 L 680 100" />
              <circle className="draw draw--ember" cx="685" cy="100" r="3" />
              <circle className="draw" cx="160" cy="220" r="36" />
              <circle className="draw draw--bronze" cx="160" cy="220" r="20" />
              <circle className="draw draw--ember" cx="160" cy="220" r="3" />
              <line className="draw draw--bronze" x1="160" y1="200" x2="160" y2="240" />
              <line className="draw draw--bronze" x1="140" y1="220" x2="180" y2="220" />
              <circle className="draw" cx="620" cy="220" r="36" />
              <circle className="draw draw--bronze" cx="620" cy="220" r="20" />
              <circle className="draw draw--ember" cx="620" cy="220" r="3" />
              <line className="draw draw--bronze" x1="620" y1="200" x2="620" y2="240" />
              <line className="draw draw--bronze" x1="600" y1="220" x2="640" y2="220" />
              <g>
                <line className="draw" x1="540" y1="100" x2="700" y2="40" />
                <circle className="draw draw--bronze" cx="720" cy="30" r="14" />
                <circle className="draw draw--ember" cx="720" cy="30" r="5" />
                <line className="draw draw--bronze" x1="708" y1="30" x2="732" y2="30" />
                <line className="draw draw--bronze" x1="720" y1="18" x2="720" y2="42" />
                <text className="label" x="740" y="30">M8</text>
              </g>
              <g>
                <line className="draw" x1="640" y1="240" x2="730" y2="240" />
                <circle className="draw draw--bronze" cx="745" cy="240" r="14" />
                <line className="draw draw--bronze" x1="731" y1="240" x2="759" y2="240" />
                <line className="draw draw--bronze" x1="745" y1="226" x2="745" y2="254" />
                <line className="draw draw--bronze" x1="735" y1="230" x2="755" y2="250" />
                <line className="draw draw--bronze" x1="755" y1="230" x2="735" y2="250" />
              </g>
              <line className="draw" x1="120" y1="265" x2="660" y2="265" />
              <line className="draw" x1="120" y1="260" x2="120" y2="270" />
              <line className="draw" x1="200" y1="262" x2="200" y2="268" />
              <line className="draw" x1="280" y1="262" x2="280" y2="268" />
              <line className="draw" x1="360" y1="260" x2="360" y2="270" />
              <line className="draw" x1="440" y1="262" x2="440" y2="268" />
              <line className="draw" x1="520" y1="262" x2="520" y2="268" />
              <line className="draw" x1="600" y1="260" x2="600" y2="270" />
              <line className="draw" x1="660" y1="260" x2="660" y2="270" />
              <text className="stamp" x="120" y="278">0</text>
              <text className="stamp" x="356" y="278">1m</text>
              <text className="stamp" x="652" y="278">2m</text>
              <text className="label" x="240" y="65">volante</text>
              <text className="label" x="380" y="80">sedile</text>
              <text className="label" x="510" y="92">motore</text>
              <text className="label" x="115" y="180">ruota anteriore</text>
              <text className="label" x="585" y="180">ruota posteriore</text>
              <text className="stamp" x="20" y="20">FIG. II.v — VEHICULA MINUTA · STUDIO ESPLOSO</text>
            </svg>
          </div>

          <div className="folio--wide-grid">
            <div>
              <h3 className="folio__title">
                The <em>Maker</em>
              </h3>
              <p className="folio__hand">— go-karts, jigs, and back-yard machinery.</p>
            </div>
            <div>
              <p className="folio__body">
                What Leonardo would have called <em>la mano del fabbro</em> — the
                hand of the smith. I cut, weld, and assemble go-karts and small
                machines in the back yard. Not automotive engineering. Closer to
                a Renaissance workshop: build the thing, learn what it teaches
                you, build the next one better.
              </p>
              <ul className="folio__tags">
                <li>Welding</li><li>·</li>
                <li>Fabrication</li><li>·</li>
                <li>Mechanical design</li><li>·</li>
                <li>Iteration</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
