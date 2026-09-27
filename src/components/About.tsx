import { motion } from 'framer-motion';
import { User, Database, Bot, Brain, Code, Server } from 'lucide-react';
import { personalInfo, aboutStats, aboutProfileTags } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const tagIcons: Record<string, typeof User> = {
  'Python Developer': Code,
  'Backend Engineering': Server,
  'Data Analytics': Database,
  'Web Scraping': Bot,
  Automation: Bot,
  'Machine Learning': Brain,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label="01 — About" title="About Me" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-base md:text-lg leading-relaxed text-gray-300 dark:text-gray-300 light:text-gray-700"
          >
            <p>
              I'm <span className="text-palette-cyan font-medium">Yana Gupta</span>, a
              Python Developer with hands-on experience building backend applications
              for data processing, web scraping, automation, APIs, and data analytics.
            </p>
            <p>
              During my internships, I worked with{' '}
              <span className="text-palette-cyan font-medium">20,000+ confidential company records</span>,
              supporting data-processing and data-enrichment workflows. I've built
              web-scraping and automation tools using Python, Selenium, and BeautifulSoup,
              and developed applications with FastAPI, SQLite, Pandas, and REST APIs.
            </p>
            <p>
              I'm currently advancing my skills in{' '}
              <span className="text-palette-cyan font-medium">Machine Learning</span> and
              backend engineering while pursuing my Master of Computer Applications.
              I'm passionate about building practical, data-driven solutions that
              solve real problems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {aboutStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl card-dark light:card-light"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient-cyan-indigo">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: profile card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl p-6 lg:p-8 card-dark light:card-light gradient-border glow-cyan">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-palette-cyan to-palette-indigo flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">{personalInfo.name}</div>
                  <div className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-palette-cyan/20 via-palette-indigo/20 to-transparent mb-6" />

              {/* Tags */}
              <div className="space-y-3">
                {aboutProfileTags.map((tag, i) => {
                  const Icon = tagIcons[tag] || Code;
                  return (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-palette-cyan/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-palette-electric/15 flex items-center justify-center group-hover:bg-palette-cyan/15 transition-colors">
                        <Icon className="w-4 h-4 text-palette-cyan" />
                      </div>
                      <span className="text-sm font-medium">{tag}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
