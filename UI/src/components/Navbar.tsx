import { useState } from 'react';
import { Link, Menu, X, Code2, Star } from 'lucide-react';
import NeonButton from './NeonButton';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
              <Link size={16} className="text-black" />
            </div>
            <span className="font-sans font-bold text-lg text-white tracking-wider">
              URL <span className="text-neon">CLIP</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('features')} className="text-sm text-muted-light hover:text-white transition-colors cursor-pointer">
              Features
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="text-sm text-muted-light hover:text-white transition-colors cursor-pointer">
              How It Works
            </button>
            <button onClick={() => scrollTo('integrations')} className="text-sm text-muted-light hover:text-white transition-colors cursor-pointer">
              API
            </button>
            <button onClick={() => scrollTo('changelog')} className="text-sm text-muted-light hover:text-white transition-colors cursor-pointer">
              Changelog
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-light hover:text-white transition-colors px-3 py-2"
            >
              <Code2 size={16} />
              <Star size={14} />
              <span>Star</span>
            </a>
            <NeonButton size="sm" onClick={() => scrollTo('hero')}>
              Get Started
            </NeonButton>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 cursor-pointer"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollTo('features')} className="block w-full text-left text-muted-light hover:text-white py-2 text-sm cursor-pointer">
              Features
            </button>
            <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left text-muted-light hover:text-white py-2 text-sm cursor-pointer">
              How It Works
            </button>
            <button onClick={() => scrollTo('integrations')} className="block w-full text-left text-muted-light hover:text-white py-2 text-sm cursor-pointer">
              API
            </button>
            <button onClick={() => scrollTo('changelog')} className="block w-full text-left text-muted-light hover:text-white py-2 text-sm cursor-pointer">
              Changelog
            </button>
            <NeonButton size="sm" className="w-full" onClick={() => scrollTo('hero')}>
              Get Started
            </NeonButton>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
