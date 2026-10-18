import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { certifications, education } from "@/data/experience";

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
                      CGPA: <span className="font-bold text-white">{edu.cgpa}</span>
                      {edu.expected ? (
                        <span className="ml-2 text-cyan-300">
                          • Expected {edu.expected}
                        </span>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {certifications.length > 0 && (
            <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 sm:p-8">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url ?? "#"}
                    target={cert.url ? "_blank" : undefined}
                    rel={cert.url ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{cert.title}</div>
                      <div className="text-xs text-slate-400">{cert.issuer}</div>
                    </div>
                    {cert.url && <ExternalLink className="h-4 w-4 text-slate-400" />}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
