import { motion } from 'framer-motion';
import { Scissors, Hash, BarChart3, QrCode, Clock, Layers } from 'lucide-react';
import GlowCard from './GlowCard';

const features = [
  {
    icon: Scissors,
    title: 'One-Click Shortening',
    desc: 'Shorten any long URL instantly with a single click. Lightning-fast and reliable.',
  },
  {
    icon: Hash,
    title: 'Custom Aliases',
    desc: 'Create branded, memorable short links that reflect your identity and boost CTR.',
  },
  {
    icon: BarChart3,
    title: 'Click Analytics',
    desc: 'Track clicks, geographic data, referrers, and device information in real time.',
  },
  {
    icon: QrCode,
    title: 'QR Codes',
    desc: 'Generate QR codes for every shortened link. Download and share with ease.',
  },
  {
    icon: Clock,
    title: 'Link Expiry',
    desc: 'Set expiration dates for time-sensitive campaigns. Auto-deactivate when done.',
  },
  {
    icon: Layers,
    title: 'Bulk Shorten',
    desc: 'Shorten hundreds of URLs at once with our bulk import tool. Save hours of work.',
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-surface/50 to-deep pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Packed with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              powerful features
            </span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            Everything you need to shorten, track, and optimize your links — all in one platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <GlowCard key={feature.title} delay={i * 0.08}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-teal-400/20 border border-cyan-400/10 flex items-center justify-center mb-4">
                <feature.icon size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-light leading-relaxed">{feature.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
