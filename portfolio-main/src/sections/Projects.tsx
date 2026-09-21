import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
  X,
  CheckCircle2,
  Lightbulb,
  Wrench,
  Layers,
  Code2,
  Trophy,
  AlertCircle,
  Workflow,
  AlertTriangle,
} from "lucide-react";
import { SectionHeading, StatusBadge, TechBadge } from "@/components/ui";
import { projects, projectFilters, backendEngineering } from "@/data/projects";
import type { Project } from "@/data/projects";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          title="Projects"
          subtitle="Full-stack applications, internship projects and AI development work."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeFilter === filter
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200 border border-white/10 hover:border-white/20"
              }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer relative rounded-2xl border bg-slate-900/50 backdrop-blur-xl p-6 transition-colors hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)] ${
                  project.featured
                    ? "border-cyan-400/30 hover:border-cyan-400/50"
                    : "border-white/10 hover:border-cyan-400/30"
                }`}
              >
                {project.featured && (
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                )}

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex flex-col gap-2">
                    <span
                      className={`inline-flex items-center self-start rounded-full px-2.5 py-1 text-xs font-semibold ${
                        project.badge === "Featured Project"
                          ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                          : project.badge === "In Development"
                          ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                          : "bg-blue-500/15 text-blue-300 border border-blue-500/30"
                      }`}
                    >
                      {project.badge}
                    </span>
                    <StatusBadge status={project.status} />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 mb-3 font-medium">
                  {project.category}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 5).map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                  {project.tech.length > 5 && (
                    <span className="inline-flex items-center text-xs text-slate-500 px-2 py-1">
                      +{project.tech.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <span className="text-sm text-cyan-400 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/15 to-red-500/15 text-orange-400">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {backendEngineering.title}
                </h3>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  {backendEngineering.label}
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4">
              {backendEngineering.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {backendEngineering.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 border-b border-white/10 bg-slate-900/95 backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                      project.badge === "Featured Project"
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                        : project.badge === "In Development"
                        ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                        : "bg-blue-500/15 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {project.badge}
                  </span>
                  <StatusBadge status={project.status} />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white pr-8">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500">{project.category}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors flex-shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 flex flex-col gap-6">
              <ModalSection icon={<Lightbulb className="h-4 w-4" />} title="Overview">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </ModalSection>

              {project.problem && (
                <ModalSection
                  icon={<AlertCircle className="h-4 w-4" />}
                  title="Problem"
                >
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </ModalSection>
              )}

              {project.solution && (
                <ModalSection
                  icon={<CheckCircle2 className="h-4 w-4" />}
                  title="Solution"
                >
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </ModalSection>
              )}

              <ModalSection icon={<Layers className="h-4 w-4" />} title="Features">
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
              </ModalSection>

              {project.architecture && (
                <ModalSection
                  icon={<Wrench className="h-4 w-4" />}
                  title="Architecture"
                >
                  <div className="grid sm:grid-cols-2 gap-2">
                    {project.architecture.map((arch) => (
                      <div
                        key={arch.label}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                      >
                        <span className="text-xs text-slate-500 font-medium">
                          {arch.label}
                        </span>
                        <span className="text-sm text-slate-200 font-medium">
                          {arch.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </ModalSection>
              )}

              {project.workflow && (
                <ModalSection
                  icon={<Workflow className="h-4 w-4" />}
                  title="Workflow"
                >
                  <div className="flex flex-col gap-1">
                    {project.workflow.map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-500/10 text-xs font-bold text-cyan-400 flex-shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-sm text-slate-300">{step}</span>
                        {i < project.workflow!.length - 1 && (
                          <div className="h-4 w-px bg-white/10 ml-3.5" />
                        )}
                      </div>
                    ))}
                  </div>
                </ModalSection>
              )}

              <ModalSection icon={<Code2 className="h-4 w-4" />} title="Tech Stack">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </ModalSection>

              <ModalSection
                icon={<AlertTriangle className="h-4 w-4" />}
                title="Challenges"
              >
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.challenges ||
                    "Detailed implementation challenges can be added later."}
                </p>
              </ModalSection>

              <ModalSection icon={<Trophy className="h-4 w-4" />} title="What I Learned">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.whatILearned ||
                    "Detailed learning outcomes can be added later."}
                </p>
              </ModalSection>

              {project.disclaimer && (
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-200/80 leading-relaxed">
                      {project.disclaimer}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalSection({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-cyan-400">{icon}</span>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
}
