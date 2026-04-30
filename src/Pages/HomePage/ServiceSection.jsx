import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong, FaBuildingCircleCheck, FaHelmetSafety, FaRoadBridge, FaScrewdriverWrench } from 'react-icons/fa6';

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
        <section id="services" className="py-24 lg:py-32">
            <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 text-blue-200 border border-blue-400/20 text-sm font-semibold">
                        <FaScrewdriverWrench size={13} />
                        Professional Services
                    </span>
                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Core Engineering Services
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-300">
                        Service areas where I deliver practical engineering outcomes with quality, safety, and coordination focus.
                    </p>
                </motion.div>

                <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="section-card-dark rounded-2xl border p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-400/40 transition-all duration-300"
                        >
                            <div className="h-12 w-12 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center">
                                <service.icon size={22} />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                            <p className="mt-3 text-slate-300 leading-relaxed">{service.description}</p>

                            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
                                {service.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2.5">
                                        <FaArrowRightLong size={11} className="mt-1 text-blue-600" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
