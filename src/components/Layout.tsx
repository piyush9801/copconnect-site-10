import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import FloatBot from './FloatBot'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Scroll to anchor (if hash) or top, on route change
  useEffect(() => {
    if (hash) {
      // Give the new page a tick to mount so the target element exists
      const id = hash.slice(1)
      const tryScroll = (attempt: number) => {
        const el = document.getElementById(id)
        if (el) {
          // Account for sticky nav (~72px)
          const top = el.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({ top, behavior: 'smooth' })
        } else if (attempt < 10) {
          setTimeout(() => tryScroll(attempt + 1), 60)
        }
      }
      tryScroll(0)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [pathname, hash])

  return (
    <div className="bg-cream text-ink min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatBot />
    </div>
  )
}
