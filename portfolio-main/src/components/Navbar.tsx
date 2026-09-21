import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { navLinks, socials } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-lg font-bold text-white tracking-tight hover:text-cyan-400 transition-colors"
            >
              Akash<span className="text-cyan-400"> R</span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-cyan-500/10 border border-cyan-400/20"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {social.icon === "github" && <Github className="h-5 w-5" />}
                  {social.icon === "linkedin" && (
                    <Linkedin className="h-5 w-5" />
                  )}
                  {social.icon === "leetcode" && (
                    <SiLeetcode className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-slate-950/95 backdrop-blur-xl border-l border-white/10 lg:hidden"
          >
            <div className="flex flex-col p-6 pt-24 gap-2 h-full">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 px-4 pt-6 mt-auto border-t border-white/10">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {social.icon === "github" && <Github className="h-5 w-5" />}
                    {social.icon === "linkedin" && (
                      <Linkedin className="h-5 w-5" />
                    )}
                    {social.icon === "leetcode" && (
                      <SiLeetcode className="h-5 w-5" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
