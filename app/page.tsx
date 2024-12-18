"use client";

import { navItems } from "@/data";

import dynamic from "next/dynamic";

// Lazy load components
import Hero from "@/components/Hero";
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
import { FloatingNav } from "@/components/ui/FloatingNavbar";


const Home = () => {
  return (
    <main className="relative bg-[#010C0B] flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="w-full px-5 sm:px-10 justify-center bg-[#0B2320] dark:bg-grid-[#00F6BC]/[0.10] rounded-3xl">
          <Grid />
        </div>
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
