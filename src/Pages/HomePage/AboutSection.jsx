import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaDiagramProject, FaAward, FaUsers } from 'react-icons/fa6';

const stats = [
    { label: 'Years Experience', value: '10+', icon: FaBriefcase },
    { label: 'Projects Completed', value: '150+', icon: FaDiagramProject },
    { label: 'Certifications', value: '12', icon: FaAward },
    { label: 'Happy Clients', value: '80+', icon: FaUsers },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-24 lg:py-32 bg-[#0a0f1a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Side: Image with Blueprint Frame */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        {/* Decorative Outer Border */}
                        <div className="absolute -inset-4 border border-amber-500/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                        
                        <div className="relative z-10 overflow-hidden border border-slate-800 bg-slate-900 aspect-4/5 sm:aspect-square lg:aspect-4/5">
                            <img 
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                                alt="Civil Engineer Professional" 
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                            
                            {/* Image Overlay Tag (Like the image provided) */}
                            {/* <div className="absolute bottom-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-700 p-3">
                                <p className="text-[10px] font-black text-amber-500 tracking-[0.2em] uppercase leading-none">DWG: PORTFOLIO-001</p>
                                <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">Scale: 1:1</p>
                            </div> */}
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter italic uppercase">
                            STRUCTURAL <span className="text-amber-500">VISION,</span><br />
                            PRECISE <span className="text-amber-500">EXECUTION</span>
                        </h2>
                        
                        <div className="mt-8 space-y-6">
                            <p className="text-slate-300 text-lg font-medium leading-relaxed italic border-l-2 border-amber-500 pl-6">
                                A results-driven Civil Engineer with over a decade of experience in structural design, project management, and construction supervision. Specialized in reinforced concrete structures and modern building systems.
                            </p>
                            
                            <p className="text-slate-400 text-base leading-relaxed font-light">
                                From conceptual design to final handover, I bring technical expertise and hands-on leadership to every project. My approach combines traditional engineering principles with cutting-edge software tools to ensure optimal structural solutions.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-4 bg-slate-900/40 border border-slate-800 hover:border-amber-500/50 transition-colors text-center group">
                                    <stat.icon className="mx-auto text-amber-500/60 group-hover:text-amber-500 transition-colors mb-3" size={20} />
                                    <h4 className="text-2xl font-black text-white leading-none">{stat.value}</h4>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Download CV Button */}
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-black text-[12px] uppercase tracking-[0.3em] transition-all duration-300"
                        >
                            <FaDownload size={14} />
                            Download CV
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;