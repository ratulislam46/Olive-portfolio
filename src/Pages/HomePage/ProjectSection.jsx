import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaLocationDot, FaRoad, FaRulerCombined, FaSitemap, FaXmark, FaCalendarDays, FaLayerGroup } from 'react-icons/fa6';

const projects = [
    {
        title: 'Skyline Tower Structural Design',
        location: 'Dhaka, Bangladesh',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        role: 'Structural Lead Engineer',
        type: 'High-Rise Residential',
        area: '42,000 sq.ft',
        duration: '14 months',
        scope: 'RCC frame analysis, seismic detailing, and pile foundation optimization.',
        challenge: 'Site had poor bearing capacity and high lateral wind demand.',
        solution: 'Introduced pile raft system with shear wall core and staged construction analysis.',
        impact: 'Reduced concrete overuse by 11% while achieving code-compliant drift limits.',
    },
    {
        title: 'Highway Overpass Rehabilitation',
        location: 'Chattogram, Bangladesh',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
        role: 'Project Engineer',
        type: 'Bridge & Transport',
        area: '1.8 km corridor',
        duration: '10 months',
        scope: 'Condition assessment, retrofit detailing, traffic diversion planning.',
        challenge: 'Heavy traffic flow and deteriorated deck joints caused recurring serviceability risks.',
        solution: 'Executed phased strengthening with FRP wrapping and deck joint replacement at night shifts.',
        impact: 'Improved service life projection by 15+ years with minimal daytime traffic disruption.',
    },
    {
        title: 'Industrial Plant Foundation Package',
        location: 'Narayanganj, Bangladesh',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
        role: 'Foundation & Site Coordinator',
        type: 'Industrial Infrastructure',
        area: '8.6 acres',
        duration: '16 months',
        scope: 'Machine foundation design review, raft slab execution, QA/QC supervision.',
        challenge: 'Complex dynamic loads from heavy machinery and tight commissioning timeline.',
        solution: 'Applied vibration control criteria, coordinated phased pour sequences, and QC checkpoints.',
        impact: 'Delivered zero rework in critical machine base zones and met commissioning milestone.',
    },
    {
        title: 'Urban Drainage & Road Development',
        location: 'Sylhet, Bangladesh',
        image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2070&auto=format&fit=crop',
        role: 'Site Planning Engineer',
        type: 'Municipal Development',
        area: '5.2 km network',
        duration: '12 months',
        scope: 'Storm-water line alignment, road cross-section development, BOQ monitoring.',
        challenge: 'Seasonal waterlogging and utility conflicts delayed baseline schedule.',
        solution: 'Redesigned drainage gradient and coordinated utility relocation with weekly authority reviews.',
        impact: 'Reduced flood-prone zones significantly and completed project 3 weeks ahead of target.',
    },
];

const ProjectSection = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="py-24 lg:py-32 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight italic uppercase">
                        Signature <span className="text-amber-500">Projects</span>
                    </h2>
                    <p className="mt-6 text-slate-400 text-lg font-medium italic">
                        Showcasing structural precision and real-world infrastructure impact across Bangladesh.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((p, i) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-[#111827]/40 backdrop-blur-xl rounded-2xl border border-slate-800/60 overflow-hidden hover:border-amber-500/40 transition-all duration-500 shadow-2xl"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={p.image} 
                                    alt={p.title} 
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1a] via-transparent to-transparent opacity-80" />
                                
                                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-[10px] font-black text-amber-500 uppercase tracking-widest">
                                    {p.type}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-slate-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                                    <FaCalendarDays className="text-amber-500/60" />
                                    {p.duration}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300 leading-tight">
                                    {p.title}
                                </h3>

                                <div className="mt-4 flex items-center gap-2 text-sm text-slate-400 font-medium italic">
                                    <FaLocationDot className="text-amber-500" />
                                    {p.location}
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">My Role</p>
                                        <p className="mt-1 text-xs font-bold text-slate-200">{p.role}</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Scale</p>
                                        <p className="mt-1 text-xs font-bold text-slate-200">{p.area}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelected(p)}
                                    className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-slate-800/50 hover:bg-amber-500 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] text-slate-300 hover:text-black transition-all duration-300 border border-slate-700 hover:border-amber-500"
                                >
                                    View Case Study
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Premium Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/98 backdrop-blur-xl"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#0a0f1a] max-w-3xl w-full rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-48 sm:h-64">
                                <img src={selected.image} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1a] to-transparent" />
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900/80 text-white hover:bg-amber-500 hover:text-black transition-all border border-slate-700"
                                >
                                    <FaXmark size={20} />
                                </button>
                            </div>

                            <div className="p-8 sm:p-10 -mt-12 relative z-10">
                                <h3 className="text-3xl font-black text-white italic uppercase tracking-tight leading-none">
                                    {selected.title}
                                </h3>
                                
                                <div className="mt-8 space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                                            <FaSitemap size={14} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-500/60">The Challenge</p>
                                            <p className="text-slate-300 text-sm leading-relaxed mt-1">{selected.challenge}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                                            <FaRulerCombined size={14} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-500/60">Engineering Solution</p>
                                            <p className="text-slate-300 text-sm leading-relaxed mt-1">{selected.solution}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 h-8 w-8 shrink-0 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                                            <FaRoad size={14} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-amber-500/60">Outcome & Impact</p>
                                            <p className="text-slate-300 text-sm leading-relaxed mt-1">{selected.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectSection;