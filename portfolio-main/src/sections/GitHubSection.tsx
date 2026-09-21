import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch, Star, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { socials } from "@/data/profile";
import { projects } from "@/data/projects";

const githubUrl = socials.find((s) => s.icon === "github")?.url || "";

const featuredRepos = projects
  .filter((p) => p.github)
  .map((p) => ({
    name: p.github!.split("/").pop() || "repository",
    url: p.github!,
    description: p.title.split("—")[0].trim(),
    tech: p.tech.slice(0, 3),
  }));

export function GitHubSection() {
  return (
    <section id="github" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          title="GitHub & Open Source"
          subtitle="My GitHub contains my full-stack applications, backend development work, frontend projects and continuous learning projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6 group hover:border-cyan-400/30 transition-colors h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-white">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">GitHub Profile</div>
                    <div className="font-semibold text-white">@Akashr241</div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Full-stack applications, backend development work, frontend
                  projects and continuous learning.
                </p>

                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <GitBranch className="h-4 w-4" />
                      Repositories
                    </span>
                    <span className="text-slate-400 text-xs italic">
                      View on GitHub
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Star className="h-4 w-4" />
                      Stars
                    </span>
                    <span className="text-slate-400 text-xs italic">
                      View on GitHub
                    </span>
                  </div>
                </div>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 px-4 py-2.5 text-sm font-semibold text-white hover:from-slate-600 hover:to-slate-700 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Visit GitHub
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Code2 className="h-4 w-4 text-cyan-400" />
                Featured Repositories
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {featuredRepos.map((repo, i) => (
                  <motion.a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="group rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm p-4 hover:border-cyan-400/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                        <span className="text-sm font-semibold text-white truncate">
                          {repo.name}
                        </span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-xs text-slate-400 mb-2 line-clamp-2">
                      {repo.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {repo.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-4 text-center">
                <p className="text-xs text-slate-500">
                  Contribution graph loads dynamically from GitHub when connected
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
