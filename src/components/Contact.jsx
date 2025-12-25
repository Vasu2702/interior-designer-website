/*
  Contact section: a basic form.
  IMPORTANT: This form does not send emails yet (that requires a backend or form service).
  For now, we prevent the page refresh and show an alert so beginners can see it's working.
*/

export default function Contact() {
  function handleSubmit(event) {
    // Prevent the browser's default form behavior (refreshing the page)
    event.preventDefault();

    // In real projects, you'd send this data to a server/API.
    alert("Thanks! Your message was captured (demo). Next step: connect to email/API.");
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionSubtitle">
          Tell us about your space. We’ll reply with next steps and a consultation call.
        </p>

        <div className="contactGrid">
          <div className="card">
            <h3 className="cardTitle">Let’s talk</h3>
            <p className="helper">
              Share your goals (style, rooms, budget range, timeline). The more details you
              give, the better we can help.
            </p>
            <p className="helper">
              <b>Email:</b> hello@serenespaces.com
              <br />
              <b>Phone:</b> +91 90000 00000
              <br />
              <b>Location:</b> Your City, India
            </p>
          </div>

          <div className="card">
            {/* onSubmit runs when you press the submit button */}
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you want to design..."
                  required
                />
              </div>

              <button className="btn btnPrimary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


