import { useState } from "react";
import { axiosInstance } from "../utils/axios-config";
import Toast from "./Toast";
import UrlResultPopup from "./UrlResultPopup";

function LinkIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
        className="opacity-30"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
        className="opacity-80"
        pathLength="100"
        strokeDashoffset="75"
      />
    </svg>
  );
}

const avatars = [
  { bg: "from-violet-500 to-fuchsia-500" },
  { bg: "from-amber-500 to-orange-500" },
  { bg: "from-sky-500 to-cyan-500" },
  { bg: "from-emerald-500 to-teal-500" },
];

function HeroSection() {
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleGenerate = async () => {
    if (!inputUrl.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/v1/url", {
        url: inputUrl,
      });

      const code = response.data.data.Url_code;
      setShortUrl(`http://localhost:8080/${code}`);
      setShowPopup(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleGenerate();
    }
  };

  return (
    <section className="relative min-h-screen bg-[#F7F7F5] flex items-start justify-center pt-[15vh] px-6">
      <div className="flex flex-col items-center w-full max-w-[900px] text-center">
        <span className="text-sm font-medium tracking-[8px] text-[#222] mb-8">
          SIMPLIFY YOUR LINKS
        </span>

        <h1 className="font-heading text-7xl desktop:text-8xl font-bold leading-[0.95] text-black mb-6">
          Transform Long URLs, into
          <br />
          Tiny Links Instantly!
        </h1>

        <p className="font-sans text-xl leading-relaxed max-w-[700px] text-[#222] mb-10">
          Shorten long URLs, track performance, & manage all your links in one
          place. Your go to solution for smarter sharing. Paste your long link
          below.
        </p>

        <div className="w-full max-w-[620px] h-[58px] flex bg-white border-2 border-black rounded-none overflow-hidden">
          <div className="w-[60px] flex items-center justify-center bg-white border-r-2 border-black shrink-0">
            <LinkIcon />
          </div>

          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="https://www.example.com/long-url"
            disabled={loading}
            className="flex-1 border-none outline-none px-5 text-lg text-black placeholder:text-gray-300 font-sans disabled:opacity-50"
          />

          <button
            onClick={handleGenerate}
            disabled={loading || !inputUrl.trim()}
            className="w-[210px] bg-[#1F1F1F] hover:bg-[#333] disabled:bg-[#555] disabled:cursor-not-allowed text-white font-sans font-bold text-base flex flex-col items-center justify-center leading-tight cursor-pointer transition-colors duration-200 shrink-0"
          >
            {loading ? (
              <Spinner />
            ) : (
              <>
                <span>Generate Link</span>
                <span className="italic font-normal text-sm opacity-80">
                  &mdash; It&apos;s free
                </span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-7 mt-10">
          <div className="flex">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatar.bg} border-2 border-white ${i > 0 ? "-ml-3" : ""} transition-transform duration-200 hover:translate-y-[-2px]`}
              />
            ))}
          </div>

          <p className="font-sans text-lg font-medium text-[#222]">
            1K+ people already using it.
          </p>
        </div>

        <svg
          className="absolute bottom-[18%] right-[12%] opacity-60 w-28 h-28 text-gray-400 hidden laptop:block"
          viewBox="0 0 100 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M5 60 C20 20, 30 70, 45 35 C55 15, 60 50, 70 30 C80 10, 85 50, 95 35" />
          <path d="M85 25 L95 35 L88 45" />
        </svg>
      </div>

      <Toast message={error} onClose={() => setError(null)} />

      {showPopup && shortUrl && (
        <UrlResultPopup url={shortUrl} onClose={() => setShowPopup(false)} />
      )}
    </section>
  );
}

export default HeroSection;
