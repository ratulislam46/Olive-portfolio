import React from 'react';
import { motion } from "framer-motion";
import { FaArrowRightLong, FaBuilding, FaHelmetSafety } from 'react-icons/fa6';
import { MdOutlineEngineering } from 'react-icons/md';

const HeroSection = () => {

    return (
        <section id="home" className="section-bg section-bg-carbon pattern-grid relative overflow-hidden bg-slate-950 text-white mt-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,#1d4ed8_0%,transparent_38%),radial-gradient(circle_at_85%_80%,#0f172a_0%,transparent_45%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(15,23,42,0.78))]" />
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[42px_42px]" />

            <div className="section-content relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-34 lg:pb-24">
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/35 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-100">
                            <MdOutlineEngineering />
                            Civil Engineer | Structural & Site Specialist
                        </span>

                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight">
                            Designing Safe Structures, Delivering Reliable Projects
                        </h1>

                        <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                            I help transform engineering concepts into durable, buildable results through
                            structural accuracy, disciplined site execution, and practical project coordination.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3.5">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition"
                            >
                                View Projects
                                <FaArrowRightLong size={14} />
                            </a>
                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-500/90 px-6 py-3 text-sm sm:text-base font-semibold text-slate-100 hover:bg-slate-800/70 transition"
                            >
                                About Me
                            </a>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="rounded-2xl border border-slate-700/80 bg-slate-900/70 backdrop-blur-md p-6 sm:p-7"
                    >
                        <h3 className="text-xl font-semibold text-white">Engineering Snapshot</h3>

                        <div className="mt-5 grid grid-cols-2 gap-3.5">
                            <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                                <p className="text-2xl font-bold text-blue-300">20+</p>
                                <p className="mt-1 text-xs text-slate-300">Projects Contributed</p>
                            </div>
                            <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                                <p className="text-2xl font-bold text-blue-300">4+</p>
                                <p className="mt-1 text-xs text-slate-300">Years Experience</p>
                            </div>
                        </div>

                        <ul className="mt-6 space-y-3.5 text-slate-200">
                            {[
                                "RCC and steel design coordination",
                                "Site quality control and inspection",
                                "BOQ support and execution planning",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                                    <FaHelmetSafety className="text-blue-400 mt-1" size={13} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs sm:text-sm text-slate-300">
                            <FaBuilding className="text-blue-400" />
                            Focus Areas: High-Rise, Roads, Industrial Foundations
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;