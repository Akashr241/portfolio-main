import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { SectionHeading } from "@/components/ui";
import { leetcode } from "@/data/experience";

export function ProblemSolving() {
  return (
    <section id="problem-solving" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          title="Problem Solving"
          subtitle="Data Structures and Algorithms practice for strong engineering fundamentals."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl p-8 sm:p-12 text-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.04] to-orange-500/[0.04] pointer-events-none" />

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-yellow-400 mb-6"
            >
              <SiLeetcode className="h-8 w-8" />
            </motion.div>

            <div className="relative">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {leetcode.stat}
              </div>
              <div className="text-lg text-slate-300 mt-2 font-medium">
                {leetcode.statLabel}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                on {leetcode.platform}
              </div>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-6 max-w-2xl mx-auto">
                {leetcode.description}
              </p>

              <a
                href={leetcode.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-sm font-semibold text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all mt-6"
              >
                <ExternalLink className="h-4 w-4" />
                {leetcode.buttonLabel}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
