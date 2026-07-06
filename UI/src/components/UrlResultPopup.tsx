import { useState } from "react";

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
      // fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleOpenTab = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 z-40 flex items-start justify-center pt-[20vh] px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#F7F7F5] border-2 border-black w-full max-w-md p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors cursor-pointer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-heading text-2xl font-bold text-black">
            Link Generated!
          </h2>
        </div>

        <div className="bg-white border-2 border-black px-4 py-3 mb-6">
          <p className="font-mono text-sm text-black break-all select-all">
            {url}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCopy}
            className="flex-1 bg-[#1F1F1F] hover:bg-[#333] text-white font-sans font-bold text-sm py-3 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200"
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy
              </>
            )}
          </button>

          <button
            onClick={handleOpenTab}
            className="flex-1 bg-[#1F1F1F] hover:bg-[#333] text-white font-sans font-bold text-sm py-3 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open Tab
          </button>
        </div>
      </div>
    </div>
  );
}

export default UrlResultPopup;
