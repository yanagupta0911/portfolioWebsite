import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Bot,
  BarChart3,
  Globe,
  GitBranch,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';
import { skills } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Server,
  Bot,
  BarChart3,
  Globe,
  GitBranch,
  BrainCircuit,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-palette-electric/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-palette-cyan/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="02 — Skills"
          title="Technical Skills"
          subtitle="Technologies and tools I work with across backend, data, and automation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl p-6 card-dark light:card-light hover:border-palette-cyan/30 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-palette-electric/20 to-palette-indigo/20 flex items-center justify-center group-hover:from-palette-cyan/20 group-hover:to-palette-indigo/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-palette-cyan" />
                  </div>
                  <h3 className="font-semibold text-base">{skill.category}</h3>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-palette-cyan/15 bg-palette-cyan/5 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:border-palette-cyan/40 hover:bg-palette-cyan/10 hover:text-palette-cyan transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
