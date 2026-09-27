import { Mail, Linkedin, ArrowUp } from 'lucide-react';
import { personalInfo, footerQuickLinks } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-palette-cyan/10 py-12">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full bg-palette-indigo/8 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-mono font-bold text-lg tracking-wider mb-2">
              <span className="text-palette-cyan">&lt;</span>
              YANA<span className="text-palette-indigo">.</span>GUPTA
              <span className="text-palette-cyan">/&gt;</span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
              {personalInfo.title}
            </p>
            <p className="mt-2 text-xs text-gray-500">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-palette-cyan mb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerQuickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-palette-cyan transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-palette-cyan mb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-palette-cyan transition-colors"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-palette-cyan transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-palette-cyan/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 Yana Gupta. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-palette-cyan transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-palette-cyan/20 flex items-center justify-center group-hover:bg-palette-cyan/10 group-hover:border-palette-cyan/40 transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
