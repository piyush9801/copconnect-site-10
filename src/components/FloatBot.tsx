import { motion } from 'framer-motion'
import { Headset } from 'lucide-react'

export default function FloatBot() {
  return (
    <motion.a
      href="/about#get-help"
      aria-label="Get help from CopConnect"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-brand text-white pl-4 pr-3 sm:pr-5 py-3 shadow-[0_10px_30px_-6px_rgba(232,101,42,0.55)] border border-white/30 cursor-pointer"
    >
      <span className="hidden sm:inline font-semibold text-sm">Get help</span>
      <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
        <Headset className="w-5 h-5" strokeWidth={1.8} />
      </span>
    </motion.a>
  )
}
