import React from 'react';
import { motion } from "framer-motion";
import { FaEye, FaBriefcase } from 'react-icons/fa6';

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a] pt-20">
            
            <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop')` }}
            />
            
            <div className="absolute inset-0 bg-linear-to-b from-[#0a0f1a] via-transparent to-[#0a0f1a]" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-size-[40px_40px]" />

            <div className="relative z-10 container mx-auto px-4 text-center">

                {/* Main Heading - Brackets Style */}
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-none uppercase"
                >
                    <span className="text-white/90"></span>ENGR. ABDUR
                    <br />
                    <span className="text-amber-500">RAHMAN</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <p className="mt-6 text-slate-300 font-bold tracking-[0.4em] uppercase text-sm md:text-lg">
                        Civil Engineer
                    </p>
                    <p className="mt-2 text-slate-400 font-medium tracking-wide text-xs md:text-base italic">
                        Designing & Building the Infrastructure of Tomorrow
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-4"
                >
                    <a 
                        href="#projects" 
                        className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-black uppercase py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
                    >
                        <FaEye className="group-hover:animate-pulse" />
                        View My Projects
                    </a>
                    
                    <a 
                        href="#contact" 
                        className="flex items-center gap-2 border-2 border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-md text-white font-bold uppercase py-4 px-8 rounded-md transition-all duration-300"
                    >
                        <FaBriefcase />
                        Hire Me
                    </a>
                </motion.div>

            </div>

            {/* Background Typography - Subtle Large Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
                <h2 className="text-[20vw] font-black text-white/2 leading-none text-center uppercase">
                    Engineer
                </h2>
            </div>

        </section>
    );
};

export default HeroSection;