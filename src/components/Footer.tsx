import { Twitter, Linkedin, Facebook, Instagram, Youtube, ShieldCheck, Phone, MessageCircle, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const COLS: { h: string; links: ({ label: string; to: string; hash?: string; ext?: false } | { label: string; href: string; ext: true })[] }[] = [
  {
    h: 'Platform',
    links: [
      { label: 'Home', to: '/' },
      { label: 'CopConnect Portal', href: 'https://portal.copconnect.in', ext: true },
      { label: 'ScrollControl', href: 'https://scrollcontrol.ai/', ext: true },
      { label: 'Resource Hub', to: '/tips' },
    ],
  },
  {
    h: 'Programs',
    links: [
      { label: 'Become a CCIO', to: '/ccio' },
      { label: 'CCIO Program Structure', to: '/ccio' },
      { label: 'Cyber Safety Comics', to: '/comics' },
      { label: 'Book a Session', to: '/sessions' },
      { label: 'Merchandise', to: '/merch' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    h: 'About',
    links: [
      { label: 'Who We Are', to: '/about#who-we-are' },
      { label: 'Leadership Team', to: '/about#leadership' },
      { label: 'Our Impact', to: '/about#impact' },
      { label: 'ISAC Foundation', href: 'https://isacfoundation.org/', ext: true },
      { label: 'Privacy Policy', to: '/' },
    ],
  },
  {
    h: 'Contact',
    links: [
      { label: 'Chat: +91 89514 99650', to: '/sessions' },
      { label: 'Book a Safety Session', to: '/sessions' },
      { label: 'Partner With Us', to: '/sessions' },
      { label: 'Cyber Crime: 1930', to: '/sessions' },
    ],
  },
]

const SOCIAL: { Ico: LucideIcon; label: string; href: string }[] = [
  { Ico: Twitter, label: 'Twitter', href: 'https://x.com/copconnect' },
  { Ico: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/copconnectapp/' },
  { Ico: Facebook, label: 'Facebook', href: '#' },
  { Ico: Instagram, label: 'Instagram', href: 'https://www.instagram.com/copconnectin/' },
  { Ico: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white px-4 sm:px-6 lg:px-8 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(232,101,42,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1320px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b border-white/10">
          <div className="max-w-md">
            <img
              src="https://copconnect-new-site.vercel.app/images/copconnect-logo.png"
              alt="CopConnect"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/55 text-sm leading-relaxed mt-5">
              India's most human-centred cyber safety movement. A social impact initiative of{' '}
              <a
                href="https://isacfoundation.org/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white hover:text-brand-mid transition-colors"
              >
                ISAC Foundation
              </a>.
            </p>
            <div className="flex gap-2.5 mt-5">
              {SOCIAL.map(({ Ico, label, href }) => (
                <a
                  key={label}
                  href={href}
                  {...(href !== '#' ? { target: '_blank', rel: 'noreferrer' } : {})}
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.07] rounded-lg flex items-center justify-center text-white/55 hover:bg-brand hover:text-white transition-all"
                >
                  <Ico className="w-4 h-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand/15 to-transparent border border-brand/30 rounded-2xl p-5 sm:p-6 max-w-sm">
            <div className="flex items-center gap-2 text-brand-mid text-xs font-bold uppercase tracking-wider mb-2">
              <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
              Safety Helpline · Chat with our Bot
            </div>
            <div className="font-serif font-bold text-3xl sm:text-4xl text-white leading-none">
              CopConnect
            </div>
            <a
              href="tel:+918951499650"
              className="font-serif font-bold text-3xl sm:text-4xl text-brand-mid leading-none mt-1 block hover:text-brand transition-colors"
            >
              +91 89514 99650
            </a>
            <p className="text-white/55 text-xs leading-relaxed mt-3 flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-brand-mid" />
              National Cyber Crime Helpline: <span className="font-semibold text-brand-mid">1930</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {COLS.map(c => (
            <div key={c.h}>
              <h4 className="font-bold text-sm mb-4">{c.h}</h4>
              <div className="flex flex-col gap-2.5">
                {c.links.map(l => l.ext ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/45 hover:text-brand-mid text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-white/45 hover:text-brand-mid text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-wrap justify-between gap-3">
          <p className="text-white/30 text-xs">© 2026 CopConnect / ISAC Foundation. All rights reserved.</p>
          <p className="text-white/30 text-xs inline-flex items-center gap-1.5">
            Resilience begins with awareness.
            <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.8} />
          </p>
        </div>
      </div>
    </footer>
  )
}
