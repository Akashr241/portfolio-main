import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Search,
  Users,
  Trophy,
  FileBadge,
  Fingerprint,
  Puzzle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { hackathon } from "@/data/experience";
import image from "../data/image.png";

const skillIcons: Record<string, typeof ShieldCheck> = {
  Cybersecurity: ShieldCheck,
  "Problem Solving": Puzzle,
  CTF: Lock,
  "Digital Forensics": Fingerprint,
  "Team Collaboration": Users,
  "Technical Investigation": Search,
};

export function Hackathon() {
  return (
    <section id="hackathon" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          title="Hackathon Experience"
          subtitle="Practical exposure to cybersecurity challenges and CTF-style problem solving."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl p-6 sm:p-8">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 flex-shrink-0">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {hackathon.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 mt-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <Trophy className="h-3 w-3" />
                  Participant
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6">
              {hackathon.description}
            </p>

            <div className="mb-6">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Skills Demonstrated
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {hackathon.skills.map((skill) => {
                  const Icon = skillIcons[skill] || ShieldCheck;
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                    >
                      <Icon className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
<div className="flex items-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-3">
  <FileBadge className="h-5 w-5 text-slate-500" />
  <span className="text-sm text-slate-400">
    {hackathon.certificateLabel}
  </span>
</div>

{/* Certificate image, shown separately below the label row */}
<div className="mt-4 overflow-hidden rounded-xl border border-white/10">
  <img
    src={image}
    alt="Hackathon certificate"
    className="w-full h-auto object-cover"
  />
</div>
   
          </div>
        </motion.div>
      </div>
    </section>
  );
}
