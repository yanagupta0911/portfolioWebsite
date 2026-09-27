import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Bot,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';
import { whatIDo } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Database,
  Bot,
  BrainCircuit,
};

export default function WhatIDo() {
  return (
    <section id="whatido" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-palette-electric/8 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="07 — What I Do"
          title="What I Work On"
          subtitle="The areas I focus on as a developer and where I'm growing."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whatIDo.map((item, i) => {
            const Icon = iconMap[item.icon] || Server;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-6 card-dark light:card-light hover:border-palette-cyan/30 transition-colors duration-300 overflow-hidden"
              >
                <span className="font-mono text-5xl font-bold text-palette-cyan/10 absolute -top-2 -right-2 group-hover:text-palette-cyan/15 transition-colors">
                  {item.num}
                </span>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-palette-electric/20 to-palette-indigo/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-palette-cyan/20 group-hover:to-palette-indigo/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-palette-cyan" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
