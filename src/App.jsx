import { useState } from 'react'
import arrowsLogo from '../src/assets/ArrowsT_CCorp_LOGO.png'
import emailjs from '@emailjs/browser'

const ORANGE = '#a67c00'
const DARK = '#00233c'

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#about">
          <img src={arrowsLogo} alt="ARROWS Training and Consultancy Corporation" className="h-12 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Programs', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: '#0F172A' }}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: ORANGE }}
        >
          Book Consultation
        </a>
        <button className="md:hidden" style={{ color: '#0F172A' }} onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Services', 'About', 'Programs', 'Testimonials', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm" style={{ color: '#0F172A' }} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-2 rounded text-sm font-semibold text-white" style={{ backgroundColor: ORANGE }}>
            Book Consultation
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center pt-16"
      style={{ backgroundColor: DARK }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${DARK} 55%, transparent 100%)` }} />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-xl">
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 mb-8 border"
            style={{ color: ORANGE, borderColor: ORANGE }}
          >
            CORPORATE TRAINING, CONSULTANCY AND SYSTEMS DEVELOPMENT
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-2">
            Precision Training.
          </h2>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: ORANGE }}>
            Transformational Leadership, and<br />Systems Engineering.
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-md">
            ARROWS empowers workforces with targeted skill-building and equips executives with the strategic clarity to drive sustainable corporate growth — engagement after engagement.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: ORANGE }}
            >
              Build Your Solution <span>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold text-white border border-white/40 hover:border-white transition-colors whitespace-nowrap"
            >
              View Tech &amp; Systems
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold text-white border border-white/40 hover:border-white transition-colors whitespace-nowrap"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

const serviceCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Strategic Business Consultancy',
    desc: 'Aligning vision, operations, and leadership to drive sustainable organizational growth.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Leadership Development & Corporate Upskilling ',
    desc: 'Cultivating high-performing leaders and equipping teams with future-ready skills.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Custom Systems Development',
    desc: 'Engineering scalable software, automated workflows, and robust digital architecture.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Compliance & Workforce Assessment',
    desc: 'Valuating readiness, mitigating risk, and benchmarking against industry standards.',
  },
]

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ORANGE }}>What We Do</div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Services Built Around Business Outcomes</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            Every engagement is designed to translate directly into performance, retention, and revenue results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <div key={card.title} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: DARK, color: ORANGE }}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{card.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ORANGE }}>Why Choose ARROWS</div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              A Complete Solutions Partner—Strategy, People, and Systems
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Partnered with enterprises to align corporate strategy, upskill workforces, and engineer the custom digital systems required to scale operations smoothly.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                ),
                title: 'Tailored Solutions',
                desc: "No off-the-shelf templates. Whether building an executive training curriculum or designing a software platform, every solution is built specifically around your workflows and performance gaps.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Elite Strategists & Developers',
                desc: "Our team bridges human capability and technology, combining elite corporate leadership facilitators with veteran software engineers and systems architects.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                  </svg>
                ),
                title: 'Measurable Business ROI',
                desc: "We track outcomes, not activity. Every consulting engagement, custom system deployment, and training program is tied directly to the bottom-line KPIs your leadership team cares about.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: DARK, color: ORANGE }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const programs = [
  {
    badge: '12-WEEK PROGRAM',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Executive Leadership Track',
    desc: 'An intensive program for senior leaders covering strategic decision-making, change management, and executive presence.',
  },
  {
    badge: '2-5 DAY WORKSHOPS',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Team Upskilling Bootcamps',
    desc: 'Fast-paced, role-specific bootcamps that close skill gaps across sales, operations, and customer-facing teams.',
  },
  {
    badge: 'ONGOING CERTIFICATION',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Compliance & Risk Training',
    desc: 'Structured compliance curricula that keep your workforce current with regulatory and industry standards.',
  },
  {
    badge: '4-8 WEEK ENGAGEMENT',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Strategic Consulting Sprints',
    desc: 'Focused consulting sprints that diagnose operational bottlenecks and deliver an actionable growth roadmap.',
  },
]

function Programs() {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ORANGE }}>Programs</div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Structured Programs for<br />Every Stage of Growth
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-gray-900 flex items-center gap-1">
            Request Full Catalog <span>→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#f5f5f5', color: DARK }}
                >
                  {p.icon}
                </div>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded"
                  style={{ backgroundColor: '#FEF3E2', color: ORANGE }}
                >
                  {p.badge}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    industry: 'Manufacturing Industry',
    quote: "ARROWS didn't just digitize our factory operations; they engineered automated workflows that reduced production bottlenecks and trained our team to maximize performance on day one.",
    author: 'VP of Manufacturing Operations',
    company: 'Industrial Solutions',
  },
  {
    industry: 'Financial Services',
    quote: "The custom management platform built by ARROWS streamlined our auditing processes overnight. They combined rigorous technical execution with high-level strategy, delivering a system built for absolute compliance and operational speed.",
    author: 'Head of Digital Transformation',
    company: 'Regional Banking Group',
  },
  {
    industry: 'Healthcare',
    quote: "Our compliance scores improved dramatically after the ARROWS training. They truly understand the healthcare regulatory environment.",
    author: 'Operations Director',
    company: 'Healthcare Network',
  },
  {
    industry: 'Logistics',
    quote: "The team upskilling bootcamp was exactly what we needed — practical, fast, and directly tied to our operational KPIs.",
    author: 'VP of Operations',
    company: 'Logistics Group',
  },
  {
    industry: 'Retail & FMCG',
    quote: "ARROWS built a custom curriculum that addressed our specific retail challenges. The results spoke for themselves in Q3.",
    author: 'Head of L&D',
    company: 'Retail & FMCG Brand',
  },
  {
    industry: 'Technology',
    quote: "Their strategic consulting sprint helped us identify and fix three major bottlenecks we had been struggling with for years.",
    author: 'CTO',
    company: 'Technology Company',
  },
]

const industries = ['Manufacturing', 'Financial Services', 'Healthcare', 'Logistics', 'Retail & FMCG', 'Technology']

function Testimonials() {
  const [active, setActive] = useState('Manufacturing')
  const t = testimonials.find((t) => t.industry === active) || testimonials[0]
  const idx = industries.indexOf(active)

  const prev = () => setActive(industries[(idx - 1 + industries.length) % industries.length])
  const next = () => setActive(industries[(idx + 1) % industries.length])

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ORANGE }}>Trusted by Industry Leaders</div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Results That Speak Through Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActive(ind)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded transition-all"
              style={{
                backgroundColor: active === ind ? DARK : 'transparent',
                color: active === ind ? 'white' : '#6b7280',
                border: `1px solid ${active === ind ? DARK : '#e5e7eb'}`,
              }}
            >
              {ind}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-10 relative max-w-2xl mx-auto">
          <div className="text-5xl mb-6" style={{ color: ORANGE, fontFamily: 'Georgia, serif' }}>"</div>
          <p className="text-gray-800 text-lg font-medium leading-relaxed mb-8 italic">
            "{t.quote}"
          </p>
          <div>
            <div className="font-bold text-gray-900 text-sm">{t.author}</div>
            <div className="text-gray-500 text-xs">{t.company}</div>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-gray-400 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICEID_OB, import.meta.env.VITE_EMAIL_TEMPLATEID_OB, e.target, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_ID,
      }).then(
        () => {
          setSent(true)
          emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICEID_TQ, import.meta.env.VITE_EMAIL_TEMPLATEID_TQ, e.target, {
            publicKey: import.meta.env.VITE_EMAIL_PUBLIC_ID,
          }).then(
            () => {
              console.log('Proposal received! Please wait while we look into your email.');
            },
            (error) => {
              console.log('Please make sure if the form is correctly accomplished.', error);
            },
          );
          console.log('yahooO!')
        },
        (error) => {
          console.log('Please make sure if the form is correctly accomplished.', error);
        },
      );
  }

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: DARK }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ORANGE }}>Get In Touch</div>
            <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">Ready to Scale Your Teams and Systems?</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Tell us about your organization's goals—whether you are upskilling leadership or building custom enterprise software—and we'll get back to you with a tailored proposal within two business days.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: 'Pasong Kawayan II, General Trias Cavite',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                  text: '(046) 402-2247',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ),
                  text: 'arrowstcc@gmail.com',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0" style={{ color: ORANGE }}>{item.icon}</div>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              {[
                { key: 'in', label: 'LinkedIn', svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { key: 'f', label: 'Facebook', svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { key: 'ig', label: 'Instagram', svg: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
              ].map((s) => (
                <div
                  key={s.key}
                  className="w-8 h-8 rounded flex items-center justify-center text-white border border-white/20 cursor-pointer hover:border-white/50 transition-colors"
                  title={s.label}
                >
                  {s.svg}
                </div>
              ))}
            </div>
          </div>
          <div>
            {sent ? (
              <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center flex flex-col items-center justify-center h-full">
                <div className="text-4xl mb-4" style={{ color: ORANGE }}>✓</div>
                <h3 className="text-white font-bold text-xl mb-2">Proposal Request Sent</h3>
                <p className="text-gray-400 text-sm">We'll be in touch within two business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Juan Dela Cruz"
                      value={form.name}
                      name="name"
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-xs mb-1 block">Work Email</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      name="email"
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Company</label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    value={form.company}
                    name="company"
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">How can we help?</label>
                  <textarea
                    placeholder="Tell us about your training, consultancy, or systems development needs..."
                    value={form.message}
                    name="message"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded font-bold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ORANGE }}
                >
                  Build Your Solution
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#080808' }} className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-600 text-xs">
          © 2025 ARROWS Training and Consultancy Corporation. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          {['Services', 'Programs', 'Testimonials'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Services />
      <WhyChoose />
      <Programs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}