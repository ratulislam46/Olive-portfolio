import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFileArrowDown } from 'react-icons/fa6';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-700/70 bg-slate-950/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(2,6,23,0.45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          <a href="#home" className="flex flex-col leading-none">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
              Engr. Abdur Rahman
            </span>
            <span className="mt-1 text-[11px] sm:text-xs font-medium uppercase tracking-[0.24em] text-blue-300/85">
              Civil Engineer Portfolio
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/65 px-3 py-2 text-sm font-semibold text-slate-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 hover:bg-slate-800 hover:text-blue-300 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 shadow-lg shadow-blue-950/30 transition"
            >
              <FaFileArrowDown size={13} />
              Download Resume
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-900/70 text-slate-200 hover:border-blue-500/50 hover:text-blue-300 transition"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-slate-800/80 bg-slate-950/95 px-4 pb-5 pt-3 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-2 shadow-2xl shadow-black/30">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2.5 font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-300 transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white hover:bg-blue-700 shadow-lg shadow-blue-950/30 transition"
              >
                <FaFileArrowDown size={13} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;