export default function Nav() {
  return (
    <nav className="codex-nav" aria-label="Primary">
      <a className="codex-nav__brand" href="/">
        <span className="glyph" aria-hidden="true" />
        <span>Folio I</span>
        <span className="dot">·</span>
        <span>Kibet</span>
        <span className="dot">·</span>
        <span>MMXXVI</span>
      </a>
      <ul className="codex-nav__links">
        <li>
          <a href="/#codex">Codex</a>
        </li>
        <li>
          <a href="/#workshop">Workshop</a>
        </li>
        <li>
          <a href="/#manifesto">Manifesto</a>
        </li>
        <li>
          <a href="/articles">Marginalia</a>
        </li>
        <li>
          <a href="/#correspondence">Correspondence</a>
        </li>
      </ul>
    </nav>
  );
}
