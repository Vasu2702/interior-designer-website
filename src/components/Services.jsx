/*
  Services section: we’ll list what the company offers.
  For beginners: this also shows a common React pattern:
  - Put data in an array
  - Use .map() to turn it into UI cards
*/

const services = [
  {
    title: "Interior Design (Residential)",
    text: "Living rooms, bedrooms, and full-home makeovers—optimized for comfort and style.",
  },
  {
    title: "Modular Kitchen",
    text: "Smart storage, durable finishes, and layouts designed for how you actually cook.",
  },
  {
    title: "Office Design",
    text: "Professional, productive spaces: cabins, workstations, meeting rooms, and reception areas.",
  },
  {
    title: "3D Layouts & Planning",
    text: "Visualize your space before building—fewer surprises and clearer decisions.",
  },
  {
    title: "Renovation & Execution",
    text: "On-site coordination, vendor management, and quality checks from start to finish.",
  },
  {
    title: "Styling & Décor",
    text: "Furniture, lighting, wall art, and finishing touches that bring the design to life.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="sectionTitle">Services</h2>
        <p className="sectionSubtitle">
          Pick one service or combine multiple. We tailor everything to your space,
          budget, and timeline.
        </p>

        <div className="grid3">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <h3 className="cardTitle">{service.title}</h3>
              <p className="cardText">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


