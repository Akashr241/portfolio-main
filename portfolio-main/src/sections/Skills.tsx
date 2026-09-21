import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Database,
  BrainCircuit,
  CreditCard,
  Cloud,
  Wrench,
} from "lucide-react";
import { SectionHeading, TechBadge } from "@/components/ui";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Server,
  Layout,
  Database,
  BrainCircuit,
  CreditCard,
  Cloud,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          title="Technical Skills"
          subtitle="A categorized overview of technologies I work with across the full stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <TechBadge key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
