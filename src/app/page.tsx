import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import MetricStrip from "@/components/sections/MetricStrip";
import CodeShowcase from "@/components/sections/CodeShowcase";
import InsightsBand from "@/components/sections/InsightsBand";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import PageLoader from "@/components/effects/PageLoader";
import WaveDivider from "@/components/effects/WaveDivider";
import AmbientTheme from "@/components/effects/AmbientTheme";

export default function Home() {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <AmbientTheme />
      <Navbar />
      <main>
        <Hero />
        <MetricStrip />
        <WaveDivider variant={1} />
        <About />
        <WaveDivider variant={2} />
        <InsightsBand />
        <WaveDivider variant={3} />
        <Skills />
        <WaveDivider variant={1} />
        <CodeShowcase />
        <WaveDivider variant={2} />
        <Projects />
        <WaveDivider variant={3} />
        <Experience />
        <WaveDivider variant={1} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
