import { motion } from 'framer-motion';
import { Award, BadgeCheck, Calendar } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="06 — Certifications"
          title="Certifications"
          subtitle="Professional certifications and credentials I've earned."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl p-6 lg:p-8 card-dark light:card-light gradient-border overflow-hidden"
            >
              {/* Decorative corner glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-palette-indigo/10 blur-2xl group-hover:bg-palette-cyan/10 transition-colors duration-500" />

              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-palette-electric/20 to-palette-indigo/20 flex items-center justify-center group-hover:from-palette-cyan/20 group-hover:to-palette-indigo/20 transition-all duration-300">
                  <Award className="w-6 h-6 text-palette-cyan" />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold leading-snug group-hover:text-palette-cyan transition-colors">
                    {cert.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                    <BadgeCheck className="w-4 h-4 text-palette-cyan" />
                    {cert.issuer}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-mono text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.year}
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
