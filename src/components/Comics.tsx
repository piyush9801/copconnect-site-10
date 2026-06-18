import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  MessageSquareWarning,
  Users,
  Layers,
  ShieldAlert,
  HeartHandshake,
  Sparkles,
  Eye,
  Lock,
  GraduationCap,
  Home,
  Quote,
  CheckCircle2,
  Play,
  type LucideIcon,
} from 'lucide-react'

const KS_PROMO = '/ks-promo.png'
const COVER = '/omg-cover.png'
const KIT_BOOKLETS_JPG = 'https://isacfoundation.org/wp-content/uploads/2024/05/whole-set-images-OMG-1024x507.jpg'
const KIT_SET_PNG = 'https://isacfoundation.org/wp-content/uploads/2024/05/whole-set-images-OMG-1024x507.png'
const KIT_GOODIES = 'https://isacfoundation.org/wp-content/uploads/2024/05/goodies-omg-booklets-1024x507.png'

type Item = { Ico: LucideIcon; tag: string; title: string; meta: string; body: string; img: string }
const ITEMS: Item[] = [
  {
    Ico: BookOpen,
    tag: 'Issue 01',
    title: 'The Graphic Novel',
    meta: 'Full-colour comic',
    body: 'A high-school girl chases social-media popularity and gets pulled into a sextortion plot — told the way teens actually read.',
    img: COVER,
  },
  {
    Ico: MessageSquareWarning,
    tag: 'Companion',
    title: 'Spot the Conversation Trap',
    meta: '24-page booklet',
    body: 'Identify the dangerous chat patterns that lead to sextortion — interactive scenarios pulled from real cases.',
    img: KIT_SET_PNG,
  },
  {
    Ico: Users,
    tag: 'For Parents',
    title: 'A Parent’s Guide to Sexting & Sextortion',
    meta: '24-page guide',
    body: 'The warning signs, the legal landscape, and the conversation scripts every parent should have ready before a crisis.',
    img: KIT_GOODIES,
  },
  {
    Ico: Layers,
    tag: 'Classroom',
    title: 'Flash Card Set',
    meta: '20 cards',
    body: 'Quick, classroom-ready tips on online blackmail prevention — designed to be pinned, shared and re-read.',
    img: KIT_BOOKLETS_JPG,
  },
]

const THEMES: { Ico: LucideIcon; label: string }[] = [
  { Ico: ShieldAlert, label: 'Sextortion' },
  { Ico: Lock, label: 'Online blackmail' },
  { Ico: Eye, label: 'Sexting risks' },
  { Ico: MessageSquareWarning, label: 'Chat-trap patterns' },
  { Ico: HeartHandshake, label: 'Parent–child talks' },
  { Ico: Sparkles, label: 'Digital reputation' },
]

const FOR_TEENS = [
  'Why "private" rarely stays private',
  'How perpetrators escalate a chat in three messages',
  'What to do in the first hour if you’ve been blackmailed',
  'Where to report — and who’s on your side',
]

const FOR_PARENTS = [
  'How to start the conversation without losing trust',
  'Early warning signs your teen is being groomed',
  'The legal protections you can actually rely on',
  'A printable family digital-safety contract',
]

const IMPACT = [
  { n: '68%', l: 'of Indian teens have shared personal info with strangers online' },
  { n: '8 min', l: 'is how often a child in India encounters cyber crime' },
  { n: '1 in 4', l: 'teen sextortion cases involve a peer, not a stranger' },
]

