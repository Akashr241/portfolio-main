import { lazy, Suspense } from "react";
import { GridBackground } from "@/components/GridBackground";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Navbar } from "@/components/Navbar";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/sections/Hero";
import { QuickHighlights } from "@/sections/QuickHighlights";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Achievements } from "@/sections/Achievements";
import { Education } from "@/sections/Education";
import { ResumeCTA } from "@/sections/ResumeCTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

const ProblemSolving = lazy(() =>
  import("@/sections/ProblemSolving").then((module) => ({
    default: module.ProblemSolving,
  })),
);
const Hackathon = lazy(() =>
  import("@/sections/Hackathon").then((module) => ({
    default: module.Hackathon,
  })),
);
const GitHubSection = lazy(() =>
  import("@/sections/GitHubSection").then((module) => ({
    default: module.GitHubSection,
  })),
);

function SectionFallback() {
  return (
    <div
      role="status"
      className="py-20 text-center text-sm text-slate-500"
    >
      Loading section…
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-cyan-500/30 selection:text-white">
      <GridBackground />
      <ScrollProgressBar />
      <Navbar />
      <BackToTop />

      <main>
        <Hero />
        <QuickHighlights />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Suspense fallback={<SectionFallback />}>
          <ProblemSolving />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Hackathon />
        </Suspense>
        <Education />
        <Suspense fallback={<SectionFallback />}>
          <GitHubSection />
        </Suspense>
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
