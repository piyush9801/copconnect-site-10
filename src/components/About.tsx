import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Users,
  Building2,
  Sprout,
  HeartHandshake,
  Baby,
  ShieldCheck,
  BadgeCheck,
  LifeBuoy,
  Phone,
  HandHeart,
  Headset,
  AlertCircle,
  HelpCircle,
  EyeOff,
  RefreshCw,
  ArrowRight,
  Quote,
  Briefcase,
  type LucideIcon,
} from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

/* ════════════════════════════════════════════════════════════
   Reusable bits
   ════════════════════════════════════════════════════════════ */

function Eyebrow({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <div className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${tone === 'dark' ? 'text-brand-mid' : 'text-brand'}`}>
      {children}
    </div>
  )
}

// Warm placeholder for a not-yet-supplied photo. Swap for <img src> later.
function PhotoTile({ Ico, caption, className = '', ratio = 'aspect-[4/3]' }: { Ico: LucideIcon; caption: string; className?: string; ratio?: string }) {
  return (
    <div className={`relative ${ratio} w-full overflow-hidden rounded-xl border border-border bg-gradient-to-br from-brand-pale via-cream to-cream-dark ${className}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
        <span className="w-11 h-11 rounded-full bg-white/70 border border-border flex items-center justify-center">
          <Ico className="w-5 h-5 text-brand" strokeWidth={1.6} />
        </span>
        <span className="text-[11px] text-muted mt-2 font-medium leading-tight">{caption}</span>
      </div>
    </div>
  )
}

