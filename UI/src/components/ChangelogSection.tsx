import { motion } from 'framer-motion';
import { Sparkles, Scissors, Hash, BarChart3, QrCode, Clock, Layers, Terminal, Globe, Webhook, Share2, Download, Shield, Zap } from 'lucide-react';

const changelogEntries = [
  {
    version: 'v1.2.0',
    date: 'July 2026',
    items: [
      { icon: Webhook, text: 'Webhook support for real-time link event notifications' },
      { icon: Globe, text: 'Browser extension for Chrome & Firefox' },
      { icon: Terminal, text: 'CLI tool for power users and automation' },
    ],
  },
  {
    version: 'v1.1.0',
    date: 'June 2026',
    items: [
      { icon: Clock, text: 'Link expiry dates with auto-deactivation' },
      { icon: Layers, text: 'Bulk URL shortening with CSV import' },
      { icon: BarChart3, text: 'Advanced click analytics dashboard' },
    ],
  },
  {
    version: 'v1.0.0',
    date: 'May 2026',
    items: [
      { icon: Scissors, text: 'One-click URL shortening with instant results' },
      { icon: Hash, text: 'Custom alias support for branded short links' },
      { icon: QrCode, text: 'Automatic QR code generation for every link' },
      { icon: Share2, text: 'One-click sharing to social platforms' },
      { icon: Download, text: 'QR code download in PNG and SVG formats' },
      { icon: Shield, text: 'Link validation and security checks' },
      { icon: Zap, text: 'Edge-cached redirects for lightning-fast performance' },
    ],
  },
];

function ChangelogSection() {
  return (
    <section id="changelog" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-surface/10 to-deep pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={24} className="text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              What's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                new
              </span>
            </h2>
          </div>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            We're constantly shipping improvements. Here's what's available in URL Clip right now.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-cyan-400/10 to-transparent" />

          {changelogEntries.map((entry, idx) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 border-2 border-deep" />

              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-white">{entry.version}</span>
                <span className="text-sm text-muted font-mono">{entry.date}</span>
              </div>

              <div className="space-y-2">
                {entry.items.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 text-sm text-muted-light"
                  >
                    <item.icon size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative pl-14"
          >
            <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full bg-white/20 border-2 border-deep flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
            <p className="text-sm text-muted italic">More features coming soon...</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ChangelogSection;
