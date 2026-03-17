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
    {
      title: 'Hand-finished care',
      text: 'Premium detailing done with patience, not rushed through a tunnel wash.',
    },
    {
      title: 'Interior reset',
      text: 'Deep cleaning and extraction that makes the cabin feel fresher and cleaner.',
    },
    {
      title: 'Paint glow',
      text: 'Wash, enhancement, and protection options that bring back shine.',
    },
    {
      title: 'Local and mobile',
      text: 'Serving Jurupa Valley and Riverside by appointment.',
    },
  ]

  const transformations = [
    {
      title: 'Rear view transformation',
      blurb:
        'Heavy dust and buildup were removed to bring back a cleaner finish and a much sharper presentation from the same angle.',
      before: 'Dirty',
      after: 'Clean',
      beforeImage: '/Cruze_back_dirty.jpg',
      afterImage: '/Cruze_Back_Clean.jpg',
      altBefore: 'Dirty rear view of a black Chevrolet Cruze before detailing',
      altAfter: 'Clean rear view of a black Chevrolet Cruze after detailing',
    },
    {
      title: 'Interior refresh customers notice fast',
      blurb:
        'Dust, debris, and everyday buildup were cleaned out to leave the cabin looking sharper, fresher, and much better cared for.',
      before: 'Dirty',
      after: 'Clean',
      beforeImage: '/Cruze_backseat_dirty.jpg',
      afterImage: '/Cruze_backseat_clean.jpg',
      altBefore: 'Dirty back seat area of a Chevrolet Cruze before detailing',
      altAfter: 'Clean back seat area of a Chevrolet Cruze after detailing',
    },
    {
      title: 'Front end brought back to life',
      blurb:
        'This front-end cleanup shows the difference a careful wash and finish can make when the paint and glass are properly refreshed.',
      before: 'Dirty',
      after: 'Clean',
      beforeImage: '/Cruze_front_dirty.jpg',
      afterImage: '/Cruze_Front_clean.jpg',
      altBefore: 'Dirty front view of a black Chevrolet Cruze before detailing',
      altAfter: 'Clean front view of a black Chevrolet Cruze after detailing',
    },
  ]

  const spotlightShots = [
    {
      title: 'Headlight restoration examples',
      blurb:
        'Both of these headlight restorations show how clearer lenses can instantly make a vehicle look newer, cleaner, and better cared for.',
      images: [
        {
          src: '/Cruze_Headlight_passanger.jpg',
          label: 'Black car headlight',
          alt: 'Restored headlight on a black Chevrolet Cruze',
        },
        {
          src: '/Odyssey_headlight_driver.jpg',
          label: 'White car headlight',
          alt: 'Restored driver-side headlight on a white Honda Odyssey',
        },
      ],
    },
    {
      title: 'Finished details that elevate the whole car',
      blurb:
        'Clean side panels, bright trim, and a more polished overall finish help the vehicle look cared for from every angle, not just up close.',
      images: [
        {
          src: '/Cruze_passanger_clean.jpg',
          label: 'Clean side view',
          alt: 'Clean passenger-side view of a black Chevrolet Cruze after detailing',
        },
        {
          src: '/Cruze_passwheel_clean.jpg',
          label: 'Dialed-in finish',
          alt: 'Detailed passenger-side wheel and body finish on a black Chevrolet Cruze',
        },
      ],
    },
  ]

  return (
    <div className="site">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="brand-badge">Henry Car Detailing</div>
              <p className="hero-kicker">Mobile detailing for drivers who want their car to actually look cared for.</p>
              <h1>
                Premium detailing that makes
                <span className="hero-title-accent">daily drivers look worth showing off.</span>
              </h1>
              <p>
                From refined exterior washes to deep interior care, Henry Car Detailing delivers
                polished, high-quality service for drivers in Jurupa Valley and Riverside who want
                their vehicle to look its absolute best.
              </p>

              <div className="hero-buttons">
                <a href="#services" className="btn btn-primary">Explore Services</a>
                <a href="#contact" className="btn btn-secondary">Book Your Detail</a>
              </div>

              <div className="hero-microproof">
                <span>Exterior wash</span>
                <span>Interior deep clean</span>
                <span>Headlight restoration</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-panel-intro">
                <p className="hero-panel-label">Why people book</p>
                <h2>Clean visuals, honest pricing, and results people notice fast.</h2>
              </div>

              <div className="highlight-grid">
              {highlights.map((item) => (
                <div key={item.title} className="highlight-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
              </div>
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

      <section className="results section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="eyebrow">Results</p>
              <h2>Before and after work customers can actually see</h2>
            </div>
            <p>
              A strong detail should be visible at a glance. This section is built to showcase the
              kind of transformation that helps customers trust the quality before they even call.
            </p>
          </div>

          <div className="results-list">
            {transformations.map((item) => (
              <article key={item.title} className="result-card">
                <div className="result-photos">
                  <div className="result-photo-frame">
                    <img className="result-photo-image" src={item.beforeImage} alt={item.altBefore} />
                    <span className="photo-tag">{item.before}</span>
                  </div>
                  <div className="result-photo-frame">
                    <img className="result-photo-image" src={item.afterImage} alt={item.altAfter} />
                    <span className="photo-tag">{item.after}</span>
                  </div>
                </div>

                <div className="result-copy">
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
              </article>
            ))}

            {spotlightShots.map((item) => (
              <article key={item.title} className="result-card">
                <div className="result-photos">
                  {item.images.map((image) => (
                    <div key={image.src} className="result-photo-frame">
                      <img className="result-photo-image" src={image.src} alt={image.alt} />
                      <span className="photo-tag">{image.label}</span>
                    </div>
                  ))}
                </div>

                <div className="result-copy">
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
              </article>
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
