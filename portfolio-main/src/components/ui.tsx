import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  number,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-3 ${alignmentClass} mb-12`}
    >
      <span className="font-mono text-sm tracking-widest text-cyan-400/80 uppercase">
        {number}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function GlowCard({ children, className = "", onClick }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className={`relative group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 transition-colors hover:border-cyan-400/40 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.4)] ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/[0.04] group-hover:via-purple-500/[0.03] group-hover:to-cyan-500/[0.06] transition-all duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface StatusBadgeProps {
  status: "Completed" | "In Development";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isCompleted = status === "Completed";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        isCompleted
          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
          : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isCompleted ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
        }`}
      />
      {status}
    </span>
  );
}

interface TechBadgeProps {
  label: string;
}

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300">
      {label}
    </span>
  );
}
