import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  ShieldAlert,
  HeartHandshake,
  Brain,
  Video,
  Gamepad2,
  Lock,
  UserCheck,
  Scale,
  Globe,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { useRef, useState } from 'react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

type Skill = {
  Ico: LucideIcon
  label: string
  definition: string
  learn: string
  outcomes: string[]
  example: string
}

const SKILLS: Skill[] = [
  {
    Ico: ShieldAlert,
    label: 'Cyber Crime intervention',
    definition: 'Identify and respond to early signs of cyber threats affecting individuals, families, workplaces and communities.',
    learn: 'The six cyber crime pathways targeting Gen Alpha — phishing, grooming, exploitation, cyberbullying, data breaches and financial scams — plus first-contact protocols and severity assessment.',
    outcomes: [
      'Deploy standardised case documentation using CCIO Case Log templates',
      'Run a 5-minute first-response procedure following established protocols',
      'Classify incidents by risk level (Low / Medium / High)',
    ],
    example: 'Every 8 minutes, a child in India encounters cyber crime.',
  },
  {
    Ico: HeartHandshake,
    label: 'Victim support',
    definition: 'Trauma-informed communication and crisis response that begins healing rather than deepening trauma.',
    learn: 'Emotional state assessment, conversation protocols that avoid re-traumatisation, immediate-danger crisis response, and warm handoff procedures.',
    outcomes: [
      'Master the CCIO Victim Conversation Protocol with do’s/don’ts language guidance',
      'Execute the SAFETY Scan checklist to assess immediate risk',
      'Connect victims to mental-health and professional support pathways',
    ],
    example: 'Covers special populations — non-verbal victims, children with disabilities, intra-family abuse — and managing vicarious trauma in responders.',
  },
  {
    Ico: Brain,
    label: 'Cyber psychology',
    definition: 'How algorithms engineer addiction through dopamine loops, and the danger signals hiding in Gen Alpha slang.',
    learn: 'The distinction between healthy engagement and pathological behaviour; how variable reinforcement engineers attention; how to read real chat patterns for grooming escalation.',
    outcomes: [
      'Identify "BrainRot" — the term kids coined for what screens do to their brains',
      'Recognise danger-signal slang (GNOC, LMIRL, WTTP, CD9, POS) that indicates grooming',
      'Analyse chat transcripts to detect grooming escalation tactics',
    ],
    example: 'Platform engineering has reduced attention spans to ~8 seconds; covers five distinct forms of "BrainRot".',
  },
  {
    Ico: Video,
    label: 'Deepfakes',
    definition: 'AI-generated synthetic media — deepfake nudes, voice cloning, exploitative imagery — created without consent.',
    learn: 'Detection of AI-generated CSAM, voice-cloning scams and synthetic-media exploitation; legal frameworks under IT Act and POCSO; emerging-tech incident response.',
    outcomes: [
      'Implement the AI-Generated Image Incident Protocol SOP for documentation',
      'Execute the Voice Cloning Scam Response Protocol with evidence preservation',
      'Route cases to the right authority using crime-to-channel mapping',
    ],
    example: 'AI-generated CSAM is the new frontier of exploitation. India ranks #1 globally in sugar-daddy culture, directly linked to child exploitation.',
  },
  {
    Ico: Gamepad2,
    label: 'Tech & gaming addiction',
    definition: 'Engineered addiction mechanisms in gaming ecosystems — predator grooming via voice chat, gambling disguised as loot boxes.',
    learn: 'Dopamine loops in game design, predator infiltration via guilds and gifting, dangerous online challenges, and the WHO Gaming Disorder clinical criteria.',
    outcomes: [
      'Assess Gaming Addiction Severity using clinical assessment tools',
      'Detect predator grooming through voice chat and in-game gifting patterns',
      'Apply the Gaming Predator Response Protocol and the Dangerous Challenge Response Protocol',
    ],
    example: 'A $200 billion gaming ecosystem. Dangerous viral challenges have killed children in India.',
  },
  {
    Ico: Lock,
    label: 'Digital safety',
    definition: 'Home and device security, parental controls, IoT protection, and a healthy digital-analog balance at home.',
    learn: 'Home digital safety audits (routers, smart TVs, baby monitors, voice assistants); smart-watch tracking risks; family digital safety visit protocols; setting up a Cyber Wellness Centre in your locality.',
    outcomes: [
      'Conduct a Family Digital Safety Visit — a protocol CCIOs deploy in homes across their community',
      'Configure device-specific parental controls for YouTube, TikTok, Instagram, Roblox, WhatsApp',
      'Establish a Cyber Wellness Centre — graduate from responder to community leader',
    ],
    example: 'Covers emerging threats (deepfakes, generative AI, voice cloning) with IoT security checklists for every connected device.',
  },
  {
    Ico: UserCheck,
    label: 'Social engineering threats',
    definition: 'Manipulation tactics that exploit human psychology — phishing, fake giveaways, QR-code fraud, impersonation.',
    learn: 'Financial-fraud typology including UPI scams, QR-code tricks, fake Robux generators, crypto scams; the "Golden Hour" Protocol; platform-specific reporting procedures.',
    outcomes: [
      'Spot phishing and scam red flags before money is lost using reference cards',
      'Execute the Financial Fraud Golden Hour Protocol within the critical first hours',
      'Navigate cybercrime.gov.in and file FIRs that get registered and investigated',
    ],
    example: 'Children often become unwitting accomplices in financial cyber crime. Covers tech-facilitated abuse via stalkerware and location tracking.',
  },
  {
    Ico: Scale,
    label: 'Cyber laws & reporting',
    definition: 'Knowing the law isn’t optional — it’s your shield and your sword. IT Act, POCSO, and evidence admissibility for prosecution.',
    learn: 'Mandatory reporting obligations, FIR drafting that gets registered, crime-to-channel routing, evidence admissibility in court, and the CCIO Code of Conduct.',
    outcomes: [
      'Draft FIRs using the language and structure that gets them registered, not rejected',
      'Apply the crime-to-channel routing SOP to send cases to the right authority',
      'Understand what courts accept as evidence — and what they reject',
    ],
    example: 'Covers IT Act provisions, POCSO coverage, platform LEA portal directories, and the RBI liability framework for scam refunds.',
  },
  {
    Ico: Globe,
    label: 'Responsible digital citizenship',
    definition: 'Building intervention capability so guardians become certified first responders — and communities become safer.',
    learn: 'Ethical decision-making under pressure, confidentiality limits, conflicts of interest, vicarious trauma management, and community-level cyber wellness infrastructure.',
    outcomes: [
      'Take the CCIO Pledge — committing to ethical boundaries and professional conduct',
      'Recognise and manage vicarious trauma affecting responder wellbeing and case quality',
      'Facilitate workshops in schools and advise parents and children on cyber safety',
    ],
    example: 'Opens part-time roles: school workshops, intervention officer assignments, legal case support, hospital/counsellor collaboration. Minimum age: 16.',
  },
]

