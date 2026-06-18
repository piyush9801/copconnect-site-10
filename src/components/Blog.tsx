import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, type LucideIcon } from 'lucide-react'

type Post = {
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  img: string
}

// Image helpers — Unsplash and Pexels both deliver size-on-the-fly. Photos
// chosen with a strong bias toward Indian context: schoolgirls, the
// CopConnect mother-and-son hero shot, abstract / object photos that don't
// visibly read as "western stock" for the remaining categories.
const u = (id: string, w = 1200, h = 675) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`
const px = (id: string, w = 1200, h = 675) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?w=${w}&h=${h}&fit=crop&auto=compress&cs=tinysrgb`

const FEATURED: Post = {
  category: 'Cyber Crime Intervention',
  title: 'The Golden Hour: Why the first 60 minutes after a cyber attack decide everything',
  excerpt: 'In our work with thousands of victims, one pattern keeps repeating. Whether it is UPI fraud, a sextortion threat, or an account takeover — what happens in the first hour determines whether the case is resolvable or already lost. Here is how the Golden Hour Protocol works.',
  author: 'CopConnect Team',
  date: 'Coming soon',
  readTime: '6 min read',
  // Dark abstract circuit / cyber feel — universal tech aesthetic
  img: u('1518770660439-4636190af475', 1600, 1000),
}

const POSTS: Post[] = [
  {
    category: 'For Parents',
    title: 'Beyond screen time: 5 conversations every parent should have before their child gets a smartphone',
    excerpt: 'Screen time limits are a tool, not a strategy. The real protection comes from the conversations you have — before the device, not after the crisis.',
    author: 'Priyanka Vaidyanath',
    date: 'Coming soon',
    readTime: '8 min read',
    // CopConnect's own hero — Indian mother + son with a tablet at night
    img: '/hero-family.png',
  },
  {
    category: 'Field Notes',
    title: 'What we learned running 227+ awareness sessions in a single year',
    excerpt: 'Patterns from schools, RWAs, corporates and rural communities. The threats differ — but the human response to a cyber crime is surprisingly consistent.',
    author: 'Group Captain P Aanand Naidu (retd)',
    date: 'Coming soon',
    readTime: '10 min read',
    // Indian schoolgirls at desks, alphabet wall behind — straight from the field
    img: px('1720186'),
  },
  {
    category: 'Cyber Psychology',
    title: 'Why victims stay silent — and how the CCIO community is changing that',
    excerpt: 'Shame is the most predictable second response to a cyber crime, after panic. Understanding why is the first step to reaching the people who need help most.',
    author: 'CopConnect Team',
    date: 'Coming soon',
    readTime: '7 min read',
    // Backlit silhouette — universal, doesn't read as western
    img: u('1581090700227-1e37b190418e'),
  },
  {
    category: 'Policy',
    title: 'Reporting cyber crime in India: a plain-English walk-through of cybercrime.gov.in and 1930',
    excerpt: 'Where do you actually go? Who responds? What evidence do you need? A step-by-step guide for families, schools and small businesses.',
    author: 'CopConnect Team',
    date: 'Coming soon',
    readTime: '12 min read',
    // Documents close-up on a desk — neutral, paperwork-focused
    img: u('1450101499163-c8848c66ca85'),
  },
  {
    category: 'ScrollControl',
    title: 'Introducing ScrollControl — a parental safety toolkit built by people who do interventions',
    excerpt: 'ScrollControl is not just another screen-time app. It is built from the patterns we see in our CCIO field interventions every week.',
    author: 'CopConnect Team',
    date: 'Coming soon',
    readTime: '5 min read',
    // Smartphone on a dark surface — object-only, no person, brand-on
    img: u('1574958269340-fa927503f3dd'),
  },
  {
    category: 'CCIO Stories',
    title: '"I never thought I would do this." How a school teacher became a community first responder',
    excerpt: 'Meet the CCIOs reshaping cyber safety in their neighbourhoods — and the moments that pushed them to step up.',
    author: 'CopConnect Team',
    date: 'Coming soon',
    readTime: '6 min read',
    // Group of Indian children together — the community we serve
    img: u('1497486751825-1233686d5d80'),
  },
]