export default function Comics() {
  return (
    <div className="bg-ink text-white">
      {/* ── Section 1 — Cinematic Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink">
        {/* Full-quality KS Promo image — no overlay, no dim */}
        <div className="relative">
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src={KS_PROMO}
            alt="OMG! Like Literally Blackmailed — parents, teach your child to protect themselves from online blackmail and sextortion"
            className="w-full h-auto block"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink pointer-events-none" />
        </div>

        {/* Dark band beneath the image with the headline + CTAs */}
        <div className="relative bg-ink px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(232,101,42,0.12)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-[1320px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className="inline-flex items-center gap-2 bg-brand text-white text-[11px] font-bold uppercase tracking-[0.18em] rounded-full px-3.5 py-1.5 mb-5 sm:mb-7"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Out Now · ISAC Foundation
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-white"
                >
                  OMG! Like Literally <span className="italic text-brand-mid">Blackmailed</span>
                </motion.h1>
              </div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
                >
                  A graphic-novel kit fighting sextortion in India. Built for the conversation every teen and parent has been putting off.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="flex flex-wrap items-center gap-3 mt-7 sm:mt-8"
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-7 py-3.5 transition-all hover:scale-[1.03] shadow-[0_18px_40px_-12px_rgba(232,101,42,0.7)]"
                  >
                    Buy Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <a
                    href="#preview"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur text-white font-semibold text-base sm:text-lg rounded-full px-6 py-3.5 transition-all border border-white/20"
                  >
                    <Play className="w-4 h-4" fill="currentColor" />
                    Preview the kit
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="bg-brand py-3 overflow-hidden">
          <div className="flex items-center gap-12 whitespace-nowrap animate-scroll">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 flex-shrink-0">
                <span className="text-white font-serif italic text-lg sm:text-xl">Get the ultimate toolkit now.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                <span className="text-white font-serif italic text-lg sm:text-xl">Do not delay it.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2 — Pull-quote / Synopsis ──────────────────────────── */}
      <section className="relative bg-ink px-4 sm:px-6 lg:px-8 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(232,101,42,0.16)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-brand mx-auto mb-7" strokeWidth={1.4} />
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-[1.25]">
            &ldquo;Every day teenagers share their naked photos with <span className="italic text-brand-mid">soulmates</span> and <span className="italic text-brand-mid">bffs</span> — and end up with their private images leaked or published on forums across the internet.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3 mt-9">
            <div className="h-px w-12 bg-brand/50" />
            <span className="text-white/55 text-xs sm:text-sm uppercase tracking-[0.22em] font-bold">That is the silence this book breaks</span>
            <div className="h-px w-12 bg-brand/50" />
          </div>
        </div>
      </section>

      {/* ── Section 3 — Inside the Kit (DC-style issue cards) ──────────── */}
      <section id="preview" className="relative bg-[#0E0905] px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.22em] mb-4">The Complete Kit</div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight">
                Four pieces,<br /><span className="italic text-brand-mid">one conversation</span>
              </h2>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-md md:text-right">
              The set is built so a teen can read it alone, a parent can read it alongside them, and a teacher can run a classroom around it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {ITEMS.map((it, i) => (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-white/[0.04] border border-white/10 hover:border-brand-mid/60 hover:bg-white/[0.07] rounded-3xl overflow-hidden transition-all hover:-translate-y-1"
              >
                {/* Image canvas — full image, no crop, brand-tinted backdrop */}
                <div className="relative aspect-[16/10] bg-[radial-gradient(120%_120%_at_0%_0%,rgba(232,101,42,0.18)_0%,rgba(232,101,42,0.03)_40%,#0E0905_80%)] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain p-6 sm:p-8 group-hover:scale-[1.03] transition-transform duration-700"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                  <span className="absolute top-4 left-4 bg-brand text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)]">
                    {it.tag}
                  </span>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/8 backdrop-blur border border-white/15 flex items-center justify-center">
                    <it.Ico className="w-4 h-4 text-brand-mid" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="text-brand-mid text-[10px] font-bold uppercase tracking-[0.18em] mb-2">{it.meta}</div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white leading-tight mb-3">{it.title}</h3>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">{it.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 — Themes Covered ─────────────────────────────────── */}
      <section className="bg-ink px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.22em] mb-4">Themes Covered</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
              The conversations <span className="italic text-brand-mid">no one was having</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {THEMES.map(({ Ico, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white/[0.05] border border-white/12 hover:bg-white/[0.09] hover:border-brand-mid/50 transition-colors rounded-full pl-3.5 pr-5 py-2.5 inline-flex items-center gap-2.5"
              >
                <Ico className="w-4 h-4 text-brand-mid" strokeWidth={1.8} />
                <span className="text-sm font-semibold text-white">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5 — Who It's For ───────────────────────────────────── */}
      <section className="bg-[#0E0905] px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.22em] mb-4">Who It’s For</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
              Two readers, <span className="italic text-brand-mid">one shared language</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="bg-white/[0.04] border border-white/10 hover:border-brand-mid/40 rounded-3xl p-8 md:p-10 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand/15 flex items-center justify-center mb-5">
                <GraduationCap className="w-6 h-6 text-brand-mid" strokeWidth={1.7} />
              </div>
              <div className="text-brand-mid text-xs font-bold uppercase tracking-wider mb-2">For Teens · 13+</div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight">A story you’ll actually finish</h3>
              <p className="text-white/60 text-sm sm:text-base mt-3 leading-relaxed">
                The kind of comic you put down already a little wiser about your own DMs.
              </p>
              <ul className="space-y-2.5 mt-6">
                {FOR_TEENS.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-brand-mid flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-gradient-to-br from-brand to-[#b4451a] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <Home className="w-6 h-6 text-white" strokeWidth={1.7} />
                </div>
                <div className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">For Parents & Educators</div>
                <h3 className="font-serif text-2xl sm:text-3xl leading-tight">The talk you’ve been postponing</h3>
                <p className="text-white/85 text-sm sm:text-base mt-3 leading-relaxed">
                  A complete kit so you can lead the conversation instead of reacting to a crisis.
                </p>
                <ul className="space-y-2.5 mt-6">
                  {FOR_PARENTS.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6 — Why It Matters / Stats Band ────────────────────── */}
      <section className="bg-ink px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(232,101,42,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.22em] mb-4">Why It Matters</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1]">
              The numbers behind <span className="italic text-brand-mid">the story</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {IMPACT.map(({ n, l }, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 text-center hover:border-brand-mid/40 transition-colors"
              >
                <div className="font-serif font-bold text-5xl sm:text-6xl text-brand-mid leading-none">{n}</div>
                <p className="text-white/65 text-sm leading-snug mt-4">{l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7 — Final Buy CTA ──────────────────────────────────── */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={KS_PROMO}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/85 to-ink" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.22em] mb-5">Order The Set</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight">
            Put it in the hands of a teen <span className="italic text-brand-mid">before someone else does</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mt-7 max-w-2xl mx-auto">
            The graphic novel, the parent guide, the conversation-trap booklet and the flash cards — shipped as a single set across India.
          </p>
          <div className="flex items-center justify-center mt-10">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-9 py-4 transition-all hover:scale-[1.03] shadow-[0_18px_40px_-12px_rgba(232,101,42,0.7)]"
            >
              Buy Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-white/40 text-xs mt-7 tracking-wider uppercase">A social-impact publication of ISAC Foundation</p>
        </div>
      </section>
    </div>
  )
}
