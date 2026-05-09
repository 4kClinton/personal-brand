export default function Nav() {
  return (
    <nav className="codex-nav" aria-label="Primary">
      <div className="codex-nav__brand">
        <span className="glyph" aria-hidden="true" />
        <span>Folio I</span>
        <span className="dot">·</span>
        <span>Kibet</span>
        <span className="dot">·</span>
        <span>MMXXVI</span>
      </div>
      <ul className="codex-nav__links">
        <li>
          <a href="#codex">Codex</a>
        </li>
        <li>
          <a href="#workshop">Workshop</a>
        </li>
        <li>
          <a href="#manifesto">Manifesto</a>
        </li>
        <li>
          <a href="#correspondence">Correspondence</a>
        </li>
      </ul>
    </nav>
  );
}
