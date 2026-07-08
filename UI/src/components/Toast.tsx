import { useEffect } from 'react';

type ToastProps = {
  message: string | null;
  onClose: () => void;
};

function Toast({ message, onClose }: ToastProps) {
  // const [visible, setVisible] = useState(false);
  const visible = !!message;

  useEffect(() => {
    if (message) {
      // setVisible(true);
      const timer = setTimeout(() => {
        // setVisible(false);
        setTimeout(onClose, 200);
      }, 4000);
      return () => clearTimeout(timer);
    }
    // setVisible(false);
  }, [message, onClose]);

  return (
    <div
      className={`fixed top-6 right-6 z-50 transition-all duration-300 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      }`}
    >
      <div className="bg-[#1F1F1F] text-white px-5 py-4 border border-gray-700 flex items-center gap-4 min-w-[320px]">
        <span className="font-sans text-sm flex-1">{message}</span>
        <button
          onClick={() => {
            // setVisible(false);
            setTimeout(onClose, 200);
          }}
          className="text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toast;
