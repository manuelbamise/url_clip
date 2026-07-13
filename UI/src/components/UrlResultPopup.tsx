import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink, X } from 'lucide-react';
import NeonButton from './NeonButton';

type UrlResultPopupProps = {
  url: string;
  onClose: () => void;
};

function UrlResultPopup({ url, onClose }: UrlResultPopupProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleOpenTab = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-[18vh] px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-[0_0_60px_rgba(34,211,238,0.1)]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]"
          >
            <Check size={24} className="text-black" />
          </motion.div>
          <div>
            <h2 className="text-xl font-bold text-white">Link Generated!</h2>
            <p className="text-sm text-muted">Your short link is ready to share</p>
          </div>
        </div>

        <div className="bg-deep border border-white/10 rounded-xl px-5 py-4 mb-6 group hover:border-cyan-400/30 transition-colors duration-300">
          <p className="font-mono text-sm text-cyan-400 break-all select-all text-center">
            {url}
          </p>
        </div>

        <div className="flex gap-3">
          <NeonButton onClick={handleCopy} size="md" className="flex-1">
            {copied ? (
              <>
                <Check size={16} /> Copied!
              </>
            ) : (
              <>
                <Copy size={16} /> Copy Link
              </>
            )}
          </NeonButton>
          <NeonButton onClick={handleOpenTab} size="md" variant="secondary" className="flex-1">
            <ExternalLink size={16} /> Open Tab
          </NeonButton>
        </div>
      </motion.div>
    </div>
  );
}

export default UrlResultPopup;
