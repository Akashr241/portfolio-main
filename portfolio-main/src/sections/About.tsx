import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Briefcase,
  Dumbbell,
  ShoppingBag,
  Server,
  ShoppingCart,
  Lock,
  Cloud,
  BrainCircuit,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { profile } from "@/data/profile";
import { portfolioJourney } from "@/data/experience";

const journeyIcons: Record<string, typeof GraduationCap> = {
  GraduationCap,
  Briefcase,
  Dumbbell,
  ShoppingBag,
  Server,
  ShoppingCart,
  Lock,
  Cloud,
  BrainCircuit,
  Code2,
  ShieldCheck,
};

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="01"
          title="About Me"
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4">
              {profile.about.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-slate-300 leading-relaxed text-sm sm:text-base"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400 flex-shrink-0">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    Current Objective
                  </div>
                  <div className="text-sm text-slate-300 mt-1">
                    {profile.objective}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400 flex-shrink-0">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    Education
                  </div>
                  <div className="text-sm text-slate-300 mt-1">
                    Bachelor of Computer Applications (BCA) — CGPA 7.8
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                Developer Journey
              </h3>
              <div className="flex flex-col gap-0">
                {portfolioJourney.map((step, i) => {
                  const Icon =
                    journeyIcons[step.icon] || Code2;
                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800/80 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        {i < portfolioJourney.length - 1 && (
                          <div className="h-6 w-px bg-gradient-to-b from-white/10 to-transparent" />
                        )}
                      </div>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors pb-6">
                        {step.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