const CATEGORIES: { Ico?: LucideIcon; label: string }[] = [
  { label: 'All' },
  { label: 'Cyber Crime Intervention' },
  { label: 'For Parents' },
  { label: 'Cyber Psychology' },
  { label: 'Field Notes' },
  { label: 'CCIO Stories' },
  { label: 'Policy' },
  { label: 'ScrollControl' },
]

function PostCard({ post, i }: { post: Post; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: i * 0.06 }}
      className="group bg-white border border-border rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(232,101,42,0.28)] transition-all flex flex-col"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-brand-pale via-cream-dark to-brand-pale relative overflow-hidden">
        <img
          src={post.img}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
        {/* Subtle dark gradient so the category pill stays legible regardless of photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
          {post.category}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-lg text-ink leading-snug mb-3 group-hover:text-brand transition-colors">{post.title}</h3>
        <p className="text-sm text-muted leading-relaxed flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-5 pt-5 border-t border-border">
          <div className="text-xs text-muted">{post.author}</div>
          <div className="flex items-center gap-3 text-[11px] text-muted">
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  return (
    <>
      {/* Hero strip */}
      <section className="bg-cream px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-10">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-5">
            CopConnect Blog
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.1] max-w-4xl">
            Notes from the <span className="italic text-brand">frontline of cyber safety</span>
          </h1>
          <p className="text-ink-mid text-base sm:text-lg leading-relaxed mt-6 max-w-2xl">
            Field stories, parent guides, intervention case studies and policy explainers — written by the CCIOs, psychologists and lawyers who do this work every day.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.label}
                type="button"
                className={`text-sm font-semibold rounded-full px-4 py-1.5 transition-colors ${
                  i === 0
                    ? 'bg-ink text-white'
                    : 'bg-white border border-border text-ink-mid hover:border-brand-lt hover:text-brand'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-cream px-4 sm:px-6 lg:px-10 pb-16">
        <div className="max-w-[1320px] mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 bg-ink rounded-3xl overflow-hidden relative"
          >
            <div className="aspect-[16/10] lg:aspect-auto bg-ink relative overflow-hidden">
              <img
                src={FEATURED.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              {/* Right-side darken so the text panel transitions cleanly */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-ink/95 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(232,101,42,0.25)_0%,transparent_60%)] pointer-events-none" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-brand text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                Featured
              </div>
            </div>
            <div className="p-7 sm:p-10 lg:p-12 flex flex-col justify-center relative">
              <div className="text-brand-mid text-xs font-bold uppercase tracking-wider mb-3">
                {FEATURED.category}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-[1.15] mb-4">
                {FEATURED.title}
              </h2>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6">{FEATURED.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-white/55 mb-6">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {FEATURED.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {FEATURED.readTime}
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-sm sm:text-base rounded-full px-6 py-3 transition-all hover:scale-[1.03] self-start"
              >
                Read full story
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-brand text-xs font-bold uppercase tracking-[0.18em] mb-3">Latest</div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">More from the team</h2>
            </div>
            <p className="text-sm text-muted">More stories coming soon. Subscribe to be notified.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {POSTS.map((p, i) => <PostCard key={p.title} post={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-cream px-4 sm:px-6 lg:px-10 py-16">
        <div className="max-w-[1320px] mx-auto bg-ink rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(232,101,42,0.2)_0%,transparent_60%)] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
              Want to write for the <span className="italic text-brand-mid">CopConnect Blog?</span>
            </h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed mt-5">
              We are commissioning pieces from CCIOs, parents, educators, psychologists and lawyers working in the field.
            </p>
            <Link
              to="/sessions"
              className="inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base rounded-full px-6 py-3.5 mt-7 transition-all hover:scale-[1.03]"
            >
              Pitch a Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
