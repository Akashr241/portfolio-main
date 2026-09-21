import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Calendar, FolderGit2 } from "lucide-react";
import { SectionHeading, TechBadge } from "@/components/ui";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          title="Professional Experience"
          subtitle="Real-world development experience from internship to deployed applications."
        />

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl p-6 sm:p-8 hover:border-cyan-400/30 transition-colors group">
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400 flex-shrink-0">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-cyan-400 font-medium text-sm sm:text-base mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 self-start">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {exp.internshipProjects && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FolderGit2 className="h-4 w-4 text-slate-500" />
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Internship Projects
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.internshipProjects.map((project) => (
                        <span
                          key={project}
                          className="inline-flex items-center rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-300"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {exp.certificateLabel}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
