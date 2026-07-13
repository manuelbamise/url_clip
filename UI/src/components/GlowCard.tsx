import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
};

function GlowCard({ children, className = '', glowColor = 'rgba(34,211,238,0.15)', delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`relative group bg-[#111111] border border-white/10 rounded-xl p-6 hover:border-neon/30 transition-all duration-500 ${className}`}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export default GlowCard;
