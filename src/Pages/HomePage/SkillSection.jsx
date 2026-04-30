import React from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaHelmetSafety, FaRoad, FaRulerCombined } from 'react-icons/fa6';
import { MdOutlineEngineering } from 'react-icons/md';

const skills = [
  {
    name: 'Structural Analysis & Design',
    icon: MdOutlineEngineering,
    level: 'Advanced',
    details: 'RCC and steel member design, load path review, and seismic detailing.',
  },
  {
    name: 'AutoCAD & Draft Coordination',
    icon: MdOutlineEngineering,
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
    <section id="skills" className="py-24 lg:py-32">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Core Engineering Skills</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Technical strengths built through field execution, structural problem-solving, and design-driven delivery.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group section-card-dark p-6 rounded-2xl shadow-sm border hover:shadow-xl hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center">
                <skill.icon size={24} />
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white leading-snug">{skill.name}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 whitespace-nowrap">
                    {skill.level}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{skill.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;