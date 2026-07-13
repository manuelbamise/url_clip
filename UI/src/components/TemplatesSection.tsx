import { motion } from 'framer-motion';
import { Share2, ShoppingCart, Send, MessageSquare, QrCode, Percent } from 'lucide-react';
import GlowCard from './GlowCard';

const templates = [
  { icon: Share2, title: 'Social Media', desc: 'Build, Track, Optimize — short links for every platform' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Product links, promo campaigns, and affiliate tracking' },
  { icon: Send, title: 'Email Campaigns', desc: 'Trackable links for newsletters and drip sequences' },
  { icon: MessageSquare, title: 'SMS Marketing', desc: 'Concise links perfect for text message campaigns' },
  { icon: QrCode, title: 'QR Codes', desc: 'Printable QR codes for print, packaging, and events' },
  { icon: Percent, title: 'Affiliate Links', desc: 'Manage and track affiliate program links at scale' },
];

function TemplatesSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-deep to-surface/10 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Templatize and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              standardize
            </span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            Pre-built templates for every use case. Start with a blueprint, customize in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {templates.map((template, i) => (
            <GlowCard key={template.title} delay={i * 0.08}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-teal-400/20 border border-cyan-400/10 flex items-center justify-center mb-4">
                <template.icon size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{template.title}</h3>
              <p className="text-sm text-muted-light leading-relaxed">{template.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TemplatesSection;
