import { useState } from 'react'
import './App.css'

export default function App() {
  const webhookUrl =
    import.meta.env.VITE_BOOKING_WEBHOOK_URL ||
    'https://script.google.com/macros/s/AKfycbwSepdK63XRnvnqV96S7A7fa_VheKrhbHvZdrMP4X5v5_gxf9mii63tMkFG4OrXxL9tDA/exec'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: '',
    preferredTime: '',
    notes: '',
    company: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceGroups = [
    {
      label: 'Most Popular',
      items: [
        {
          name: 'Complete Full Detail',
          price: 'Starting at $160',
          time: 'Approx. 2-3 hours',
          desc: 'A strong all-around package for customers who want the inside and outside of the vehicle cleaned up in one visit.',
          includes: [
            'Complete exterior wash and towel dry',
            'Wheels and tires deep cleaned',
            'Tire shine in satin or gloss finish',
            'Full interior vacuum',
            'Dash, doors, console, and cup holders cleaned',
            'Interior and exterior windows cleaned',
            'Plastic and trim dressed for a factory-finish look',
          ],
          featured: true,
        },
      ],
    },
    {
      label: 'Exterior Services',
      items: [
        {
          name: 'Exterior Detail',
          price: 'Starting at $55',
          time: 'Approx. 1-1.5 hours',
          desc: 'Built for regular upkeep when the outside needs a proper hand wash and a cleaner finished look.',
          includes: [
            'Exterior detailing clean',
            'Wheels and tires cleaned',
            'Tire shine',
            'Exterior windows cleaned',
            'Microfiber towel dry',
          ],
        },
        {
          name: 'Deep Exterior Detail',
          price: 'Starting at $95',
          time: 'Approx. 1.5-2 hours',
          desc: 'For dirtier vehicles that need more time spent on buildup, trim, and a stronger finished presentation.',
          includes: [
            'Everything in exterior detail',
            'Deeper bug and grime removal',
            'Door jamb wipe down',
            'Trim refresh',
            'Finishing gloss treatment',
          ],
        },
      ],
    },
    {
      label: 'Interior Services',
      items: [
        {
          name: 'Interior Detail',
          price: 'Starting at $75',
          time: 'Approx. 1-1.5 hours',
          desc: 'A maintenance-level interior cleanup for vehicles that need vacuuming, wipe down work, and a fresher cabin.',
          includes: [
            'Full vacuum for seats, carpets, and mats',
            'Dash, doors, console, and cup holders cleaned',
            'Interior windows cleaned',
            'Light plastic dressing with a non-greasy finish',
          ],
        },
        {
          name: 'Deep Interior Cleaning',
          price: 'Starting at $130',
          time: 'Approx. 2-3 hours',
          desc: 'Best for stains, spills, pets, kids, and interiors that need more than a basic reset.',
          includes: [
            'Everything in interior detail',
            'Carpet and seat shampoo extraction',
            'Stain treatment and agitation',
            'Deeper cleaning on high-touch surfaces',
          ],
        },
      ],
    },
    {
      label: 'Add-Ons',
      items: [
        {
          name: 'Headlight Restoration',
          price: '$50-$70',
          time: 'Approx. 30-45 min',
          desc: 'Helps remove oxidation and cloudiness so headlights look clearer and nighttime visibility improves.',
          includes: [
            'Restoration process to improve clarity',
            'Oxidation and haze removal',
            'Protective finish applied',
          ],
        },
        {
          name: 'Carpet and Seat Deep Clean',
          price: '$35-$50',
          time: 'Add-on time varies',
          desc: 'Ideal for pets, kids, muddy shoes, or spills that need stronger stain-focused cleaning.',
          includes: [
            'Stain treatment and agitation',
            'Targeted extraction work',
            'Works well with interior packages',
          ],
        },
        {
          name: 'Tire and Trim Enhancement',
          price: '$15-$25',
          time: 'Approx. 15-20 min',
          desc: 'Adds a darker, cleaner finish to tires and trim without leaving an overly greasy look.',
          includes: [
            'Deep black tire finish',
            'Restored exterior trim appearance',
            'Factory-finish look',
          ],
        },
        {
          name: 'Pet Hair Removal',
          price: '$25-$45',
          time: 'Based on severity',
          desc: 'Extra labor for stubborn pet hair that needs more time and more detailed removal work.',
          includes: [
            'Focused pet hair removal',
            'Quoted by severity',
          ],
        },
      ],
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

  const quoteReasons = [
    'Vehicle size and overall condition',
    'Pet hair, stains, or heavy buildup',
    'How deep the interior or exterior needs to be cleaned',
    'Any add-ons like headlights, trim, or extraction',
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Tell me about your vehicle',
      text: 'Share your vehicle details and the service you are interested in through the booking form.',
    },
    {
      step: '02',
      title: 'Get your quote confirmed',
      text: 'You will get a quick response to confirm pricing, service details, and the best booking time.',
    },
    {
      step: '03',
      title: 'Enjoy the finished result',
      text: 'Your vehicle gets the kind of careful detailing that leaves it cleaner, fresher, and better presented.',
    },
  ]

  const trustPoints = [
    'Now operating as an LLC',
    'Local mobile detailing service',
    'Quotes confirmed before work starts',
    'Serving Jurupa Valley and Riverside',
  ]

  const faqs = [
    {
      question: 'Do prices change based on the vehicle?',
      answer:
        'Yes. Final pricing depends on the size of the vehicle, its current condition, and how deep the cleaning needs to go.',
    },
    {
      question: 'Do you bring your own detailing supplies?',
      answer:
        'Yes. Mobile appointments are set up to keep the process simple, and the service is confirmed with you before the job starts.',
    },
    {
      question: 'How long does a detail usually take?',
      answer:
        'Most appointments take anywhere from around 1 hour to 3 hours depending on the service and the condition of the vehicle.',
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

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!webhookUrl) {
      setStatus({
        type: 'error',
        message: 'Add your Google Sheets webhook first, then this form will start saving leads.',
      })
      return
    }

    if (formData.company) {
      setStatus({
        type: 'success',
        message: 'Thanks. Your request was sent.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          name: formData.name,
          phone: formData.phone,
          vehicle: formData.vehicle,
          service: formData.service,
          preferredTime: formData.preferredTime,
          notes: formData.notes,
          source: 'Henry Car Detailing Website',
        }),
      })

      setStatus({
        type: 'success',
        message: 'Thanks. Your request was sent successfully, and I will reach out to you as soon as possible.',
      })
      setFormData({
        name: '',
        phone: '',
        vehicle: '',
        service: '',
        preferredTime: '',
        notes: '',
        company: '',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending the form. Please call or text instead.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

      <section className="trust-strip">
        <div className="section-inner trust-strip-inner">
          {trustPoints.map((item) => (
            <div key={item} className="trust-pill">{item}</div>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="eyebrow">Services</p>
              <h2>Detailing options built for regular upkeep and deeper cleanups</h2>
            </div>
            <p>
              Every vehicle is a little different, so pricing starts here and is confirmed based on
              size, condition, and the level of cleaning you want.
            </p>
          </div>

          <div className="service-groups">
            {serviceGroups.map((group) => (
              <section key={group.label} className="service-group">
                <div className="service-group-header">
                  <p className="service-group-label">{group.label}</p>
                </div>

                {group.label === 'Most Popular' ? (
                  <div className="service-highlight-layout">
                    <div className="services-grid services-grid-featured">
                      {group.items.map((service) => (
                        <div
                          key={service.name}
                          className={`service-card${service.featured ? ' service-card-featured' : ''}`}
                        >
                          {service.featured ? <span className="service-badge">Most Booked</span> : null}
                          <div className="service-top">
                            <h3>{service.name}</h3>
                            <span className="price-pill">{service.price}</span>
                          </div>
                          <p className="service-time">{service.time}</p>
                          <p>{service.desc}</p>
                          <ul className="service-list">
                            {service.includes.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <aside className="service-aside">
                      <p className="service-aside-label">Why customers choose this</p>
                      <h3>Clear pricing, no surprises, and a service built around your vehicle.</h3>
                      <p>
                        Starting prices keep things simple, and your final quote is based on the
                        actual condition of your vehicle and the service you want.
                      </p>

                      <ul className="service-aside-list">
                        {quoteReasons.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <div className="service-aside-note">
                        <strong>Before your appointment:</strong> You will know the confirmed price
                        before the work begins.
                      </div>
                    </aside>
                  </div>
                ) : (
                  <div className="services-grid">
                    {group.items.map((service) => (
                      <div
                        key={service.name}
                        className={`service-card${service.featured ? ' service-card-featured' : ''}`}
                      >
                        <div className="service-top">
                          <h3>{service.name}</h3>
                          <span className="price-pill">{service.price}</span>
                        </div>
                        <p className="service-time">{service.time}</p>
                        <p>{service.desc}</p>
                        <ul className="service-list">
                          {service.includes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="eyebrow">How It Works</p>
              <h2>Easy to book, clear from the start, and built around your vehicle</h2>
            </div>
            <p>
              Booking should feel simple. From your first message to the finished detail, the goal
              is to keep everything clear, straightforward, and easy.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="process-card">
                <p className="process-step">{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
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

      <section className="faq section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Answers to a few common questions before you book</h2>
            </div>
            <p>
              A few quick answers can make it easier to decide if the service is the right fit for
              your vehicle.
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
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
              You get careful hands-on work, real attention to detail, and results that feel worth
              it when you see your vehicle finished.
            </p>
          </div>
          <div className="info-card">
            <h3>Local service you can trust</h3>
            <p>
              Henry Car Detailing serves Jurupa Valley and Riverside with dependable appointment
              service focused on giving your vehicle the kind of premium treatment it deserves.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Request a callback</h2>
            <p>
              Fill out the form and I will reach out to you as soon as possible to go over your
              vehicle, the service you want, and the best time to book.
            </p>

            <div className="contact-details">
              <p><strong>Phone:</strong> 951-332-1957</p>
              <p><strong>Service Area:</strong> Jurupa Valley / Riverside</p>
              <p><strong>Availability:</strong> By appointment</p>
            </div>
          </div>

          <div className="contact-card">
            <form className="lead-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label className="form-field">
                  <span>Name</span>
                  <input name="name" value={formData.name} onChange={handleChange} required />
                </label>

                <label className="form-field">
                  <span>Phone number</span>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="951-555-1234"
                    required
                  />
                </label>

                <label className="form-field">
                  <span>Vehicle</span>
                  <input
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="Year, make, model"
                  />
                </label>

                <label className="form-field">
                  <span>Service wanted</span>
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Choose a service</option>
                    {serviceGroups.flatMap((group) =>
                      group.items.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name}
                        </option>
                      ))
                    )}
                  </select>
                </label>
              </div>

              <label className="form-field">
                <span>Best time to reach you</span>
                <input
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  placeholder="Weekday afternoons, evenings, etc."
                />
              </label>

              <label className="form-field">
                <span>Extra details</span>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell me about your vehicle, condition, or what you want done."
                />
              </label>

              <label className="form-field form-field-hidden" aria-hidden="true">
                <span>Company</span>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </label>

              {status.message ? (
                <p className={`form-status form-status-${status.type}`}>{status.message}</p>
              ) : null}

              <button className="btn btn-primary form-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Request Your Quote'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="mobile-cta">
        <a href="tel:9513321957" className="mobile-cta-link mobile-cta-call">Call Now</a>
        <a href="#contact" className="mobile-cta-link mobile-cta-book">Book Online</a>
      </div>

      <footer className="site-footer">
        <div className="section-inner site-footer-inner">
          <p>Henry Car Detailing LLC</p>
          <p>Jurupa Valley / Riverside</p>
          <p>951-332-1957</p>
        </div>
      </footer>
    </div>
  )
}
