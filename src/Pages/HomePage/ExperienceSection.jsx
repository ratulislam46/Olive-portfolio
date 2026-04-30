import React from 'react';
import { motion } from "framer-motion";
import { FaBuildingCircleCheck, FaCalendarDays, FaListCheck } from 'react-icons/fa6';

const ExperienceSection = () => {
    const jobs = [
        {
            year: "2026 - Present",
            role: "Site Engineer",
            company: "ABC Construction Ltd",
            summary: "Leading site execution, QA/QC checkpoints, and contractor coordination for multi-storey projects.",
            highlights: ["Daily progress review and reporting", "Concrete and rebar quality control", "Client-consultant coordination"],
        },
        {
            year: "2024 - 2025",
            role: "Junior Structural Designer",
            company: "XYZ Engineering",
            summary: "Supported structural modeling, drawing revisions, and load-detail review for residential and mixed-use buildings.",
            highlights: ["RCC member design support", "Drawing and BOQ alignment", "Code-based detailing verification"],
        },
        {
            year: "2023 - 2024",
            role: "Assistant Planning Engineer",
            company: "Urban Infra Solutions",
            summary: "Handled schedule tracking, quantity updates, and site planning for road and drainage works.",
            highlights: ["Baseline schedule update", "Resource utilization monitoring", "Weekly stakeholder presentations"],
        },
    ];

    return (
        <section id="experience" className="py-24 lg:py-32 bg-transparent">
            <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight italic uppercase">
                        Work <span className="text-amber-500">History</span>
                    </h2>
                    <p className="mt-6 text-slate-400 text-lg font-medium">
                        A timeline of technical expertise, site leadership, and structural innovation.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="mt-14 space-y-10 border-l border-slate-800 ml-4 sm:ml-10 relative">
                    {jobs?.map((job, i) => (
                        <motion.article
                            key={job.role + job.year}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative pl-8 sm:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-2.25 top-2 h-4 w-4 rounded-full bg-[#0a0f1a] border-2 border-amber-500 group-hover:bg-amber-500 transition-colors duration-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

                            <div className="bg-[#111827]/50 backdrop-blur-xl rounded-4xl border border-slate-800/60 p-6 sm:p-8 hover:border-amber-500/40 hover:bg-[#111827]/80 transition-all duration-300 shadow-2xl shadow-black/20">

                                {/* Top Badges */}
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-lg bg-amber-500/10 text-amber-500 text-[11px] font-black uppercase tracking-widest border border-amber-500/20">
                                        <FaCalendarDays size={12} />
                                        {job.year}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-lg bg-slate-800/50 text-slate-300 text-[11px] font-bold uppercase tracking-widest border border-slate-700/50">
                                        <FaBuildingCircleCheck size={12} />
                                        {job.company}
                                    </span>
                                </div>

                                {/* Title & Summary */}
                                <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                    {job.role}
                                </h3>
                                <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed font-light">
                                    {job.summary}
                                </p>

                                {/* Contributions Box */}
                                <div className="mt-8 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 group-hover:bg-slate-900/60 transition-colors">
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-2 mb-4">
                                        <FaListCheck />
                                        Core Impact
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                                        {job.highlights.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <div className="mt-1.5 h-1 w-1 rounded-full bg-amber-500 shrink-0" />
                                                <span className="font-medium text-slate-400">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;