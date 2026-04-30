import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCalendarCheck, FaCircleCheck, FaMedal } from 'react-icons/fa6';

const credentials = [
    {
        title: 'Certified Professional Engineer (IEB)',
        issuer: 'Institution of Engineers, Bangladesh',
        year: '2025',
        focus: 'Professional engineering ethics, structural compliance, and project governance.',
    },
    {
        title: 'Construction Project Management Certification',
        issuer: 'Bangladesh Engineering Institute',
        year: '2024',
        focus: 'Planning, risk control, procurement coordination, and execution monitoring.',
    },
    {
        title: 'Advanced AutoCAD for Civil & Structural Drafting',
        issuer: 'CAD Training Academy',
        year: '2023',
        focus: 'Detailed structural drawings, revision workflows, and documentation standards.',
    },
    {
        title: 'Site Safety & QA/QC Compliance Training',
        issuer: 'National Construction Safety Council',
        year: '2023',
        focus: 'On-site safety protocols, material inspection, and quality checklist practice.',
    },
];

const EducationSection = () => {
    return (
        <section id="certificates" className="py-24 lg:py-32 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header - Clean Look without bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight italic uppercase">
                        Certificates & <span className="text-amber-500">Credentials</span>
                    </h2>
                    <p className="mt-6 text-slate-400 text-lg font-medium italic leading-relaxed">
                        Industry-recognized certifications that reinforce technical decision-making, project control, and site quality practices.
                    </p>
                </motion.div>

                {/* Credentials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {credentials.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-[#111827]/40 backdrop-blur-xl p-6 sm:p-10 rounded-2xl border border-slate-800/60 hover:border-amber-500/40 transition-all duration-500 shadow-xl"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                {/* Icon Badge */}
                                <div className="h-14 w-14 rounded-2xl bg-slate-900 border border-slate-800 text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-lg">
                                    <FaAward size={26} />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-amber-500/80 font-semibold text-sm tracking-wide">
                                        {item.issuer}
                                    </p>
                                </div>
                            </div>

                            {/* Info Badges */}
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-800/80 text-slate-300 text-[11px] font-black uppercase tracking-widest border border-slate-700/50">
                                    <FaCalendarCheck className="text-amber-500" size={14} />
                                    Issued: {item.year}
                                </span>
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-500/5 text-amber-500/90 text-[11px] font-black uppercase tracking-widest border border-amber-500/20">
                                    <FaMedal size={14} />
                                    Verified
                                </span>
                            </div>

                            {/* Description Box */}
                            <div className="mt-8 pt-6 border-t border-slate-800/60">
                                <p className="text-slate-400 text-sm leading-relaxed font-light">
                                    {item.focus}
                                </p>
                                
                                <div className="mt-6 flex items-center gap-2.5">
                                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-amber-500/10 border border-amber-500/30">
                                        <FaCircleCheck className="text-amber-500" size={10} />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                                        Applicable in civil project execution
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;