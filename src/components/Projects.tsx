import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, FolderGit2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-palette-indigo/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="04 — Projects"
          title="Things I've Built"
          subtitle="Projects developed during my internship and learning journey."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-2xl p-6 lg:p-8 card-dark light:card-light gradient-border hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-palette-electric/20 to-palette-indigo/20 flex items-center justify-center group-hover:from-palette-cyan/20 group-hover:to-palette-indigo/20 transition-all duration-300">
                  <FolderGit2 className="w-6 h-6 text-palette-cyan" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-palette-cyan group-hover:rotate-45 transition-all duration-300" />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-palette-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-palette-cyan/15 bg-palette-cyan/5 text-palette-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-palette-cyan/10">
                <span className="text-xs font-mono text-gray-500 group-hover:text-palette-cyan transition-colors">
                  {project.link ? 'View Project →' : 'Coming Soon'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full rounded-2xl p-8 dark:bg-palette-navy light:bg-white border border-palette-cyan/20 glow-cyan"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-palette-electric/20 to-palette-indigo/20 flex items-center justify-center">
                  <FolderGit2 className="w-6 h-6 text-palette-cyan" />
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-palette-cyan/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-palette-cyan mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-palette-cyan/20 bg-palette-cyan/5 text-palette-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-palette-cyan/10">
                <span className="text-sm text-gray-500">
                  {selected.link ? (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-palette-cyan hover:underline flex items-center gap-1.5"
                    >
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    'Project link coming soon'
                  )}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
