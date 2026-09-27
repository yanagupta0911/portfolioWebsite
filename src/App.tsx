import { useTheme } from '@/hooks/useTheme';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import WhatIDo from '@/components/WhatIDo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggleTheme} mounted={mounted} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <WhatIDo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
