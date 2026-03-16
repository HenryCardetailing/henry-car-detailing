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
              <h1>Premium car detailing with results you can see right away.</h1>
              <p>
                From refined exterior washes to deep interior care, Henry Car Detailing delivers
                polished, high-quality service for drivers in Jurupa Valley and Riverside who want
                their vehicle to look its absolute best.
              </p>

              <div className="hero-buttons">
                <a href="#services" className="btn btn-primary">Explore Services</a>
                <a href="#contact" className="btn btn-secondary">Book Your Detail</a>
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
            <h3>Quality you can see</h3>
            <p>
              Every detail is done with care so your vehicle looks cleaner, glossier, and better
              cared for than a quick drive-through wash can deliver.
            </p>
          </div>
          <div className="info-card">
            <h3>Honest pricing, real value</h3>
            <p>
              You get hands-on service, attention to the small details, and results that make the
              price worth it from the moment you see your car finished.
            </p>
          </div>
          <div className="info-card">
            <h3>Local service you can trust</h3>
            <p>
              Henry Car Detailing serves Jurupa Valley and Riverside with dependable appointment
              service focused on making every customer feel like their car got premium treatment.
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
              Reach out today to schedule your detail and get your vehicle looking clean, fresh,
              and protected.
            </p>
          </div>

          <div className="contact-card">
            <p><strong>Phone:</strong> 951-332-1957</p>
            <p><strong>Service Area:</strong> Jurupa Valley / Riverside</p>
            <p><strong>Availability:</strong> By appointment</p>
          </div>
        </div>
      </section>
    </div>
  )
}
