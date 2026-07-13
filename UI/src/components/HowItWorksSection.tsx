import { motion } from 'framer-motion';
import { Link as LinkIcon, Scissors, ClipboardCopy, Share2, Puzzle, Terminal, Bookmark, Globe, Webhook, Upload } from 'lucide-react';

const steps = [
  { icon: LinkIcon, label: 'Paste URL', desc: 'Paste your long URL into the input field' },
  { icon: Scissors, label: 'Shorten', desc: 'Click shorten and get a compact link' },
  { icon: ClipboardCopy, label: 'Copy', desc: 'Copy your new short link to clipboard' },
  { icon: Share2, label: 'Share Anywhere', desc: 'Share across social, email, SMS, and more' },
];

const chips = [
  { icon: Puzzle, label: 'Browser Extension' },
  { icon: Terminal, label: 'CLI Tool' },
  { icon: Bookmark, label: 'Bookmarklet' },
  { icon: Globe, label: 'API Access' },
  { icon: Webhook, label: 'Webhooks' },
  { icon: Upload, label: 'Bulk Import' },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep to-surface/30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How it{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              works
            </span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            Four simple steps to shorten and share any link. Ship faster with URL Clip.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-0 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center px-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-teal-400/20 border border-cyan-400/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
                <step.icon size={28} className="text-cyan-400" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 text-black font-bold text-sm flex items-center justify-center mb-3">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{step.label}</h3>
              <p className="text-sm text-muted-light max-w-[180px]">{step.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[65%] w-[70%] h-[2px] bg-gradient-to-r from-cyan-400/40 to-teal-400/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-cyan-400/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {chips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-muted-light hover:bg-white/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300 cursor-default"
            >
              <chip.icon size={14} />
              {chip.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
