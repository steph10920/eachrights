function Contact() {
  return (
    <main>
      <section>
        <h1>Contact Us</h1>
        <p>
          Get in touch with EACHRights. We welcome enquiries, partnerships,
          collaboration, and community engagement.
        </p>

        <div>
          <h2>Send Us a Message</h2>

          <form>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
            />

            <input
              type="text"
              placeholder="Subject"
              name="subject"
            />

            <textarea
              placeholder="Your Message"
              name="message"
              rows="6"
            />

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;