import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Information */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight italic uppercase">
                        Let's Build <span className="text-amber-500">Something Great</span>
                    </h2>
                    <p className="mt-6 text-slate-400 text-lg font-medium italic leading-relaxed max-w-md">
                        Feel free to reach out for consulting, collaboration, or project inquiries. I usually respond within 24 hours.
                    </p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                                <FaEnvelope size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500/60">Email Me</p>
                                <p className="text-slate-200 font-bold tracking-wide">engrabdurrahman46@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                                <FaLocationDot size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500/60">Location</p>
                                <p className="text-slate-200 font-bold tracking-wide">Barisal, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Glassmorphism Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <form className="space-y-5 rounded-2xl border border-slate-800/60 bg-[#111827]/40 p-8 sm:p-10 backdrop-blur-xl shadow-2xl shadow-black/40">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                <input 
                                    className="w-full p-4 bg-slate-900/50 rounded-2xl border border-slate-800 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 text-slate-200 transition-all placeholder:text-slate-600 text-sm" 
                                    placeholder="Md Ratul Howlader" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                                <input 
                                    className="w-full p-4 bg-slate-900/50 rounded-2xl border border-slate-800 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 text-slate-200 transition-all placeholder:text-slate-600 text-sm" 
                                    placeholder="arfanratul46@gmail.com" 
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                            <textarea 
                                className="w-full p-4 bg-slate-900/50 rounded-2xl border border-slate-800 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 text-slate-200 transition-all placeholder:text-slate-600 text-sm" 
                                placeholder="How can I help you with your project?" 
                                rows={4} 
                            />
                        </div>

                        <button className="w-full group inline-flex items-center justify-center gap-3 bg-amber-500 py-4 rounded-2xl font-black text-[13px] uppercase tracking-[0.2em] text-black hover:bg-amber-400 transition-all active:scale-[0.98] shadow-lg shadow-amber-500/20 mt-4 cursor-pointer">
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;