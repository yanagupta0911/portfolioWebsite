import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  mounted: boolean;
}

export default function ThemeToggle({ theme, toggleTheme, mounted }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 border border-palette-cyan/20 hover:border-palette-cyan/40 hover:bg-palette-cyan/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="w-5 h-5 text-palette-cyan" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="w-5 h-5 text-palette-electric" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
