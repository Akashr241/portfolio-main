import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { SectionHeading } from "@/components/ui";
import { socials } from "@/data/profile";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  leetcode: SiLeetcode,
};

const CONTACT_EMAIL = "akashr.offical7@gmail.com";
const CONTACT_PHONE = "+91 9739625103";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="10"
          title="Let's Connect"
          subtitle="I'm open to Java Full Stack opportunities, internships, collaborations and interesting software engineering projects."
        />

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                Connect with me
              </h3>
              <div className="flex flex-col gap-3">
                {socials.map((social) => {
                  const Icon = socialIconMap[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-colors"
                    >
                      {Icon && (
                        <Icon className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                      )}
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">
                          {social.label}
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          {social.url}
                        </div>
                      </div>
                      <Send className="h-3.5 w-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  );
                })}

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-colors"
                >
                  <Mail className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      Email
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {CONTACT_EMAIL}
                    </div>
                  </div>
                  <Send className="h-3.5 w-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-colors"
                >
                  <Phone className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      Phone
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {CONTACT_PHONE}
                    </div>
                  </div>
                  <Send className="h-3.5 w-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-6"
          >
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              Send a message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                <p className="text-sm text-slate-300">
                  Thank you for your message. This demo form doesn't send emails
                  yet — please connect via the links on the left.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-400 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-400 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-400 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-cyan-400/30 transition-all hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
                <p className="text-xs text-slate-600 text-center">
                  This form is a demo. Please use the contact links to reach me
                  directly.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}