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
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800/60 bg-[#0a0f1a]/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-22">
          
          {/* Logo Area */}
          <a href="#home" className="flex flex-col leading-none group">
            <span className="text-xl sm:text-2xl font-black text-white tracking-tighter italic uppercase group-hover:text-amber-500 transition-colors duration-300">
              Engr. Abdur Rahman
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/40 p-1.5 text-[13px] font-bold uppercase tracking-wider text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            
            {/* Download Resume Button */}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-[12px] font-black uppercase tracking-widest text-black hover:bg-white transition-all duration-300 shadow-lg shadow-amber-500/10"
            >
              <FaFileArrowDown size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-amber-500 hover:border-amber-500/50 transition-all shadow-inner"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-slate-800/80 bg-[#0a0f1a]/95 backdrop-blur-3xl overflow-hidden"
          >
            <div className="px-4 pb-8 pt-4">
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-2 shadow-2xl">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-400 hover:bg-amber-500/10 hover:text-amber-500 transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-4 py-4 text-xs font-black uppercase tracking-[0.2em] text-black hover:bg-white transition-all"
                >
                  <FaFileArrowDown size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;