import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaXmark, FaVideo } from 'react-icons/fa6';

const engineeringVideos = [
    {
        id: 1,
        title: "Structural Integrity Analysis — High Rise",
        org: "Structural Dynamics Lab",
        year: "2024",
        desc: "A comprehensive look at load distribution and seismic resistance testing for a 40-story residential complex.",
        youtubeId: "v_7Y_rSPlkI",
        tag: "Structural",
    },
    {
        id: 2,
        title: "Modern Bridge Construction Techniques",
        org: "Infrastructure Global",
        year: "2023",
        desc: "Demonstrating advanced pre-stressed concrete beam placement and pylon stabilization methods.",
        youtubeId: "8_808-VshXo",
        tag: "Infrastructure",
    },
    {
        id: 3,
        title: "Soil Testing & Foundation Planning",
        org: "Geotech Solutions",
        year: "2024",
        desc: "Showcasing the process of deep soil investigation and selecting the right pile foundation for marshy lands.",
        youtubeId: "Y72ZlW99hYw",
        tag: "Geotechnical",
    },
    {
        id: 4,
        title: "Eco-Friendly Concrete Innovation",
        org: "Sustainable Building Expo",
        year: "2023",
        desc: "Presenting the implementation of carbon-neutral concrete in urban paving projects to reduce heat island effects.",
        youtubeId: "W98pXoA5uG4",
        tag: "Sustainability",
    }
];

const VideoSection = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="videos" className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
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
                        Technical <span className="text-amber-500">Case Studies</span>
                    </h2>
                    <p className="mt-6 text-slate-400 text-lg font-medium italic">
                        Visual demonstrations of structural precision, site execution, and sustainable engineering solutions.
                    </p>
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {engineeringVideos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-[#111827]/40 backdrop-blur-xl rounded-2xl border border-slate-800/60 overflow-hidden hover:border-amber-500/40 transition-all duration-500 shadow-xl"
                            onClick={() => setSelectedVideo(video)}
                        >
                            {/* Thumbnail Area */}
                            <div className="relative aspect-video overflow-hidden cursor-pointer">
                                <img 
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} 
                                    alt={video.title}
                                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 bg-white/5 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                                        <FaPlay className="text-white group-hover:text-black ml-1 text-xl transition-colors" />
                                    </div>
                                </div>

                                {/* Tag Badge */}
                                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-[10px] font-black text-amber-500 uppercase tracking-widest">
                                    {video.tag}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-800/40 px-3 py-1 rounded-lg border border-slate-700/30">
                                        {video.org} • {video.year}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300 leading-snug">
                                    {video.title}
                                </h3>
                                <p className="mt-4 text-sm text-slate-400 leading-relaxed font-light">
                                    {video.desc}
                                </p>
                                
                                <div className="mt-6 flex items-center gap-2 text-amber-500/60 font-black text-[11px] uppercase tracking-widest">
                                    <FaVideo size={14} />
                                    <span>Watch Technical Breakdown</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Professional Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-950/98 backdrop-blur-xl"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#0a0f1a] w-full max-w-5xl rounded-[2rem] overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(245,158,11,0.15)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="px-6 py-4 bg-slate-900/50 flex justify-between items-center border-b border-slate-800">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                    <h4 className="text-xs font-black text-slate-300 uppercase tracking-widest truncate max-w-[200px] sm:max-w-md">
                                        {selectedVideo.title}
                                    </h4>
                                </div>
                                <button 
                                    onClick={() => setSelectedVideo(null)}
                                    className="p-2.5 bg-slate-800 hover:bg-amber-500 hover:text-black rounded-xl transition-all duration-300"
                                >
                                    <FaXmark size={18} />
                                </button>
                            </div>

                            {/* Aspect Ratio Controlled Iframe */}
                            <div className="relative aspect-video bg-black">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                    title="Engineering Video Player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoSection;