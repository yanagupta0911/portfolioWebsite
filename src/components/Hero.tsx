// import { motion } from 'framer-motion';
// import { ArrowDown, Mail, Github, Sparkles, Download } from 'lucide-react';
// import { personalInfo } from '@/data/portfolio';

// export default function Hero() {
//   const handleNavClick = (href: string) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
//     >
//       {/* Background grid */}
//       <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-30" />

//       {/* Animated gradient glows */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-palette-indigo/20 blur-[120px]"
//         />
//         <motion.div
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//           }}
//           transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-palette-electric/20 blur-[120px]"
//         />
//         <motion.div
//           animate={{
//             x: [0, 60, 0],
//             y: [0, 40, 0],
//           }}
//           transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
//           className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-palette-cyan/10 blur-[100px]"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Status indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark light:glass-light mb-8"
//         >
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-palette-cyan opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-palette-cyan"></span>
//           </span>
//           <span className="text-xs font-mono text-palette-cyan">{personalInfo.status}</span>
//         </motion.div>

//         {/* Main headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
//         >
//           Building intelligent
//           <br />
//           systems with{' '}
//           <span className="text-gradient-cyan-indigo">Python.</span>
//         </motion.h1>

//         {/* Supporting text */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="mt-6 text-base md:text-lg lg:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto leading-relaxed"
//         >
//           Python Developer focused on backend engineering, automation, data
//           processing, web scraping, and machine learning.
//         </motion.p>

//         {/* CTA buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//           className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <button
//             onClick={() => handleNavClick('#projects')}
//             className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-palette-indigo to-palette-electric text-white font-medium text-sm overflow-hidden transition-transform hover:scale-105 glow-electric"
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               <Sparkles className="w-4 h-4" />
//               View My Work
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-palette-cyan to-palette-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>

//           <button
//             onClick={() => handleNavClick('#contact')}
//             className="px-8 py-3.5 rounded-full border border-palette-cyan/30 hover:border-palette-cyan/60 hover:bg-palette-cyan/10 font-medium text-sm transition-all duration-300"
//           >
//             Let's Connect
//           </button>
//         </motion.div>

//         {/* Download resume */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="mt-6"
//         >
//           <button
//             onClick={() => handleNavClick('#contact')}
//             className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-palette-cyan transition-colors group"
//           >
//             <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
//             Download Resume
//           </button>
//         </motion.div>

//         {/* Location + quick social */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.5 }}
//           className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-500 light:text-gray-500"
//         >
//           <span className="flex items-center gap-1.5">
//             <span className="w-1 h-1 rounded-full bg-palette-cyan" />
//             {personalInfo.location}
//           </span>
//           <a
//             href={`mailto:${personalInfo.email}`}
//             className="flex items-center gap-1.5 hover:text-palette-cyan transition-colors"
//           >
//             <Mail className="w-3.5 h-3.5" />
//             Email
//           </a>
//           <a
//             href={personalInfo.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1.5 hover:text-palette-cyan transition-colors"
//           >
//             <Github className="w-3.5 h-3.5" />
//             LinkedIn
//           </a>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="flex flex-col items-center gap-2 text-gray-500"
//         >
//           <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
//           <ArrowDown className="w-4 h-4 text-palette-cyan" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Sparkles, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-30" />

      {/* Animated gradient glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-palette-indigo/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-palette-electric/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-palette-cyan/10 blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark light:glass-light mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-palette-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-palette-cyan"></span>
          </span>
          <span className="text-xs font-mono text-palette-cyan">
            {personalInfo.status}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          Building intelligent
          <br />
          systems with{" "}
          <span className="text-gradient-cyan-indigo">Python.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg lg:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Python Developer focused on backend engineering, automation, data
          processing, web scraping, and machine learning.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNavClick("#projects")}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-palette-indigo to-palette-electric text-white font-medium text-sm overflow-hidden transition-transform hover:scale-105 glow-electric"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-palette-cyan to-palette-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => handleNavClick("#contact")}
            className="px-8 py-3.5 rounded-full border border-palette-cyan/30 hover:border-palette-cyan/60 hover:bg-palette-cyan/10 font-medium text-sm transition-all duration-300"
          >
            Let's Connect
          </button>
        </motion.div>

        {/* Download resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="Yana Gupta Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-palette-cyan transition-colors group cursor-pointer"
          >
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </motion.div>

        {/* Location + quick social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-500 light:text-gray-500"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-palette-cyan" />
            {personalInfo.location}
          </span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 hover:text-palette-cyan transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-palette-cyan transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs font-mono uppercase tracking-wider">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 text-palette-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