const AUDIENCES = [
  'A student',
  'NCC / NSS volunteer',
  'Teacher',
  'Parent',
  'Counselor',
  'Working professional',
  'Doctor',
  'Engineer',
  'LEA (Law Enforcement)',
]

const PARENT_CONCERNS = [
  'Online blackmail',
  'Gaming addiction',
  'Fake friendships',
  'Sextortion',
  'Scams',
  'Deepfakes',
  'Cyberbullying',
]

const PARENT_LEARNINGS = [
  'How children are manipulated online',
  'Early warning signs of digital abuse',
  'How cybercriminals target teenagers',
  'What to do during emergencies',
  'How to build healthy digital habits at home',
]

const IMMEDIATE_BENEFITS = [
  'AICTE NEAT 2.0 + NSD certification (3-year validity)',
  'Cyber Crime Self Defense capability',
  'Confidence to navigate digital space',
  'Awareness and alertness against cyber crime',
  'Golden Hour Protocol knowledge',
  'Cyber law knowledge',
  'CopConnect platform access (Premium)',
]

const SHORT_TERM_BENEFITS = [
  'Victim communication scripts',
  'Cyber Crime Intervention support',
  'Handle interventions successfully',
  'Protect own family and community',
  'Conduct awareness against cyber crimes',
  'Build reputation as cyber crime first responder / cyber self defender',
  'Network with 1,500+ fellow officers',
  'Become a Cyber Ambassador',
]

