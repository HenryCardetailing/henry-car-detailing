export default function HenryCarDetailingWebsite() {
  const services = [
    { name: 'Basic Exterior Wash', price: '$30–$40', desc: 'Foam cannon wash, hand wash, wheels cleaned, tire shine, microfiber dry.' },
    { name: 'Basic Interior Detail', price: '$45–$65', desc: 'Vacuum carpets and seats, wipe plastics, and clean interior glass.' },
    { name: 'Deep Interior Cleaning', price: '$100–$130', desc: 'Vacuum plus shampoo extraction of carpets and seats, plastics cleaned, and door panels cleaned.' },
    { name: 'Headlight Restoration', price: '$50–$60', desc: 'Remove oxidation and restore headlight clarity.' },
    { name: 'Premium Detail', price: '$220–$260', desc: 'Wash, clay treatment, paint enhancement polish, interior deep cleaning, and wax protection.' },
  ];

  const highlights = [
    'Mobile-friendly local service',
    'Interior shampoo extraction available',
    'Paint enhancement and protection options',
    'Friendly pricing for Jurupa Valley / Mira Loma area',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full border border-white/15 px-4 py-1 text-sm text-slate-200">
                Henry Car Detailing
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Professional detailing that makes your car feel new again.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Exterior washes, deep interior cleaning, shampoo extraction, headlight restoration, and premium detail packages for local drivers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02]"
                >
                  View Services
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
                  <div className="text-base font-medium text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Services</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Popular detailing options</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Straightforward pricing and services designed for everyday drivers who want their vehicle cleaner, shinier, and better protected.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <span className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-200">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold">Why customers book</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Convenient local service, honest pricing, and detail work that focuses on visible results customers actually notice.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold">Great starter offer</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Use this website to promote a basic wash, interior refresh, or headlight restoration to attract first-time clients.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold">Built to grow</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              As you add before-and-after photos, reviews, and booking info, this can become a strong lead generator for your business.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Ready to book?</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Add your phone number, Instagram, and service area here so local customers can reach you fast.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <div className="space-y-4 text-slate-200">
              <p><span className="font-semibold text-white">Phone:</span> (Your number here)</p>
              <p><span className="font-semibold text-white">Instagram:</span> @henrycardetailing</p>
              <p><span className="font-semibold text-white">Service Area:</span> Jurupa Valley / Mira Loma</p>
              <p><span className="font-semibold text-white">Availability:</span> By appointment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
