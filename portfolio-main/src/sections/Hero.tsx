import { motion } from "framer-motion";
import {
  Coffee,
  Leaf,
  Atom,
  Database,
  Network,
  BrainCircuit,
  Cloud,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { profile, socials } from "@/data/profile";
import { heroTechOrbs } from "@/data/skills";

const iconMap: Record<string, typeof Coffee> = {
  Coffee,
  Leaf,
  Atom,
  Database,
  Network,
  BrainCircuit,
  Cloud,
};

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  leetcode: SiLeetcode,
};

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Open to Java Full Stack Opportunities
            </motion.span>

            <div className="flex flex-col gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Akash R
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Java Full Stack Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {profile.heroTechLine.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs sm:text-sm font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={profile.resumeUrl}
                download
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-all hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-4 pt-2"
            >
              {socials.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex items-center justify-center h-[400px] lg:h-[520px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px] rounded-full border border-white/[0.06]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute h-[200px] w-[200px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] rounded-full border border-white/[0.08]"
              />
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-[120px] w-[120px] lg:h-[160px] lg:w-[160px] rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/20 blur-2xl"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="relative flex h-20 w-20 lg:h-28 lg:w-28 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_40px_-8px_rgba(34,211,238,0.5)]"
              >
                <Coffee className="h-8 w-8 lg:h-12 lg:w-12 text-cyan-400" />
              </motion.div>
            </div>

            {heroTechOrbs.map((orb, i) => {
              const Icon = iconMap[orb.icon];
              const angle = (i / heroTechOrbs.length) * Math.PI * 2;
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={orb.label}
                  animate={{
                    y: [y, y - 12, y],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    x: x,
                    marginLeft: "-40px",
                    marginTop: "-40px",
                  }}
                  className="hidden sm:block"
                >
                  <div
                    className={`flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-gradient-to-br ${orb.color} p-3 backdrop-blur-md hover:scale-110 hover:border-cyan-400/40 transition-all cursor-default`}
                  >
                    {Icon && <Icon className="h-5 w-5 text-white" />}
                    <span className="text-[10px] font-medium text-white/80">
                      {orb.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            <div className="sm:hidden flex flex-wrap gap-2 justify-center max-w-[300px] z-10">
              {heroTechOrbs.map((orb) => {
                const Icon = iconMap[orb.icon];
                return (
                  <div
                    key={orb.label}
                    className={`flex items-center gap-1.5 rounded-lg border border-white/10 bg-gradient-to-br ${orb.color} px-2.5 py-1.5`}
                  >
                    {Icon && <Icon className="h-4 w-4 text-white" />}
                    <span className="text-[10px] font-medium text-white/80">
                      {orb.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-slate-500"
      >
        <span className="text-xs">Scroll</span>
        <div className="h-8 w-5 rounded-full border border-slate-600 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-cyan-400/60" />
        </div>
      </motion.div>
    </section>
  );
}