const LONG_TERM_BENEFITS = [
  'Professional recognition in community',
  'Career differentiation',
  'Social impact (help dozens of families)',
  'Champion the cause',
]

function SkillCard({ skill, i }: { skill: Skill; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [open, setOpen] = useState(false)
  const { Ico, label, definition, learn, outcomes, example } = skill

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`${label} — show details`}
        className={`w-full text-left bg-white/[0.04] border border-white/12 hover:bg-white/[0.08] hover:border-brand-mid/40 transition-colors rounded-2xl px-4 py-3.5 flex items-center gap-3 ${
          open ? 'border-brand-mid/60 bg-white/[0.08]' : ''
        }`}
      >
        <span className="w-9 h-9 rounded-lg bg-brand-mid/15 flex items-center justify-center flex-shrink-0">
          <Ico className="w-4.5 h-4.5 text-brand-mid" strokeWidth={1.8} />
        </span>
        <span className="text-sm font-semibold text-white">{label}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-50 left-1/2 -translate-x-1/2 top-full mt-3 w-[min(92vw,360px)] pointer-events-none"
          >
            {/* Arrow */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-[#2A1A0F] to-[#1A1209] border-l border-t border-brand-mid/30 rotate-45" />
            <div className="relative bg-gradient-to-br from-[#2A1A0F] to-[#1A1209] border border-brand-mid/30 rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(232,101,42,0.08)] p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center flex-shrink-0 shadow-[0_0_18px_rgba(232,101,42,0.5)]">
                  <Ico className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </span>
                <h4 className="font-serif text-lg text-white leading-tight">{label}</h4>
              </div>

              <p className="text-sm text-white/85 leading-relaxed mb-4">{definition}</p>

              <div className="text-brand-mid text-[10px] font-bold uppercase tracking-wider mb-1.5">
                You’ll learn
              </div>
              <p className="text-xs text-white/65 leading-relaxed mb-4">{learn}</p>

              <div className="text-brand-mid text-[10px] font-bold uppercase tracking-wider mb-2">
                Key outcomes
              </div>
              <ul className="space-y-1.5 mb-4">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-brand-mid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-brand-mid" strokeWidth={3} />
                    </span>
                    <span className="text-xs text-white/80 leading-snug">{o}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/10 pt-3 mt-3 flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-mid flex-shrink-0 mt-0.5" strokeWidth={2} />
                <p className="text-[11px] text-white/55 italic leading-snug">{example}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function BenefitColumn({ title, items, accent }: { title: string; items: string[]; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="bg-white border border-border rounded-3xl p-7 md:p-8 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(232,101,42,0.28)] transition-all"
    >
      <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${accent}`}>{title}</div>
      <ul className="space-y-3">
        {items.map(item => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-brand-pale flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-brand" strokeWidth={3} />
            </span>
            <span className="text-sm text-ink-mid leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function CCIO() {
  return (
    <>
      {/* Section 1: Hero — cinematic dark */}
      <section id="ccio" className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-ink">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_30%,rgba(232,101,42,0.28)_0%,transparent_60%)] pointer-events-none overflow-hidden" />
        <div className="absolute inset-0 bg-noise opacity-[0.1] pointer-events-none overflow-hidden" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-5">
              CCIO Program
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15]">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Become the person', className: 'text-white' },
                  { text: 'people turn to during', className: 'text-white' },
                  { text: 'a cyber crisis', className: 'text-brand-mid italic' },
                ]}
              />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/65 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto"
            >
              CCIO is more than a certification. <span className="font-semibold text-white">It is a life skill.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-white/55 text-sm sm:text-base mt-3 max-w-2xl mx-auto"
            >
              You become part of a nationwide movement of cyber first responders helping people stay safe online.
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="mt-14 md:mt-16">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-5 text-center">
              As a CCIO, you learn
            </div>
            <div className="text-white/45 text-[11px] text-center mb-6">
              Hover (or tap) any topic to see what you’ll learn and the outcomes you’ll walk away with.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {SKILLS.map((skill, i) => (
                <SkillCard key={skill.label} skill={skill} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who it's for + Build your profile */}
      <section className="bg-cream px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">Who it's for</div>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Whether you are <span className="italic text-brand">a student or a CEO</span> — you can lead change.
            </h3>
            <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed max-w-md">
              CCIO gives you the knowledge to <span className="font-semibold text-ink">defend yourself</span> and create real social impact.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {AUDIENCES.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-white border border-border rounded-2xl p-4 text-center hover:border-brand-lt transition-colors"
              >
                <div className="font-serif text-base text-ink">{a}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {[
            { label: 'Build your profile', Ico: Sparkles },
            { label: 'Help society', Ico: HeartHandshake },
            { label: 'Protect people', Ico: ShieldAlert },
            { label: 'Lead with purpose', Ico: UserCheck },
          ].map(({ label, Ico }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-border rounded-2xl p-5 md:p-6 text-center"
            >
              <span className="w-11 h-11 rounded-full bg-brand-pale flex items-center justify-center mx-auto mb-3">
                <Ico className="w-5 h-5 text-brand" strokeWidth={1.7} />
              </span>
              <div className="font-serif text-base md:text-lg text-ink leading-tight">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Why parents are choosing CCIO */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">For Families</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Why parents & teachers are <span className="italic text-brand">choosing CCIO</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mt-5 leading-relaxed">
              Today's children are growing up in a world their parents never experienced. Most parents only realize something is wrong when it is already too late.
            </p>
          </div>

          {/* Concerns chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {PARENT_CONCERNS.map(c => (
              <span key={c} className="bg-brand-pale text-brand text-sm font-semibold rounded-full px-4 py-1.5">
                {c}
              </span>
            ))}
          </div>

          <div className="bg-cream border border-border rounded-3xl p-7 md:p-10 max-w-3xl mx-auto">
            <div className="text-brand text-xs font-bold uppercase tracking-wider mb-4">The CCIO program helps parents understand</div>
            <ul className="space-y-3">
              {PARENT_LEARNINGS.map(l => (
                <li key={l} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-ink-mid text-base leading-snug">{l}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-6 border-t border-border">
              <p className="text-muted text-sm italic leading-relaxed">
                This is not a technical program. It is a life-skills and <span className="font-semibold text-ink">cyber crime intervention</span> program designed for modern families. Because digital safety should begin at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing — two tiers */}
      <section className="bg-cream px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">Pricing</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Two ways to <span className="italic text-brand">join the movement</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* CCIO Only tier */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-border rounded-3xl p-8 md:p-10 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.18)] transition-all"
            >
              <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-3">CCIO Program</div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                For citizens, students & professionals
              </h3>
              <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
                The complete CCIO certification program — perfect for individuals starting their journey as a Cyber Crime Intervention Officer.
              </p>
              <div className="mt-7 space-y-3.5">
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-border">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted">Indian participants</div>
                  <div className="flex items-baseline gap-1.5">
                    <div className="font-serif font-bold text-3xl sm:text-4xl text-ink leading-none">₹5,000</div>
                    <div className="text-muted text-xs">+ GST</div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted">Overseas participants</div>
                  <div className="flex items-baseline gap-1.5">
                    <div className="font-serif font-bold text-3xl sm:text-4xl text-ink leading-none">$99</div>
                    <div className="text-muted text-xs">USD</div>
                  </div>
                </div>
              </div>
              <Link
                to="/sessions"
                className="inline-flex items-center gap-2 bg-ink hover:bg-ink-mid text-white font-semibold text-base rounded-full px-6 py-3.5 mt-7 hover:scale-[1.03] transition-transform"
              >
                Enrol in CCIO
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Parents Package — highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-brand to-[#d4541c] rounded-3xl p-8 md:p-10 text-white relative hover:-translate-y-1.5 transition-all shadow-[0_30px_60px_-30px_rgba(232,101,42,0.6)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_100%_0%,rgba(255,255,255,0.18)_0%,transparent_60%)] pointer-events-none" />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)] z-10">
                Most Popular · Limited Time
              </span>
              <div className="relative">
                <div className="text-white/80 text-xs font-bold uppercase tracking-[0.15em] mb-3">Parents Package</div>
                <h3 className="font-serif text-2xl sm:text-3xl leading-tight">
                  CCIO + <span className="italic">ScrollControl</span>
                </h3>
                <p className="text-white/85 text-sm sm:text-base mt-4 leading-relaxed">
                  The complete certification + parental safety toolkit for modern families. Defend your home from cyber threats.
                </p>
                <div className="mt-7">
                  <div className="flex items-baseline gap-2">
                    <div className="font-serif font-bold text-5xl md:text-6xl leading-none">₹5,000</div>
                    <div className="text-white/80 text-sm">+ GST</div>
                    <div className="font-serif text-white/55 text-2xl line-through ml-2">₹7,500</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 mt-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-[11px] font-bold uppercase tracking-wider">Offer ends 31 October</span>
                  </div>
                </div>
                <Link
                  to="/sessions"
                  className="inline-flex items-center gap-2 bg-white text-brand font-semibold text-base rounded-full px-6 py-3.5 mt-6 hover:scale-[1.03] transition-transform"
                >
                  Enrol with ScrollControl
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
          <p className="text-center text-xs text-muted mt-6 italic">*Prices exclude applicable taxes</p>
        </div>
      </section>

      {/* Section 5: Benefits timeline */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
            <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-4">What You Get</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.15]">
              Benefits across <span className="italic text-brand">your CCIO journey</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <BenefitColumn title="Immediate · Day 1" items={IMMEDIATE_BENEFITS} accent="text-brand" />
            <BenefitColumn title="Short-Term · Months 1–6" items={SHORT_TERM_BENEFITS} accent="text-brand" />
            <BenefitColumn title="Long-Term · Year 1+" items={LONG_TERM_BENEFITS} accent="text-brand" />
          </div>

          <div className="text-center mt-14">
            <Link
              to="/sessions"
              className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base sm:text-lg rounded-full px-7 py-3.5 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
            >
              Apply to Become a CCIO
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Program Structure */}
      <section className="bg-ink px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(232,101,42,0.18)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-noise opacity-[0.08] pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-4">Program Details</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15]">
              Cyber Crime Intervention Officer <span className="italic text-brand-mid">(CCIO) Program</span>
            </h2>
            <p className="text-white/65 text-base sm:text-lg mt-5 leading-relaxed">
              A complete instructor-led certification program designed to make you industry-ready as a CCIO.
            </p>
          </div>

          {/* Session details — 4 chip row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[
              { label: 'Live Instructor-Led', value: '8 Sessions × 2.5 hrs' },
              { label: 'eLearning Access', value: '60 Days' },
              { label: 'Certification', value: 'NSD · 3-year validity' },
              { label: 'Exam Attempts', value: '3 (no extra cost)' },
            ].map(({ label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white/[0.04] border border-white/12 rounded-2xl p-5"
              >
                <div className="text-brand-mid text-[10px] font-bold uppercase tracking-wider mb-2">{label}</div>
                <div className="text-white font-serif text-lg sm:text-xl leading-tight">{value}</div>
              </motion.div>
            ))}
          </div>

          {/* Two columns: Program Structure + Examination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="bg-white/[0.04] border border-white/12 rounded-3xl p-7 md:p-9"
            >
              <div className="text-brand-mid text-xs font-bold uppercase tracking-wider mb-5">Program Structure</div>
              <ul className="space-y-3">
                {[
                  '8 instructor-led sessions (2.5 hours each)',
                  '100+ slides per session',
                  'Field kit with SOPs, forms, and reference cards per session',
                  'Certification examination',
                  'CCIO Certification valid for 3 years',
                  'CopConnect platform membership eligibility',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-mid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-mid" strokeWidth={3} />
                    </span>
                    <span className="text-white/80 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white/[0.04] border border-white/12 rounded-3xl p-7 md:p-9"
            >
              <div className="text-brand-mid text-xs font-bold uppercase tracking-wider mb-5">Examination</div>
              <ul className="space-y-3">
                {[
                  'Multiple-choice question format',
                  'Minimum 60% to pass',
                  'Held after course conclusion',
                  "Can't attend? Take the exam with the next batch",
                  '3 attempts total at no additional cost',
                  '2 complimentary attempts included to pass',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-mid/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-mid" strokeWidth={3} />
                    </span>
                    <span className="text-white/80 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="text-center text-white/40 text-xs mt-8 italic">*Prices exclude applicable taxes</p>
        </div>
      </section>
    </>
  )
}
