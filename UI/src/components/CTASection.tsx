import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NeonButton from './NeonButton';

function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(34,211,238,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(167,139,250,0.08) 0%, transparent 50%)
          `,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Start shortening in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                30 seconds
              </span>
            </h2>
            <p className="text-muted-light text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              No sign-up required. Shorten your first link right now using our API or web interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <NeonButton size="lg" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Started Free <ArrowRight size={18} />
              </NeonButton>
              <NeonButton size="lg" variant="secondary" onClick={() => {}}>
                View Documentation
              </NeonButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="bg-surface/80 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-muted ml-2 font-mono">terminal</span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-sm">
                <div className="flex items-start gap-2 text-muted-light mb-2">
                  <span className="text-emerald-400 shrink-0">$</span>
                  <span>curl -X POST https://api.urlclip.dev/shorten \</span>
                </div>
                <div className="flex items-start gap-2 text-muted-light mb-2 ml-5">
                  <span />
                  <span>{`-d '{"url":"https://example.com/very-long-url"}'`}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-light mb-3 ml-5">
                  <span />
                  <span>-H "Content-Type: application/json"</span>
                </div>
                <div className="border-t border-white/5 pt-3 mt-3">
                  <div className="flex items-start gap-2 text-emerald-400">
                    <span className="shrink-0">→</span>
                    <span>{"{"} "short_url": "https://urlclip.dev/abc12" {"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
