"use client";
import dynamic from "next/dynamic";

const navItems = [
  { name: "Features", link: "#features" },
  { name: "Tokenomics", link: "#Tokenomics" },
  { name: "Roadmap", link: "#Roadmap" },
  { name: "Team", link: "#Team" },
];
// Lazy load components
import Hero from "@/components/Hero";
import LanguageSwitcher from "@/components/LanguageSwitcher";
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Token = dynamic(() => import("@/components/Token"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
{/*const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });*/ }
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
{/*const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });*/ }
import { FloatingNav } from "@/components/ui/FloatingNavbar";


const Home = () => {
  return (
    <main className="relative bg-[#010C0B] flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <LanguageSwitcher />
        <Hero />
          <Grid />
        <Token/>
        {/*<RecentProjects />*/}
        {/*<Clients />*/}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
