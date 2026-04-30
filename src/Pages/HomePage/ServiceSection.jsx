import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong, FaBuildingCircleCheck, FaHelmetSafety, FaRoadBridge, FaCheckDouble } from 'react-icons/fa6';

const services = [
    {
        title: 'Structural Design Support',
        description: 'RCC and steel structural planning, detailing reviews, and practical site-ready design decisions.',
        points: ['Load path and member sizing check', 'Seismic and code-compliant detailing', 'Design-to-site constructability alignment'],
        icon: FaBuildingCircleCheck,
    },
    {
        title: 'Site Supervision & QA/QC',
        description: 'End-to-end monitoring of execution quality with documented checkpoints for safe and reliable delivery.',
        points: ['Concrete, rebar, and shuttering inspections', 'Daily progress and non-conformance reporting', 'Method statement and checklist implementation'],
        icon: FaHelmetSafety,
    },
    {
        title: 'Road & Drainage Works Coordination',
        description: 'Planning and on-site coordination for municipal and infrastructure packages under schedule constraints.',
        points: ['Cross-section and alignment verification', 'Storm-water slope and flow coordination', 'Utility and stakeholder issue resolution'],
        icon: FaRoadBridge,
    },
];

const ServiceSection = () => {
    return (
        <section id="services" className="py-24 lg:py-32 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight italic uppercase">
                        Core Engineering <span className="text-amber-500">Services</span>
                    </h2>
                    <p className="mt-6 text-slate-400 text-lg font-medium italic leading-relaxed">
                        Service areas where I deliver practical engineering outcomes with a primary focus on quality, safety, and coordination.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-8 bg-[#111827]/40 backdrop-blur-xl rounded-2xl border border-slate-800/60 hover:border-amber-500/40 transition-all duration-500 shadow-2xl"
                        >
                            {/* Icon Background Glow */}
                            <div className="absolute -top-4 -right-4 h-24 w-24 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Service Icon */}
                            <div className="h-14 w-14 rounded-xl bg-slate-900 border border-slate-800 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-lg">
                                <service.icon size={26} />
                            </div>

                            {/* Content */}
                            <h3 className="mt-8 text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                                {service.title}
                            </h3>
                            
                            <p className="mt-4 text-slate-400 leading-relaxed font-light text-sm">
                                {service.description}
                            </p>

                            {/* Service Points */}
                            <ul className="mt-8 space-y-4">
                                {service.points.map((point) => (
                                    <li key={point} className="flex items-start gap-3 group/item">
                                        <div className="mt-1 shrink-0 h-4 w-4 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                            <FaCheckDouble size={8} className="text-amber-500" />
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300 group-hover/item:text-slate-100 transition-colors">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative Line */}
                            <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                                    Quality Assured
                                </span>
                                <FaArrowRightLong className="text-amber-500/40 group-hover:text-amber-500 group-hover:translate-x-2 transition-all" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-[120px]" />
                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default ServiceSection;