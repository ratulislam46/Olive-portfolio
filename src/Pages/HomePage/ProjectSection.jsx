import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaLocationDot, FaRoad, FaRulerCombined, FaSitemap, FaXmark } from 'react-icons/fa6';

const projects = [
  {
    title: 'Skyline Tower Structural Design',
    location: 'Dhaka, Bangladesh',
    role: 'Structural Lead Engineer',
    type: 'High-Rise Residential',
    area: '42,000 sq.ft',
    duration: '14 months',
    scope: 'RCC frame analysis, seismic detailing, and pile foundation optimization.',
    challenge: 'Site had poor bearing capacity and high lateral wind demand.',
    solution: 'Introduced pile raft system with shear wall core and staged construction analysis.',
    impact: 'Reduced concrete overuse by 11% while achieving code-compliant drift limits.',
  },
  {
    title: 'Highway Overpass Rehabilitation',
    location: 'Chattogram, Bangladesh',
    role: 'Project Engineer',
    type: 'Bridge & Transport',
    area: '1.8 km corridor',
    duration: '10 months',
    scope: 'Condition assessment, retrofit detailing, traffic diversion planning.',
    challenge: 'Heavy traffic flow and deteriorated deck joints caused recurring serviceability risks.',
    solution: 'Executed phased strengthening with FRP wrapping and deck joint replacement at night shifts.',
    impact: 'Improved service life projection by 15+ years with minimal daytime traffic disruption.',
  },
  {
    title: 'Industrial Plant Foundation Package',
    location: 'Narayanganj, Bangladesh',
    role: 'Foundation & Site Coordinator',
    type: 'Industrial Infrastructure',
    area: '8.6 acres',
    duration: '16 months',
    scope: 'Machine foundation design review, raft slab execution, QA/QC supervision.',
    challenge: 'Complex dynamic loads from heavy machinery and tight commissioning timeline.',
    solution: 'Applied vibration control criteria, coordinated phased pour sequences, and QC checkpoints.',
    impact: 'Delivered zero rework in critical machine base zones and met commissioning milestone.',
  },
  {
    title: 'Urban Drainage & Road Development',
    location: 'Sylhet, Bangladesh',
    role: 'Site Planning Engineer',
    type: 'Municipal Development',
    area: '5.2 km network',
    duration: '12 months',
    scope: 'Storm-water line alignment, road cross-section development, BOQ monitoring.',
    challenge: 'Seasonal waterlogging and utility conflicts delayed baseline schedule.',
    solution: 'Redesigned drainage gradient and coordinated utility relocation with weekly authority reviews.',
    impact: 'Reduced flood-prone zones significantly and completed project 3 weeks ahead of target.',
  },
];

const ProjectSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Signature Projects With Real Structural Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A selection of high-rise, transport, industrial, and municipal projects where design accuracy,
            execution quality, and safety performance were kept at the core.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-7 lg:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group section-card-dark rounded-2xl border p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200">
                  {p.type}
                </span>
                <span className="text-xs font-medium text-slate-400">{p.duration}</span>
              </div>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {p.title}
              </h3>

              <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                <FaLocationDot className="text-blue-600" />
                {p.location}
              </p>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {p.scope}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                  <p className="text-xs text-slate-400">Role</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">{p.role}</p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                  <p className="text-xs text-slate-400">Project Scale</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">{p.area}</p>
                </div>
              </div>

              <button
                onClick={() => setSelected(p)}
                className="mt-6 inline-flex items-center gap-2 text-blue-300 font-semibold hover:text-blue-200 transition-colors"
              >
                Case Study Details
                <FaArrowRight size={13} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              className="bg-white p-6 sm:p-8 rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition"
              >
                <FaXmark size={18} />
              </button>

              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">{selected.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{selected.location}</p>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-3">
                  <p className="text-xs text-blue-700">Project Type</p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">{selected.type}</p>
                </div>
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-3">
                  <p className="text-xs text-blue-700">Duration</p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">{selected.duration}</p>
                </div>
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-3">
                  <p className="text-xs text-blue-700">Scale</p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">{selected.area}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700">
                <p className="flex items-start gap-3">
                  <FaSitemap className="mt-1 text-blue-600" />
                  <span><strong>Challenge:</strong> {selected.challenge}</span>
                </p>
                <p className="flex items-start gap-3">
                  <FaRulerCombined className="mt-1 text-blue-600" />
                  <span><strong>Engineering Solution:</strong> {selected.solution}</span>
                </p>
                <p className="flex items-start gap-3">
                  <FaRoad className="mt-1 text-blue-600" />
                  <span><strong>Project Outcome:</strong> {selected.impact}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default ProjectSection;