/*
  A React component is just a JavaScript function that returns UI (HTML-like JSX).
  This Header component shows the top navigation bar.
*/

export default function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        {/* "Brand" area: logo + company name */}
        <a className="brand" href="#home" aria-label="Go to Home section">
          <span className="brandMark" aria-hidden="true" />
          <span>Serene Spaces</span>
        </a>

        {/* Navigation links scroll to sections on the same page */}
        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}


