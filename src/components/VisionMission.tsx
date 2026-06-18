import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Target, ShieldCheck, Users, Handshake, type LucideIcon } from 'lucide-react'

const CTAS: { Ico: LucideIcon; label: string; desc: string; to: string; href?: string }[] = [
  { Ico: ShieldCheck, label: 'Become a CCIO', desc: 'Train as a Cyber Crime Intervention Officer', to: '/ccio' },
  { Ico: Users, label: 'Get Help Now', desc: 'Chat with our safety helpline +91 89514 99650', to: '/sessions' },
  { Ico: Handshake, label: 'Partner With Us', desc: 'Schools · Corporates · RWAs · NGOs', to: '/sessions' },
]

export default function VisionMission() {
  return (
    <section className="bg-cream px-4 sm:px-6 lg:px-10 py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto">
        {/* Vision + Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-border rounded-3xl p-7 md:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(232,101,42,0.06)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-brand-pale rounded-full px-3 py-1.5 mb-5">
                <Compass className="w-3.5 h-3.5 text-brand" strokeWidth={2} />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand">Vision</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink leading-[1.18]">
                A safer cyberspace, powered by <span className="italic text-brand">resilient communities</span> and shared responsibility
              </h3>
              <p className="text-sm text-muted mt-4 leading-relaxed">
                Our north star for every program, partner and policy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-ink text-white border border-ink rounded-3xl p-7 md:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(232,101,42,0.18)_0%,transparent_60%)] pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 mb-5">
                <Target className="w-3.5 h-3.5 text-brand-mid" strokeWidth={2} />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-mid">Mission</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-[1.18]">
                Empower citizens to navigate the digital space with <span className="italic text-brand-mid">confidence</span>
              </h3>
              <p className="text-sm text-white/65 mt-4 leading-relaxed">
                Combining prevention, intervention and protection — through trained <span className="font-semibold text-white">Self Defenders</span>, First Responders, psychologists, technical and legal professionals — while fostering nationwide awareness and a culture of <span className="font-semibold text-brand-mid">cyber resilience</span>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-14">
          {CTAS.map(({ Ico, label, desc, to }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={to}
                className="group bg-white border border-border rounded-2xl p-6 hover:border-brand-lt hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(232,101,42,0.25)] transition-all flex items-start gap-4 h-full"
              >
                <div className="w-12 h-12 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0">
                  <Ico className="w-5 h-5 text-brand" strokeWidth={1.7} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-serif font-semibold text-lg text-ink leading-tight">{label}</div>
                  <div className="text-sm text-muted mt-1.5 leading-snug">{desc}</div>
                  <div className="text-brand font-semibold text-sm mt-3 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
