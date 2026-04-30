import React from 'react';
import { motion } from 'framer-motion';
import { FaCircleCheck, FaClipboardCheck, FaPeopleGroup } from 'react-icons/fa6';

const strengths = [
    'Structural detailing based on practical site conditions',
    'Execution-focused planning with clear quality checkpoints',
    'Strong communication across client, consultant, and contractor teams',
];

const AboutSection = () => {
    return (
        <section id="about" className="py-24 lg:py-32">
            <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            About Me
                        </h2>
                        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
                            I am a civil engineer focused on structural design support, site execution, and
                            quality-driven delivery. My work combines technical accuracy with practical field
                            decisions to ensure projects are safe, cost-effective, and completed on time.
                        </p>
                        <p className="mt-4 text-base text-slate-400 leading-relaxed">
                            From high-rise buildings to infrastructure packages, I bring disciplined planning,
                            site coordination, and continuous problem-solving to every stage of project delivery.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="section-card-dark rounded-2xl border p-6 sm:p-7"
                    >
                        <h3 className="text-xl font-semibold text-white">Professional Strengths</h3>
                        <ul className="mt-5 space-y-3">
                            {strengths.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-slate-300">
                                    <FaCircleCheck className="text-blue-600 mt-1" size={13} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                                <FaClipboardCheck className="text-blue-400" />
                                <p className="mt-2 text-sm font-semibold text-slate-100">QA/QC Driven</p>
                                <p className="mt-1 text-xs text-slate-400">Execution with documented quality checks</p>
                            </div>
                            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                                <FaPeopleGroup className="text-blue-400" />
                                <p className="mt-2 text-sm font-semibold text-slate-100">Team Coordination</p>
                                <p className="mt-1 text-xs text-slate-400">Smooth communication across stakeholders</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
