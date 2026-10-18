import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { resumes } from "@/data/profile";

interface ResumeDownloadButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export function ResumeDownloadButton({
  variant = "secondary",
  className = "",
}: ResumeDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const baseClasses =
    variant === "primary"
      ? "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02]"
      : "group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-all hover:scale-[1.02]";

  return (
    <div className={`relative inline-block ${className}`} ref={containerRef}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Download resume options"
        onClick={() => setOpen((current) => !current)}
        className={baseClasses}
      >
        <Download className="h-4 w-4" />
        Download Resume
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Resume download options"
          className="absolute left-0 z-20 mt-2 w-64 rounded-xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-slate-950/40 backdrop-blur-xl"
        >
          {resumes.map((resume) => (
            <a
              key={resume.label}
              href={resume.file}
              download
              role="menuitem"
              className="block rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-300"
              onClick={() => setOpen(false)}
            >
              {resume.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
