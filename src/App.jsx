import './App.css'

export default function App() {
  const services = [
    {
      name: 'Basic Exterior Wash',
      price: '$30–$40',
      desc: 'Foam cannon wash, hand wash, wheels cleaned, tire shine, microfiber dry.',
    },
    {
      name: 'Basic Interior Detail',
      price: '$45–$65',
      desc: 'Vacuum carpets and seats, wipe plastics, and clean interior glass.',
    },
    {
      name: 'Deep Interior Cleaning',
      price: '$100–$130',
      desc: 'Vacuum plus shampoo extraction of carpets and seats, plastics cleaned, and door panels cleaned.',
    },
    {
      name: 'Headlight Restoration',
      price: '$50–$60',
      desc: 'Remove oxidation and restore headlight clarity.',
    },
    {
      name: 'Premium Detail',
      price: '$220–$260',
      desc: 'Wash, clay treatment, paint enhancement polish, interior deep cleaning, and wax protection.',
    },
    {
      name: 'Pet Hair Add-On',
      price: '$25–$45',
      desc: 'Extra charge based on severity of pet hair and extra time required.',
    },
  ]

  const highlights = [
    'Mobile-friendly local service',
    'Interior shampoo extraction available',
    'Paint enhancement and protection options',
    'Friendly pricing for Jurupa Valley / Mira Loma area',
  ]

  return (
    <div className="site">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-grid">
            <div>
              <div className="brand-badge">Henry Car Detailing</div>
              <h1>Professional detailing that makes your car feel new again.</h1>
              <p>
                Exterior washes, deep interior cleaning, shampoo extraction, headlight restoration,
                and premium detail packages for local drivers.
              </p>

              <div className="hero-buttons">
                <a href="#services" className="btn btn-primary">View Services</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
              </div>
            </div>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <div key={item} className="highlight-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Popular detailing options</h2>
            </div>
            <p>
              Straightforward pricing and services designed for everyday drivers who want their
              vehicle cleaner, shinier, and better protected.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.name} className="service-card">
                <div className="service-top">
                  <h3>{service.name}</h3>
                  <span className="price-pill">{service.price}</span>
                </div>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-band">
        <div className="info-grid">
          <div className="info-card">
            <h3>Why customers book</h3>
            <p>
              Convenient local service, honest pricing, and detail work that focuses on visible
              results customers actually notice.
            </p>
          </div>
          <div className="info-card">
            <h3>Great starter offer</h3>
            <p>
              Promote a basic wash, interior refresh, or headlight restoration to attract
              first-time clients.
            </p>
          </div>
          <div className="info-card">
            <h3>Built to grow</h3>
            <p>
              As you add before-and-after photos, reviews, and booking info, this can become a
              strong lead generator for your business.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Ready to book?</h2>
            <p>
              Add your phone number, Instagram, and service area here so local customers can reach
              you fast.
            </p>
          </div>

          <div className="contact-card">
            <p><strong>Phone:</strong> (Your number here)</p>
            <p><strong>Instagram:</strong> @henrycardetailing</p>
            <p><strong>Service Area:</strong> Jurupa Valley / Mira Loma</p>
            <p><strong>Availability:</strong> By appointment</p>
          </div>
        </div>
      </section>
    </div>
  )
}