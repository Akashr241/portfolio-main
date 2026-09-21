export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px]" />
    </div>
  );
}
