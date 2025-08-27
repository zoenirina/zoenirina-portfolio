import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-700 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">© 2025 Priyanshu Tiwari. All rights reserved.</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Built with Next.js &amp; Framer Motion</p>
        </div>
</footer>
  )
}

export default Footer