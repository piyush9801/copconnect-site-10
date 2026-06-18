import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShieldCheck,
  Users,
  BookOpen,
  Bell,
  Home,
  Phone,
  Lock,
  MessageSquare,
  ExternalLink,
  GraduationCap,
  BookMarked,
  ShoppingBag,
  type LucideIcon,
} from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const PRODUCTS: { Ico: LucideIcon; name: string; body: string; to: string; cta: string }[] = [
  {
    Ico: GraduationCap,
    name: 'CCIO Program',
    body: 'Training and certification for Cyber Crime Self Defenders, First Responders and Intervention Officers — backed by AICTE NEAT 2.0 and NSD.',
    to: '/ccio',
    cta: 'Explore the Program',
  },
  {
    Ico: BookMarked,
    name: 'Comic Kit',
    body: 'Story-led cyber safety comics for schools and families — turning real intervention cases into lessons children remember.',
    to: '/comics',
    cta: 'Browse the Comics',
  },
  {
    Ico: ShoppingBag,
    name: 'Merchandise',
    body: 'CopConnect merch built to fund free awareness sessions — every t-shirt, hoodie and bag goes back into the field.',
    to: '/merch',
    cta: 'Visit the Store',
  },
]

const PILLS: { Ico: LucideIcon; label: string }[] = [
  { Ico: ShieldCheck, label: 'Incident Reporting' },
  { Ico: Users, label: 'CCIO Directory' },
  { Ico: BookOpen, label: 'Resource Hub' },
  { Ico: Bell, label: 'Community Alerts' },
  { Ico: Home, label: 'Family Safety Mode' },
  { Ico: Phone, label: 'LEA Connect' },
  { Ico: Lock, label: 'Verified Auth' },
  { Ico: MessageSquare, label: 'CCIO Chat' },
]

const PLATFORM_CARDS = [
  {
    name: 'CopConnect Portal',
    tagline: 'For citizens, victims & CCIOs',
    body: 'The CopConnect portal connects citizens, victims and CCIOs in real time — ensuring support, safety and quick response when it matters most.',
    href: 'https://portal.copconnect.in',
    cta: 'Sign up for the Portal',
    accent: 'bg-brand text-white',
  },
  {
    name: 'ScrollControl',
    tagline: 'For parents & teachers',
    body: 'A platform for parents and teachers to build healthy digital habits in children and young adults — preventing and protecting them from online abuse and harm.',
    href: 'https://scrollcontrol.ai/',
    cta: 'Open ScrollControl',
    accent: 'bg-brand text-white',
  },
]

export default function Platform() {
  return (
    <section id="platform" className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(232,101,42,0.22)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto text-center">
        <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-5">
          Platform
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.15]">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Multiple products,', className: 'text-white' },
              { text: 'two platforms,', className: 'text-white' },
              { text: 'one ecosystem', className: 'text-brand-mid italic' },
            ]}
          />
        </h2>
        <p className="text-white/65 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
          From a national portal that eases cyber crime victim support, to a parental safety toolkit that brings digital safety home.
        </p>

        {/* Products row — what we offer before the two platforms */}
        <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mt-16 mb-6">
          Products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-left">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={p.to}
                className="group bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-7 hover:border-brand-mid/50 hover:bg-white/[0.07] transition-all flex flex-col h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-mid/15 flex items-center justify-center mb-5">
                  <p.Ico className="w-5 h-5 text-brand-mid" strokeWidth={1.7} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-white mb-3">{p.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{p.body}</p>
                <span className="text-brand-mid font-semibold text-sm mt-5 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  {p.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Platforms row */}
        <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mt-16 mb-6">
          Platforms
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {PLATFORM_CARDS.map((card, i) => (
            <motion.a
              key={card.name}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white/[0.04] border border-white/10 rounded-3xl p-7 md:p-9 hover:border-brand-mid/50 hover:bg-white/[0.07] transition-all relative overflow-hidden"
            >
              <div className="text-brand-mid text-xs font-bold uppercase tracking-wider mb-3">{card.tagline}</div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">{card.name}</h3>
              <p className="text-white/65 text-sm md:text-base leading-relaxed mb-6">{card.body}</p>
              <span
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-sm transition-all group-hover:scale-[1.03] ${card.accent}`}
              >
                {card.cta}
                <ExternalLink className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mt-20 mb-6">
          Features
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {PILLS.map(({ Ico, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.06] border border-white/12 hover:bg-white/[0.1] hover:border-brand-mid/50 transition-colors rounded-full pl-3 pr-5 py-2 inline-flex items-center gap-2"
            >
              <Ico className="w-4 h-4 text-brand-mid" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-white/90">{label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href="https://portal.copconnect.in"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-7 py-3.5 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
          >
            Sign up for the Portal
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
