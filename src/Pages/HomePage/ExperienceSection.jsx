import React from 'react';
import { motion } from "framer-motion";
import { FaBuildingCircleCheck, FaCalendarDays, FaHelmetSafety, FaListCheck } from 'react-icons/fa6';

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
        <section id="experience" className="py-24 lg:py-32">
            <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Professional Experience</h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-300">
                        Career journey shaped by on-site execution, structural detailing, and practical engineering leadership.
                    </p>
                </motion.div>

                <div className="mt-14 space-y-8 border-l-2 border-blue-500/40 pl-5 sm:pl-8">
                    {jobs.map((job, i) => (
                        <motion.article
                            key={job.role + job.year}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="section-card-dark relative rounded-2xl border p-6 sm:p-7 shadow-sm hover:shadow-lg transition"
                        >
                            <div className="absolute -left-[30px] sm:-left-[42px] top-8 h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-900" />

                            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-200 font-semibold border border-blue-400/20">
                                    <FaCalendarDays size={12} />
                                    {job.year}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-200 font-semibold">
                                    <FaBuildingCircleCheck size={12} />
                                    {job.company}
                                </span>
                            </div>

                            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white">{job.role}</h3>
                            <p className="mt-3 text-slate-300 leading-relaxed">{job.summary}</p>

                            <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                                <p className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                                    <FaListCheck className="text-blue-600" />
                                    Key Contributions
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                                    {job.highlights.map((point) => (
                                        <li key={point} className="flex items-start gap-2">
                                            <FaHelmetSafety className="text-blue-600 mt-0.5" size={12} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;