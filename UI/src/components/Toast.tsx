import { useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

type ToastProps = {
  message: string | null;
  onClose: () => void;
};

function Toast({ message, onClose }: ToastProps) {
  const visible = !!message;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setTimeout(onClose, 200);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-50 transition-all duration-300 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-surface/90 backdrop-blur-xl border border-red-500/20 rounded-xl px-5 py-4 flex items-center gap-4 min-w-[320px] shadow-[0_0_30px_rgba(239,68,68,0.1)]">
        <AlertCircle size={18} className="text-red-400 shrink-0" />
        <span className="font-sans text-sm text-muted-light flex-1">{message}</span>
        <button
          onClick={() => setTimeout(onClose, 200)}
          className="text-muted hover:text-white transition-colors cursor-pointer shrink-0"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export default Toast;
