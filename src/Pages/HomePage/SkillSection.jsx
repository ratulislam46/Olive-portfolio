import React from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaHelmetSafety, FaRoad, FaRulerCombined } from 'react-icons/fa6';
import { MdOutlineEngineering, MdDraw } from 'react-icons/md';

const skills = [
  {
    name: 'Structural Analysis & Design',
    icon: MdOutlineEngineering,
    level: 'Advanced',
    details: 'RCC and steel member design, load path review, and seismic detailing.',
  },
  {
    name: 'AutoCAD & Draft Coordination',
    icon: MdDraw,
    level: 'Advanced',
    details: 'Construction drawings, revision control, and multidisciplinary coordination.',
  },
  {
    name: 'Quantity Estimation & BOQ',
    icon: FaCalculator,
    level: 'Expert',
    details: 'Material take-off, cost planning, and value-driven budget optimization.',
  },
  {
    name: 'Site Supervision & QA/QC',
    icon: FaHelmetSafety,
    level: 'Expert',
    details: 'Daily execution monitoring, checklists, and quality compliance reporting.',
  },
  {
    name: 'Surveying & Setting Out',
    icon: FaRulerCombined,
    level: 'Intermediate',
    details: 'Benchmark transfer, layout verification, and alignment checks.',
  },
  {
    name: 'Road & Drainage Planning',
    icon: FaRoad,
    level: 'Advanced',
    details: 'Cross-section planning, storm-water line coordination, and site grading logic.',
  },
];

const SkillSection = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight italic uppercase">
            Technical <span className="text-amber-500">Competencies</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg font-medium italic">
            Built through field execution, structural problem-solving, and design-driven delivery.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#111827]/40 backdrop-blur-xl p-8 rounded-2xl border border-slate-800/60 hover:border-amber-500/40 transition-all duration-500 shadow-xl shadow-black/10"
            >
              {/* Icon Container with subtle glow */}
              <div className="h-14 w-14 rounded-2xl bg-slate-900 border border-slate-800 text-amber-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-inner">
                <skill.icon size={28} />
              </div>

              <div className="mt-8">
                <div className="flex flex-col gap-2">
                  {/* Skill Level Badge */}
                  <span className="w-fit text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    {skill.level}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                
                <p className="mt-4 text-sm text-slate-400 leading-relaxed font-light">
                  {skill.details}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-2 h-2 rounded-full bg-amber-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;