import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="05 — Education"
          title="Education"
          subtitle="My academic background in computer applications."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-5 rounded-2xl p-6 card-dark light:card-light hover:border-palette-cyan/30 transition-colors duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-palette-electric/20 to-palette-indigo/20 flex items-center justify-center group-hover:from-palette-cyan/20 group-hover:to-palette-indigo/20 transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-palette-cyan" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="mt-1 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                  {edu.institution}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 font-mono text-palette-cyan">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  {edu.cgpa && (
                    <span className="flex items-center gap-1.5 font-mono text-palette-cyan">
                      <Award className="w-3.5 h-3.5" />
                      CGPA: {edu.cgpa}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
