import { Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { profile, socials } from "@/data/profile";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  leetcode: SiLeetcode,
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-lg font-bold text-white">
            Akash<span className="text-cyan-400"> R</span>
          </div>
          <div className="text-sm text-slate-400">
            {profile.title}
          </div>
          <div className="text-xs text-slate-500">
            {profile.secondaryTagline}
          </div>

          <div className="flex items-center gap-4 mt-2">
            {socials.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </div>

          <div className="w-full max-w-xs h-px bg-white/10 my-2" />

          <p className="text-xs text-slate-600">
            &copy; 2026 Akash R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
