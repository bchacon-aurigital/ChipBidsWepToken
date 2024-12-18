"use client";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [isTextFinished, setIsTextFinished] = useState(false);

  useEffect(() => {
    // Inicializa AOS
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true, // Solo animar una vez
    });
  }, []);

  return (
    <div className="pt-[8%] min-h-screen ">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="absolute -top-[25vh] left-0 h-[80vh] w-[10vw] blur-[40px] opacity-0 animate-fade-in"
          fill="white"
        />
        <Spotlight
          className="absolute top-10 left-0 h-[45vh] w-[10vw] blur-[40px] opacity-0 animate-fade-in"
          fill="white"
        />
        {/* Spotlights Derecha */}
        <Spotlight
          className="absolute -top-[25vh] right-0 h-[80vh] w-[10vw] blur-[40px] opacity-0 animate-fade-in scale-x-[-1] translate-x-[50%]"
          fill="white"
        />
        <Spotlight
          className="absolute bottom-10 right-0 h-[45vh] w-[10vw] blur-[40px] opacity-0 animate-fade-in scale-x-[-1] translate-x-[50%]"
          fill="white"
        />
      </div>

      {/* UI: grid */}
      <div className="h-screen w-full dark:bg-[#010c0b] bg-white dark:bg-grid-[#00F6BC]/[0.10] bg-grid-[#0c2320] absolute top-0 left-0 flex items-center justify-center">
        {/* Left Image */}
        <img
          src="/hero/logoL.png"
          alt="Left decorative"
          className="absolute left-20 h-[80vh] hidden lg:block"
        />
        {/* Right Image */}
        <img
          src="/hero/logoR.png"
          alt="Right decorative"
          className="absolute right-20 h-[80vh] hidden lg:block"
        />
        {/* Radial gradient */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#010c0b] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center">
          {/* Hero Icon */}
       <img
              src="/hero/HeroIcon.svg"
              alt="HeroIcon ChipBids"
            />
          {/* Text Animation */}
          <TextGenerateEffect
            words={"The Future of \n Prediction Markets"}
            className="text-center text-[40px] md:text-5xl lg:text-7xl tracking-tight"
            onComplete={() => setIsTextFinished(true)} // Marca que terminó
          />

          {/* Subtítulo */}
          {isTextFinished && (
            <p
              className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Trade, predict, and earn on the most innovative decentralized prediction
              platform powered by Solana
            </p>
          )}

          {/* Botones */}
          {isTextFinished && (
            <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="600">
              <a
                href="#launch"
                className="flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00D8FF] to-[#094037] text-white font-semibold shadow-md hover:opacity-90 transition duration-300"
              >
                Launch App <ArrowUpRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#whitepaper"
                className="flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#1F3834] to-[#051B17] text-white font-semibold shadow-md hover:opacity-90 transition duration-300"
              >
                Download Whitepaper <ArrowUpRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
