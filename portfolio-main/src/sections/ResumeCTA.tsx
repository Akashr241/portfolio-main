import { motion } from "framer-motion";
import { Download, Github, Linkedin, ArrowRight } from "lucide-react";
import { profile, socials } from "@/data/profile";

const socialIconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
};

export function ResumeCTA() {
  return (
    <section id="resume" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 backdrop-blur-xl p-8 sm:p-12 lg:p-16 text-center"
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(34, 211, 238, 0.15), transparent 60%), radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.1), transparent 60%)`,
          }} />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Let's Build{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Something Great
              </span>
            </motion.h2>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mt-4">
              Interested in Java backend development, full-stack applications,
              AI-powered systems or software engineering opportunities?
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href={profile.resumeUrl}
                download
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" />
                Download Resume
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              {socials
                .filter((s) => socialIconMap[s.icon])
                .map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-all hover:scale-[1.02]"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </a>
                  );
                })}
            </div>

            <p className="text-xs text-slate-600 mt-6">
              Resume file: {profile.resumeUrl}{" "}
              <span className="italic">— replace with your latest PDF</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
