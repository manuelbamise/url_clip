import { motion } from 'framer-motion';
import { MousePointerClick, Link, TrendingUp, Globe } from 'lucide-react';
import GlowCard from './GlowCard';

const stats = [
  { icon: MousePointerClick, label: 'Total Clicks', value: '1.2M+', change: '+24%' },
  { icon: Link, label: 'Active Links', value: '45.2K', change: '+12%' },
  { icon: TrendingUp, label: 'Click Rate', value: '68.3%', change: '+5.2%' },
  { icon: Globe, label: 'Top Location', value: 'United States', change: '32.1%' },
];

function StatsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-deep to-surface/30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Know exactly how your links{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              perform
            </span>
          </h2>
          <p className="text-muted-light text-lg max-w-2xl mx-auto">
            Real-time analytics and insights to help you understand your audience and optimize your strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, i) => (
            <GlowCard key={stat.label} delay={i * 0.1}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-teal-400/20 border border-cyan-400/10 flex items-center justify-center">
                  <stat.icon size={20} className="text-cyan-400" />
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-muted-light">{stat.label}</p>
            </GlowCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative bg-surface/50 border border-white/5 rounded-xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-muted ml-2 font-mono">analytics-dashboard</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-end gap-2 h-32">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-cyan-500/40 to-teal-400/20 rounded-t-sm"
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
                  <span key={m} className="text-[10px] text-muted">{m}</span>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-muted-light">Referral</span>
                <span className="text-sm font-semibold text-white">42.5%</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-muted-light">Direct</span>
                <span className="text-sm font-semibold text-white">31.2%</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-sm text-muted-light">Social</span>
                <span className="text-sm font-semibold text-white">18.7%</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-muted-light">Email</span>
                <span className="text-sm font-semibold text-white">7.6%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
