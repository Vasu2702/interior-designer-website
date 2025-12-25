/*
  Footer: simple bottom bar.
  Tip: new Date().getFullYear() auto-updates the year.
*/

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span>
          © {new Date().getFullYear()} Serene Spaces Interior Design. All rights reserved.
        </span>
        <span>Designed with care • Minimal • Modern</span>
      </div>
    </footer>
  );
}


