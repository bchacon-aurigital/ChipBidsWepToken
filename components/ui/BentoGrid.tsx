import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// También instala esto: npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Events", "Crypto", "Sports"];
  const rightLists = ["E-Sports", "Politics", "Gaming"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition-all duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-gradient-to-br from-[#031714] to-[#0B231F] ",
        className
      )}
    >
      {/* Imagen principal */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#03201B] to-transparent z-10 pointer-events-none"></div>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center lg:z-50")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-1/3 h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className=" z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-xl text-center md:text-4xl lg:text-2xl"></div>
          </BackgroundGradientAnimation>
        )}

        {/* Contenido principal */}
        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 space-y-2"
          )}
        >
          {/* Título */}
          <div className="hover:translate-x-2 transition-all duration-500 z-40">
          <div
            className={cn(
              "font-sans max-w-96 font-bold text-white",
              id === 6 ? "text-sm md:text-base" : "text-lg lg:text-3xl" // Título más pequeño solo en card 6
            )}
          >
            {title}
          </div>

          {/* Descripción - ahora debajo del título */}

          <div className={cn("font-sans font-normal md:max-w-32 lg:max-w-full md:text-md lg:text-xl text-[#C1C2D3] z-20 mt-2",
            id === 5 || id === 3 ? "lg:max-w-60" : "lg:max-w-full")}>
            {description}
          </div></div>

          {/* GridGlobe */}
          {id === 2 && <GridGlobe />}

          {/* Tech Stack */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute -right-3 lg:-right-5 -z-0">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-6 lg:px-8 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#1F3834]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-6 lg:px-8 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#1F3834]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Copiar email */}
          {id === 6 && (
            <div className=" relative z-20">
              <div className="absolute right-0 ">
              </div>
              <button
                onClick={handleCopy}
                className="relative inline-flex items-center justify-center h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none"
              >
                {/* Magic border animation */}
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00D8FF_0%,#1F3834_50%,#094037_100%)]" />

                {/* Button content */}
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#07211C] px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                  <IoCopyOutline />
                  {copied ? "Email is Copied!" : "Copy my email address"}
                </span>
              </button>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};
