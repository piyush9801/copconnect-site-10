import { motion } from 'framer-motion'
import {
  GraduationCap,
  Building2,
  Home as HomeIcon,
  Siren,
  Users,
  Baby,
  ShieldCheck,
  HeartHandshake,
  Megaphone,
  AlertCircle,
  type LucideIcon,
} from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

type Pillar = { Ico: LucideIcon; label: string; angle: number }

const PILLARS: Pillar[] = [
  { Ico: GraduationCap, label: 'Schools', angle: -90 },
  { Ico: Building2, label: 'Corporates', angle: -36 },
  { Ico: Users, label: 'Parents', angle: 18 },
  { Ico: HomeIcon, label: 'RWAs', angle: 90 },
  { Ico: Baby, label: 'Children', angle: 162 },
  { Ico: Siren, label: 'Seniors', angle: 234 },
]

function CommunityWheel() {
  const radius = 44
  return (
    <div className="relative w-full max-w-[480px] aspect-square mx-auto">
      <div className="absolute inset-[5%] rounded-full border-2 border-dashed border-brand-lt/60" />
      <div className="absolute inset-[18%] rounded-full bg-brand-pale" />
      <div className="absolute inset-[24%] rounded-full overflow-hidden shadow-[0_24px_60px_-24px_rgba(232,101,42,0.45)] border-4 border-white">
        <img
          src="/hero-family.png"
          alt="Family at the heart of the community"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'left center' }}
        />
      </div>
      {PILLARS.map(({ Ico, label, angle }, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 50 + radius * Math.cos(rad)
        const y = 50 + radius * Math.sin(rad)
        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="bg-white border border-border rounded-full shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] pl-2 pr-3.5 py-1.5 inline-flex items-center gap-2 whitespace-nowrap">
              <span className="w-6 h-6 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0">
                <Ico className="w-3.5 h-3.5 text-brand" strokeWidth={1.7} />
              </span>
              <span className="font-bold text-xs sm:text-sm text-ink">{label}</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

const ECOSYSTEM = [
  'Cyber Crime Intervention Officers (CCIOs)',
  'Cyber psychologists',
  'Cyber Crime lawyers',
  'Technical experts',
  'Community volunteers',
  'Cyber Wellness Clinics across India',
]

const WHAT_WE_DO: { Ico: LucideIcon; title: string; body: string }[] = [
  {
    Ico: ShieldCheck,
    title: 'Cyber Crime First Responder',
    body: 'We train citizens, students, teachers, parents, and professionals to become certified Cyber Crime Intervention Officers (CCIOs) who can identify risks, support victims, and guide people during cyber emergencies.',
  },
  {
    Ico: HeartHandshake,
    title: 'CopConnect Ecosystem',
    body: 'Safe spaces where victims can seek support without fear or judgment — emotional support, legal guidance, technical assistance, cyber hygiene education, and reporting assistance.',
  },
  {
    Ico: Megaphone,
    title: 'Awareness & Prevention',
    body: 'Awareness programs for schools, colleges, parents, senior citizens, corporates, rural communities, and women safety groups.',
  },
  {
    Ico: AlertCircle,
    title: 'Youth & Family Digital Safety',
    body: 'Addressing sextortion, cyberbullying, gaming addiction, online blackmail, fake investment scams, identity theft, social media abuse, and digital addiction.',
  },
]

const WHY_POINTS = [
  "Don't know where to report",
  'Feel ashamed or afraid',
  'Lose money due to delayed action',
  'Struggle to access the right guidance',
]

type Leader = { name: string; role: string; bio: string; img?: string; initials: string; imgPosition?: string; imgScale?: number; imgOffsetX?: string; imgOffsetY?: string }

const LEADERS: Leader[] = [
  {
    name: 'Group Captain P Aanand Naidu (retd)',
    role: 'Founder Director',
    bio: '30+ years in policy and management. A visionary leader focused on cyber resilience, community-driven cybersecurity awareness, and creating scalable intervention ecosystems for citizens, institutions, and vulnerable communities.',
    initials: 'PA',
    img: '/leaders/aanand.jpg',
  },
  {
    name: 'Priyanka Vaidyanath',
    role: 'Executive Director',
    bio: 'Leading initiatives in cyber wellness, ScrollControl, digital safety awareness, community engagement, and strategic partnerships focused on youth, families, and cyber crime prevention.',
    initials: 'PV',
    img: '/leaders/vaidyanath.jpg',
    imgPosition: 'center 28%',
    imgScale: 1,
    imgOffsetY: '0%',
  },
]

const IMPACT = [
  { n: '23,000+', l: 'Trained Cyber Defenders' },
  { n: '7,500+', l: 'Certified First Responders' },
  { n: '25,000+', l: 'Direct Beneficiaries' },
  { n: '227+', l: 'Annual Awareness Sessions' },
  { n: '21+', l: 'States Impacted' },
  { n: 'PAN India', l: 'Network Reach' },
]

export default function About() {
  return (
    <>
      {/* Section 1: Movement headline + community wheel */}
      <section id="about" className="bg-cream px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -bottom-12 -left-12 w-[500px] h-[300px] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <pattern id="dot" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.4" fill="#1A1209" />
              </pattern>
            </defs>
            <ellipse cx="180" cy="180" rx="120" ry="80" fill="url(#dot)" />
            <ellipse cx="380" cy="160" rx="80" ry="60" fill="url(#dot)" />
            <ellipse cx="500" cy="200" rx="90" ry="70" fill="url(#dot)" />
            <ellipse cx="650" cy="230" rx="70" ry="55" fill="url(#dot)" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-5">
                About CopConnect
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.15]">
                <WordsPullUpMultiStyle
                  align="left"
                  segments={[
                    { text: "Cyber safety isn't a", className: 'text-ink' },
                    { text: 'technology problem —', className: 'text-ink' },
                    { text: "it's a human problem", className: 'italic text-brand' },
                  ]}
                />
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-ink-mid text-base sm:text-lg leading-relaxed mt-7 max-w-lg"
              >
                CopConnect is India's most human-centred cyber safety movement. Join the community to help and support cyber crime victims.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="text-muted text-sm sm:text-base leading-relaxed mt-4 max-w-lg"
              >
                Backed by ISAC Foundation and a national network of Cyber Crime Intervention Officers, every session we run and every CCIO we train points to one goal: a cyber safe India.
              </motion.p>
            </div>
            <CommunityWheel />
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section id="who-we-are" className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">
              Who We Are
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              India's first <span className="italic text-brand">community-powered</span> cyber wellness initiative
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-ink-mid text-base sm:text-lg leading-relaxed">
              CopConnect helps people navigate the digital world safely. Powered by the <span className="font-semibold text-ink">Information Sharing and Analysis Center (ISAC Foundation)</span>, we bridge the gap between cyber crime victims, law enforcement agencies, and trusted experts.
            </p>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              We believe cyber safety is not just about technology — it is about people, trust, awareness, and timely intervention.
            </p>
            <div className="bg-cream border border-border rounded-2xl p-6 mt-6">
              <div className="text-brand text-xs font-bold uppercase tracking-wider mb-3">Today, CopConnect operates through</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ECOSYSTEM.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-mid">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-pale border-l-4 border-brand rounded-r-xl px-5 py-4 mt-6">
              <div className="font-serif font-semibold text-ink text-lg italic">
                Our mission is simple: To ensure that no cyber crime victim suffers alone.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section id="what-we-do" className="bg-cream px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">What We Do</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Four ways we <span className="italic text-brand">protect India online</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHAT_WE_DO.map(({ Ico, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white border border-border rounded-3xl p-7 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(232,101,42,0.28)] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-pale flex items-center justify-center mb-5">
                  <Ico className="w-6 h-6 text-brand" strokeWidth={1.7} />
                </div>
                <h3 className="font-serif text-xl text-ink mb-2.5">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why CopConnect Matters */}
      <section id="why-it-matters" className="bg-ink px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(232,101,42,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-4">
                Why CopConnect Matters
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15]">
                Cyber Crime is no longer just a <span className="italic text-brand-mid">"tech problem"</span>
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed mt-6 max-w-lg">
                It affects emotions, families, careers, finances, and mental health.
              </p>
            </div>
            <div>
              <div className="text-white/70 text-sm font-semibold mb-4 uppercase tracking-wider">Many victims:</div>
              <ul className="space-y-3">
                {WHY_POINTS.map(p => (
                  <li key={p} className="flex items-start gap-3 bg-white/[0.04] border border-white/10 rounded-xl p-4">
                    <span className="w-7 h-7 rounded-full bg-brand/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 text-brand-mid" strokeWidth={2} />
                    </span>
                    <span className="text-white/85 text-base leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/70 text-sm mt-6 italic leading-relaxed">
                CopConnect creates a trusted ecosystem where people can seek help early, safely, and confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Leadership */}
      <section id="leadership" className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">Leadership Team</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              The people building <span className="italic text-brand">a safer cyberspace</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            {LEADERS.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-cream border border-border rounded-3xl p-7 md:p-8 hover:border-brand-lt transition-colors flex flex-col"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-brand-lt/40 bg-[#0E0E11] flex items-center justify-center flex-shrink-0">
                  {l.img ? (
                    <img
                      src={l.img}
                      alt={l.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: l.imgPosition ?? 'center 20%',
                        transform: l.imgScale || l.imgOffsetX || l.imgOffsetY
                          ? `translate(${l.imgOffsetX ?? '0'}, ${l.imgOffsetY ?? '0'}) scale(${l.imgScale ?? 1})`
                          : undefined,
                        transformOrigin: 'center 20%',
                      }}
                    />
                  ) : (
                    <span className="font-serif text-2xl font-bold text-brand">{l.initials}</span>
                  )}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-ink mb-1 leading-tight">{l.name}</h3>
                <div className="text-brand text-xs font-bold uppercase tracking-wider mb-4">{l.role}</div>
                <p className="text-muted text-sm leading-relaxed">{l.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Impact + Powered by ISAC */}
      <section id="impact" className="bg-cream px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-20">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">Our Impact</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Building a culture where cyber safety becomes a <span className="italic text-brand">shared responsibility</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {IMPACT.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white border border-border rounded-2xl p-5 text-center"
              >
                <div className="font-serif font-bold text-2xl sm:text-3xl text-brand leading-none">{s.n}</div>
                <div className="text-[11px] text-muted mt-2 font-medium">{s.l}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="mt-14 bg-ink rounded-3xl p-8 sm:p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(232,101,42,0.18)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-4">
                Powered By ISAC Foundation
              </div>
              <p className="text-white text-lg sm:text-xl leading-relaxed">
                CopConnect is a social impact initiative of <span className="font-semibold text-brand-mid">ISAC Foundation</span>, an international non-profit organization focused on cybersecurity awareness, skilling, intervention, and digital resilience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
