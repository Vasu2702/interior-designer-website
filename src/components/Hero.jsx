/*
  The "Hero" is the big top section people see first.
  It usually includes:
  - A headline (tagline)
  - A short description
  - Call-to-action buttons (like "View Portfolio")
*/

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container heroGrid">
        <div>
          <p className="chip">Interior Design Studio • Residential & Commercial</p>

          <h1 className="heroTitle">
            Design spaces that feel <span>calm</span>, <span>luxurious</span>, and{" "}
            <span>you</span>.
          </h1>

          <p className="heroText">
            We help homeowners and businesses create beautiful interiors—thoughtful
            layouts, warm materials, and finishing details that make daily life
            better.
          </p>

          <div className="heroActions">
            <a className="btn btnPrimary" href="#portfolio">
              View Portfolio
            </a>
            <a className="btn" href="#contact">
              Get a Free Consultation
            </a>
          </div>
        </div>

        {/* Right side: a "visual" card with an image placeholder */}
        <div className="heroCard">
          <div className="heroCardTop">
            <p className="chip">Featured Project</p>
            <p className="chip">2025</p>
          </div>

          <div className="heroImage" aria-label="Project image placeholder">
            {/* This image is an SVG placeholder stored in /public */}
            <img src="/placeholder.svg" alt="Interior project placeholder" />
          </div>

          {/* Quick stats - purely to make the UI feel more professional */}
          <div className="stats" aria-label="Company highlights">
            <div className="stat">
              <div className="statNum">120+</div>
              <div className="statLabel">Projects completed</div>
            </div>
            <div className="stat">
              <div className="statNum">4.9/5</div>
              <div className="statLabel">Client rating</div>
            </div>
            <div className="stat">
              <div className="statNum">10 yrs</div>
              <div className="statLabel">Design experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


