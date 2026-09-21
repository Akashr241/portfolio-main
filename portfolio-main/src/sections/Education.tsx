import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { education } from "@/data/experience";

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="09"
          title="Education"
          subtitle="Academic foundation in computer applications."
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl p-6 sm:p-8 hover:border-cyan-400/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400 flex-shrink-0">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{edu.institution}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    <Award className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm text-slate-300">
                      CGPA:{" "}
                      <span className="font-bold text-white">{edu.cgpa}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
