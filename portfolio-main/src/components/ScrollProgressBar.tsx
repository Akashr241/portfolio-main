import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-[width] duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