// Hand-drawn-feel community sketch (group seen from behind, arms around shoulders)
function CommunitySketch({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 m-auto w-[78%] h-[78%] rounded-full bg-brand-pale" />
      <svg viewBox="0 0 360 200" className="relative w-full h-auto" fill="none" stroke="#1A1209" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* connecting arms across shoulders */}
        <path d="M52 96 Q110 70 168 96 Q226 70 284 96 Q312 84 330 96" stroke="#E8652A" strokeWidth="2.4" opacity="0.9" />
        {/* five figures from behind */}
        {[40, 110, 180, 250, 312].map((x, i) => {
          const scale = i === 2 ? 1.12 : 1
          const head = 30 * scale
          return (
            <g key={x}>
              <circle cx={x} cy={head} r={13 * scale} fill="#FDF0E9" />
              <path d={`M${x - 26 * scale} 190 Q${x - 26 * scale} ${96} ${x} ${88} Q${x + 26 * scale} ${96} ${x + 26 * scale} 190`} fill="#FFFFFF" />
            </g>
          )
        })}
        <line x1="20" y1="190" x2="340" y2="190" stroke="#E8DDD0" strokeWidth="2" />
      </svg>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════
   Data — real CopConnect content
   ════════════════════════════════════════════════════════════ */

type Pillar = { Ico: LucideIcon; label: string; angle: number; avatar?: boolean }
const PILLARS: Pillar[] = [
  { Ico: GraduationCap, label: 'Schools', angle: -90 },
  { Ico: Building2, label: 'Corporates', angle: -30, avatar: true },
  { Ico: Sprout, label: 'Rural India', angle: 30 },
  { Ico: Baby, label: 'Children', angle: 90, avatar: true },
  { Ico: HeartHandshake, label: 'NGOs', angle: 150 },
  { Ico: Users, label: 'Families', angle: 210, avatar: true },
]

const TRUST_POINTS: { Ico: LucideIcon; title: string; body: string }[] = [
  {
    Ico: ShieldCheck,
    title: 'Backed by the ISAC Foundation',
    body: 'A global non-profit working to strengthen cyber resilience, digital skills and child safety.',
  },
  {
    Ico: BadgeCheck,
    title: 'Driven by certified CCIOs',
    body: 'Trained Cyber Crime Intervention Officers who are closer to communities, more sensitive in their approach, and trusted.',
  },
  {
    Ico: LifeBuoy,
    title: 'Prevention, intervention & recovery',
    body: 'From awareness and early action to victim support and recovery — our impact is holistic and human.',
  },
]

const JOURNEY: { Ico: LucideIcon; title: string; body: string }[] = [
  { Ico: AlertCircle, title: 'Incident Response', body: 'Rapid first aid for victims of cyber crime — online or offline. We listen, we act.' },
  { Ico: Headset, title: 'Reach Out', body: 'Victim outreach at scale across communities, schools, corporates and rural India.' },
  { Ico: HandHeart, title: 'Expert Support', body: 'CCIOs guide victims through legal, technical and emotional support with empathy.' },
  { Ico: ShieldCheck, title: 'Access to Protection', body: 'We help individuals, SMEs, women and youth access cyber tools, safeguards and digital literacy.' },
  { Ico: RefreshCw, title: 'Recovery & Prevention', body: 'Holistic recovery support, with guidance and awareness for lasting safety.' },
]

const PROBLEMS: { Ico: LucideIcon; q: string; body: string }[] = [
  { Ico: HelpCircle, q: 'Where do I report this?', body: 'Victims waste hours looking for the right authority.' },
  { Ico: ShieldCheck, q: 'Can I trust the person I call?', body: 'Fear of scams and misinformation makes it hard.' },
  { Ico: EyeOff, q: 'Will my family find out?', body: 'Fear of judgment and shame stops many from speaking up.' },
  { Ico: RefreshCw, q: 'How do I stop this happening again?', body: 'Most don’t know where to get advice, tools or mindful help.' },
]

const PROGRAMS: { Ico: LucideIcon; title: string; body: string; caption: string }[] = [
  { Ico: GraduationCap, title: 'Schools & Colleges', body: 'Cyber safety education for students, teachers and parents to build safe digital habits.', caption: 'Students & teachers' },
  { Ico: Users, title: 'Parents & Families', body: 'Guidance, workshops and helplines to keep your loved ones safe online.', caption: 'Family at home' },
  { Ico: HeartHandshake, title: 'Senior Citizens', body: 'Simple training and support to protect seniors from digital frauds.', caption: 'Seniors learning' },
  { Ico: Building2, title: 'SMEs & Communities', body: 'Practical tools and training for small businesses and local groups.', caption: 'Community workshop' },
  { Ico: Briefcase, title: 'Corporates', body: 'Cyber wellness programs and tools for employees and organisations.', caption: 'Corporate training' },
]

const STATS: { n: string; l: string }[] = [
  { n: '25,000+', l: 'Lives reached directly and indirectly' },
  { n: '23,000+', l: 'Incidents supported through outreach & helplines' },
  { n: '7,500+', l: 'CCIOs trained and deployed' },
  { n: '227+', l: 'Partnered NGOs & community leaders' },
  { n: '21+', l: 'States & UTs actively engaged' },
  { n: 'PAN India', l: 'Impact reach' },
]

type Leader = { name: string; role: string; bio: string; img?: string; initials: string; imgPosition?: string }
const LEADERS: Leader[] = [
  {
    name: 'Group Captain P Aanand Naidu (retd)',
    role: 'Founder Director',
    bio: '30+ years in policy and management. A champion for cyber resilience, youth and community-driven cybersecurity awareness.',
    initials: 'PA',
    img: '/leaders/aanand.jpg',
    imgPosition: 'center 20%',
  },
  {
    name: 'Priyanka Vaidyanath',
    role: 'Executive Director',
    bio: 'Cyber wellness advocate focused on digital literacy, women’s safety, youth and inclusive community empowerment.',
    initials: 'PV',
    img: '/leaders/vaidyanath.jpg',
    imgPosition: 'center 28%',
  },
]

/* ════════════════════════════════════════════════════════════
   Page
   ════════════════════════════════════════════════════════════ */

export default function About() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section id="about" className="bg-cream px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[radial-gradient(closest-side,rgba(232,101,42,0.10),transparent)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-10 items-center">
            <div>
              <Eyebrow>About CopConnect</Eyebrow>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-ink leading-[1.05]">
                <WordsPullUpMultiStyle
                  align="left"
                  segments={[
                    { text: "Cyber safety isn't just a", className: 'text-ink' },
                    { text: 'technology problem —', className: 'text-ink' },
                    { text: "it's a human one", className: 'italic text-brand' },
                  ]}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.3 }}
                className="text-ink-mid text-base sm:text-lg leading-[1.65] mt-6 max-w-xl"
              >
                CopConnect builds trust between communities and cyber experts to help prevent harm,
                respond with care, and build a safer digital India.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-3 mt-8"
              >
                <a href="#get-help"
                  className="inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold text-[15px] rounded-full px-6 py-3.5 hover:bg-brand-mid hover:-translate-y-0.5 transition-all shadow-[0_12px_30px_-12px_rgba(232,101,42,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  Get Help Now <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/ccio"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-brand font-semibold text-[15px] rounded-full px-6 py-3.5 border border-brand hover:bg-brand-pale transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  Become a First Responder
                </Link>
              </motion.div>
            </div>

            {/* Support-network orbit */}
            <div className="relative w-full max-w-[460px] aspect-square mx-auto">
              <div className="absolute inset-[4%] rounded-full border-2 border-dashed border-brand-lt/70" />
              <div className="absolute inset-[19%] rounded-full border border-border" />
              <div className="absolute inset-[26%] rounded-full overflow-hidden shadow-[0_24px_60px_-24px_rgba(232,101,42,0.45)] border-4 border-white">
                <img src="/hero-family.png" alt="A family looking at a laptop together" className="w-full h-full object-cover" style={{ objectPosition: 'left center' }} />
              </div>
              {PILLARS.map(({ Ico, label, angle, avatar }, i) => {
                const rad = (angle * Math.PI) / 180
                const r = 46
                const x = 50 + r * Math.cos(rad)
                const y = 50 + r * Math.sin(rad)
                return (
                  <motion.div key={label}
                    initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="bg-white border border-border rounded-full shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] pl-1.5 pr-3.5 py-1.5 inline-flex items-center gap-2 whitespace-nowrap">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${avatar ? 'bg-gradient-to-br from-brand-mid to-brand text-white' : 'bg-brand-pale'}`}>
                        <Ico className={`w-3.5 h-3.5 ${avatar ? 'text-white' : 'text-brand'}`} strokeWidth={1.7} />
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-ink">{label}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHO WE ARE ───────────────────────────────────── */}
      <section id="who-we-are" className="bg-[#FBF7F1] px-4 sm:px-6 lg:px-8 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
            <div>
              <Eyebrow>Who We Are</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1]">
                India's first <span className="italic text-brand">community-powered</span> cyber wellness initiative
              </h2>
              <CommunitySketch className="mt-8 max-w-md" />
            </div>
            <div>
              <p className="text-ink-mid text-base sm:text-lg leading-[1.65]">
                CopConnect brings together victims, first responders, law enforcement, cyber experts
                and communities to create a trusted support system for cyber safety and digital resilience.
              </p>
              <div className="mt-7 space-y-4">
                {TRUST_POINTS.map(({ Ico, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0">
                      <Ico className="w-5 h-5 text-brand" strokeWidth={1.7} />
                    </span>
                    <div>
                      <div className="font-semibold text-ink text-[17px] leading-tight">{title}</div>
                      <p className="text-muted text-[15px] leading-[1.6] mt-1">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission quote strip */}
          <div className="mt-12 bg-cream border border-border rounded-2xl px-6 sm:px-8 py-6 flex items-start gap-4">
            <Quote className="w-8 h-8 text-brand-lt flex-shrink-0" fill="currentColor" strokeWidth={0} />
            <p className="font-serif italic text-lg sm:text-xl text-ink leading-snug">
              Our mission is simple — to ensure that no cyber crime victim suffers alone
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. HELP JOURNEY ─────────────────────────────────── */}
      <section id="what-we-do" className="bg-cream px-4 sm:px-6 lg:px-8 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1]">
              How CopConnect <span className="italic text-brand underline decoration-brand/40 decoration-2 underline-offset-[6px]">helps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:items-stretch">
            {JOURNEY.map(({ Ico, title, body }, i) => (
              <div key={title} className="flex items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex-1 bg-[#FBF7F1] border border-border rounded-2xl p-5 lg:mx-1.5 hover:border-brand-lt transition-colors flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-brand-pale flex items-center justify-center">
                      <Ico className="w-5 h-5 text-brand" strokeWidth={1.7} />
                    </span>
                    <span className="w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg text-ink mb-2 leading-tight">{title}</h3>
                  <p className="text-muted text-[14px] leading-[1.6]">{body}</p>
                </motion.div>
                {i < JOURNEY.length - 1 && (
                  <div className="hidden lg:flex items-center self-center text-brand">
                    <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DARK PROBLEM ─────────────────────────────────── */}
      <section id="why-it-matters" className="bg-ink px-4 sm:px-6 lg:px-8 py-16 md:py-[72px] relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_0%,rgba(232,101,42,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
            <div>
              <Eyebrow tone="dark">The Problem</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
                When cyber crime happens, most people lose time in <span className="italic text-brand-mid">confusion</span>
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-[1.6] mt-6">
                That's why we created a one-stop way forward.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROBLEMS.map(({ Ico, q, body }) => (
                <div key={q} className="bg-[#24170F] border border-white/10 rounded-2xl p-5">
                  <span className="w-9 h-9 rounded-lg bg-brand/15 flex items-center justify-center mb-3.5">
                    <Ico className="w-5 h-5 text-brand-mid" strokeWidth={1.9} />
                  </span>
                  <h3 className="font-serif text-lg text-white leading-snug mb-1.5">“{q}”</h3>
                  <p className="text-white/55 text-[14px] leading-[1.55]">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div id="get-help" className="mt-10 scroll-mt-24 border border-brand/40 bg-brand/[0.06] rounded-2xl px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center flex-shrink-0">
                <Headset className="w-6 h-6 text-white" strokeWidth={1.8} />
              </span>
              <div>
                <div className="font-serif text-xl text-white leading-tight">CopConnect is that trusted first step</div>
                <div className="text-white/60 text-sm mt-1">Safe. Human. Connected with care.</div>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link to="/sessions"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold text-[15px] rounded-full px-6 py-3.5 hover:bg-brand-mid transition-colors">
                Get Help Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:1930"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-[15px] rounded-full px-5 py-3.5 border border-white/25 hover:bg-white/15 transition-colors">
                <Phone className="w-4 h-4" /> 1930
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PROGRAMS ─────────────────────────────────────── */}
      <section id="programs" className="bg-cream px-4 sm:px-6 lg:px-8 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Our Programs</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1]">
              Building <span className="italic text-brand">safer communities</span> across India
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x divide-border">
            {PROGRAMS.map(({ Ico, title, body, caption }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.06 }}
                className="px-0 lg:px-5 py-2"
              >
                <PhotoTile Ico={Ico} caption={caption} className="mb-4" />
                <span className="w-9 h-9 rounded-lg bg-brand-pale inline-flex items-center justify-center mb-3">
                  <Ico className="w-5 h-5 text-brand" strokeWidth={1.7} />
                </span>
                <h3 className="font-semibold text-ink text-[17px] mb-1.5 leading-tight">{title}</h3>
                <p className="text-muted text-[14px] leading-[1.6]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. IMPACT ───────────────────────────────────────── */}
      <section id="impact" className="bg-[#FBF7F1] px-4 sm:px-6 lg:px-8 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Eyebrow>Our Impact</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1]">
              Impact created, lives <span className="italic text-brand">protected</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 sm:divide-x divide-border">
            {STATS.map((s, i) => (
              <motion.div key={s.l}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="text-center px-2"
              >
                <div className="font-serif font-bold text-3xl sm:text-4xl text-brand leading-none">{s.n}</div>
                <div className="text-muted text-[13px] mt-2 leading-snug max-w-[150px] mx-auto">{s.l}</div>
              </motion.div>
            ))}
          </div>

          {/* ISAC support card */}
          <div className="mt-12 bg-cream border border-border rounded-2xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-white border border-border rounded-xl px-5 py-4">
              <img src="/isac-logo.png" alt="ISAC Foundation" className="h-12 w-auto" />
            </div>
            <p className="text-ink-mid text-[15px] sm:text-base leading-[1.6]">
              CopConnect is a proud initiative supported by the{' '}
              <span className="font-semibold text-ink">ISAC Foundation</span>, a global non-profit working for
              the good of communities by promoting, training, financing and supporting cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. LEADERSHIP ───────────────────────────────────── */}
      <section id="leadership" className="bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Our Leadership</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.1]">
              Experienced leaders, <span className="italic">one mission</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {LEADERS.map((l, i) => (
              <motion.div key={l.name}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-cream border border-border rounded-3xl p-6 md:p-7 flex items-start gap-5 hover:border-brand-lt transition-colors"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-lt/40 bg-[#0E0E11] flex items-center justify-center flex-shrink-0">
                  {l.img ? (
                    <img src={l.img} alt={l.name} loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: l.imgPosition ?? 'center 20%' }} />
                  ) : (
                    <span className="font-serif text-2xl font-bold text-brand">{l.initials}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-ink leading-tight">{l.name}</h3>
                  <div className="text-brand text-xs font-bold uppercase tracking-wider mt-1 mb-3">{l.role}</div>
                  <p className="text-muted text-[14px] leading-[1.6]">{l.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
