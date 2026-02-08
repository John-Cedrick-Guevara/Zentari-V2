import { main } from "motion/react-client";
import Image from "next/image";
import Nav from "./Components/Layout/Nav";
import Hero from "./Components/LandingPage/Hero";
import Problem from "./Components/LandingPage/Problem";
import Solution from "./Components/LandingPage/Solution";
import WhoWeHelp from "./Components/LandingPage/WhoWeHelp";
import Process from "./Components/LandingPage/Process";
import WhyUs from "./Components/LandingPage/WhyUs";
import FeaturedWork from "./Components/LandingPage/FeaturedWork";
import CTA from "./Components/LandingPage/CTA";
import Footer from "./Components/Layout/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Process />
      <WhoWeHelp />
      <WhyUs />
      <FeaturedWork />
      <CTA />
      <Footer />
    </main>
  );
}
