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
import { ProblemSolving } from "@/sections/ProblemSolving";
import { Hackathon } from "@/sections/Hackathon";
import { Education } from "@/sections/Education";
import { GitHubSection } from "@/sections/GitHubSection";
import { ResumeCTA } from "@/sections/ResumeCTA";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

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
        <ProblemSolving />
        <Hackathon />
        <Education />
        <GitHubSection />
        <ResumeCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
