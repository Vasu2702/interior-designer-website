/*
  About section: a simple introduction to the company.
  This is plain JSX (HTML-like syntax inside JavaScript).
*/

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="sectionTitle">About</h2>
        <p className="sectionSubtitle">
          We’re a boutique interior design studio focused on warm, timeless spaces.
          Our process is simple: listen first, design thoughtfully, and execute
          with care.
        </p>

        <div className="grid3">
          <div className="card">
            <h3 className="cardTitle">Our style</h3>
            <p className="cardText">
              Soft colors, natural materials, and clean lines—so your space feels
              calm and premium, not cluttered.
            </p>
          </div>

          <div className="card">
            <h3 className="cardTitle">Our process</h3>
            <p className="cardText">
              Consultation → concept → 3D layout → material selection → execution.
              You always know what’s happening next.
            </p>
          </div>

          <div className="card">
            <h3 className="cardTitle">Our promise</h3>
            <p className="cardText">
              Practical designs that look beautiful and work for real life—built
              on budgets, timelines, and clear communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


