import { motion } from 'framer-motion';
import { MessageCircle, Hash, Globe, Mail, FileText, Blocks } from 'lucide-react';
import NeonButton from './NeonButton';

const integrations = [
  { icon: Blocks, label: 'Slack', color: 'text-[#4A154B]' },
  { icon: Hash, label: 'Twitter / X', color: 'text-white' },
  { icon: MessageCircle, label: 'WhatsApp', color: 'text-[#25D366]' },
  { icon: Mail, label: 'Email', color: 'text-blue-400' },
  { icon: FileText, label: 'Notion', color: 'text-white' },
  { icon: Globe, label: 'WordPress', color: 'text-[#21759B]' },
];

function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-surface/20 to-deep pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Connect with your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              favorite tools
            </span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            URL Clip integrates seamlessly with the platforms you already use. Share links directly from your workflow.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-80 h-80 shrink-0"
          >
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-cyan-400/10 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border border-teal-400/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <Globe size={36} className="text-black" />
              </div>
            </div>
            {integrations.map((integration, i) => {
              const angle = (i / integrations.length) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 140;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <motion.div
                  key={integration.label}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, x, y }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 group"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <integration.icon size={22} className={`${integration.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="absolute -bottom-6 text-[10px] text-muted whitespace-nowrap">{integration.label}</span>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl font-bold mb-4">
              Migrate from other platforms{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">in one click</span>
            </h3>
            <p className="text-muted-light mb-6 max-w-md">
              Switching from Bitly, TinyURL, or Rebrandly? Import your existing links and analytics in seconds with our one-click migration tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <NeonButton size="lg" onClick={() => {}}>
                Migrate Now
              </NeonButton>
              <NeonButton size="lg" variant="secondary" onClick={() => {}}>
                Learn More
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationsSection;
