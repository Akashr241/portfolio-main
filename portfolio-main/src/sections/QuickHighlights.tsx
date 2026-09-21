import { motion } from "framer-motion";
import { Briefcase, Code2, Rocket, BrainCircuit } from "lucide-react";
import { quickHighlights } from "@/data/profile";

const iconMap: Record<string, typeof Briefcase> = {
  Briefcase,
  Code2,
  Rocket,
  BrainCircuit,
};

export function QuickHighlights() {
  return (
    <section className="relative py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickHighlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.subtitle}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex flex-col items-center text-center gap-2 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm p-4 sm:p-5 hover:border-cyan-400/30 transition-colors"
              >
                {Icon && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug">
                  {item.subtitle}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
