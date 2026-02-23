import { PresentationProgressProvider } from "@/lib/PresentationProgressContext";
import Nav from "@/components/Nav";
import LaserPointerOverlay from "@/components/LaserPointerOverlay";
import Imprint from "@/components/Imprint";
import PresentationContainer from "@/components/PresentationContainer";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Evolution from "@/components/Evolution";
import Demo from "@/components/Demo";
import MagicSlide from "@/components/MagicSlide";
import Process from "@/components/Process";
import Impact from "@/components/Impact";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <PresentationProgressProvider>
      <Nav />
      <PresentationContainer>
        <Hero />
        <Problem />
        <Evolution />
        <Demo />
        <MagicSlide />
        <Process />
        <Impact />
        <Comparison />
        <Contact />
      </PresentationContainer>
      <LaserPointerOverlay />
      <Imprint />
    </PresentationProgressProvider>
  );
}
