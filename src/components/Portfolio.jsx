/*
  Portfolio section: an image gallery.
  Right now we use placeholders (so you can swap in real photos later).
*/

const projects = [
  { title: "Modern Living Room", subtitle: "Warm neutrals • soft lighting" },
  { title: "Minimal Modular Kitchen", subtitle: "Matte finish • smart storage" },
  { title: "Calm Bedroom", subtitle: "Natural textures • cozy palette" },
  { title: "Office Reception", subtitle: "Brand-forward • welcoming" },
  { title: "Compact Home Office", subtitle: "Space-saving • ergonomic" },
  { title: "Luxury Washroom", subtitle: "Stone look • premium details" },
];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 className="sectionTitle">Portfolio</h2>
        <p className="sectionSubtitle">
          A few example projects. Replace the placeholders with your real photos
          when you’re ready.
        </p>

        <div className="gallery">
          {projects.map((p) => (
            <article className="galleryItem" key={p.title}>
              <img src="/placeholder.svg" alt={`${p.title} placeholder`} />
              <div className="galleryCaption">
                <b>{p.title}</b>
                <span>{p.subtitle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


