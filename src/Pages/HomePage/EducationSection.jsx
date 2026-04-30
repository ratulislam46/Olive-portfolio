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
        <section id="certificates" className="py-24 lg:py-32">
            <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Certificates & Credentials</h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-300">
                        Industry-recognized certifications that reinforce my technical decision-making, project control, and site quality practices.
                    </p>
                </motion.div>

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
                    {credentials.map((item, index) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ y: -5 }}
                            className="section-card-dark rounded-2xl border p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-400/40 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="h-12 w-12 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center shrink-0">
                                    <FaAward size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{item.title}</h3>
                                    <p className="mt-1 text-sm sm:text-base text-slate-300">{item.issuer}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                                    <FaCalendarCheck size={12} />
                                    {item.year}
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-200 border border-blue-400/20 text-xs font-semibold">
                                    <FaMedal size={12} />
                                    Verified Credential
                                </span>
                            </div>

                            <p className="mt-4 text-sm text-slate-300 leading-relaxed">{item.focus}</p>

                            <p className="mt-4 text-sm font-medium text-slate-200 inline-flex items-center gap-2">
                                <FaCircleCheck className="text-blue-400" />
                                Applicable in civil project execution
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;