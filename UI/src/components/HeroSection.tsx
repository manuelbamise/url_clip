import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, ArrowRight, Zap, Shield, CheckCircle } from 'lucide-react';
import { axiosInstance } from '../utils/axios-config';
import Toast from './Toast';
import UrlResultPopup from './UrlResultPopup';
import NeonButton from './NeonButton';
import Badge from './Badge';

function Spinner() {
  return (
    <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" className="opacity-30" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" className="opacity-80" pathLength="100" strokeDashoffset="75" />
    </svg>
  );
}

const trustedLogos = ['BODi', 'DKATALIS', 'intalio', 'Jobvilla', 'Nexus', 'Pulse'];

function HeroSection() {
  const [inputUrl, setInputUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const handleGenerate = async () => {
    if (!inputUrl.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post('/v1/url', { url: inputUrl });
      const code = response.data.data.Url_code;
      setShortUrl(`http://localhost:8080/${code}`);
      setShowPopup(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) handleGenerate();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(34,211,238,0.08), transparent 50%),
            radial-gradient(600px circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(167,139,250,0.06), transparent 50%),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 60px 60px, 60px 60px',
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Badge variant="success">
            <Shield size={12} />
            0 vulnerabilities
          </Badge>
          <Badge variant="info">
            <Zap size={12} />
            Lightning fast
          </Badge>
          <Badge variant="success">
            <CheckCircle size={12} />
            99.9% uptime
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          Shorten Links.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
            Track Performance.
          </span>
          <br />
          Simplify Sharing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Shorten long URLs, track performance, and manage all your links in one place.
          Your go-to solution for smarter sharing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 bg-surface border border-white/10 rounded-xl p-1.5 focus-within:border-neon/50 focus-within:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
            <div className="flex items-center justify-center pl-4 text-muted">
              <Link size={20} />
            </div>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="https://www.example.com/long-url"
              disabled={loading}
              className="flex-1 bg-transparent border-none outline-none px-3 py-3.5 text-white placeholder:text-muted/50 font-sans text-base disabled:opacity-50 min-w-0"
            />
            <NeonButton onClick={handleGenerate} disabled={loading || !inputUrl.trim()} size="lg" className="shrink-0">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  Shorten URL <ArrowRight size={18} />
                </>
              )}
            </NeonButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-xs text-muted tracking-widest uppercase mb-5">Trusted by teams at</p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {trustedLogos.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold text-muted-light/50 hover:text-muted-light transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <Toast message={error} onClose={() => setError(null)} />
      {showPopup && shortUrl && (
        <UrlResultPopup url={shortUrl} onClose={() => setShowPopup(false)} />
      )}
    </section>
  );
}

export default HeroSection;
