import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  BrainCircuit,
} from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { achievements } from "@/data/experience";

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Briefcase,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  BrainCircuit,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          title="Achievements & Milestones"
          subtitle="Key milestones in my journey as a Java Full Stack Developer."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white leading-tight pt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
