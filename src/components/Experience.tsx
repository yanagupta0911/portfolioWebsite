import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="03 — Experience"
          title="Work Experience"
          subtitle="My internship journey building real-world applications with Python."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-palette-cyan/40 via-palette-indigo/30 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-4 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-palette-cyan ring-4 ring-palette-cyan/20 md:-translate-x-1/2 -translate-x-1/2 top-6 z-10" />

              {/* Spacer for desktop alternating layout */}
              <div className="hidden md:block flex-1" />

              {/* Card */}
              <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="rounded-2xl p-6 card-dark light:card-light hover:border-palette-cyan/30 transition-colors duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="font-mono text-xs text-palette-cyan flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                  <div className={`flex items-center gap-3 mt-1 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 mt-1 text-xs text-gray-500 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </div>

                  <ul className={`mt-4 space-y-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.details.map((detail, j) => (
                      <li key={j} className={`flex gap-2 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                        <span className="text-palette-cyan mt-1 shrink-0">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-palette-cyan/15 bg-palette-cyan/5 text-palette-cyan"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
