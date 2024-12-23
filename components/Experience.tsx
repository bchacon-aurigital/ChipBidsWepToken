"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const { t } = useTranslation();

  const workExperience = [
    {
      id: 1,
      title: t("utility.items.0"),
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/TokenUtily/CardIcon.svg",
    },
    {
      id: 2,
      title: t("utility.items.1"),
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/TokenUtily/CardIcon.svg",
    },
    {
      id: 3,
      title: t("utility.items.2"),
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/TokenUtily/CardIcon.svg",
    },
    {
      id: 4,
      title: t("utility.items.3"),
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/TokenUtily/CardIcon.svg",
    },
    {
      id: 5,
      title: t("utility.items.4"),
      desc: "",
      className: "md:col-span-2",
      thumbnail: "/TokenUtily/CardIcon.svg",
    },
  ];

  return (
    <div className="py-20 px-5 sm:px-10 w-full flex flex-col items-center bg-[#0B2320] cursor-default">
      {/* Título centrado */}
      <h1 className="text-white text-5xl font-bold text-center mb-24">
        {t("utility.title")} <span className="text-[#00F6BC]">{t("utility.title2")}</span>
      </h1>

      {/* Contenedor de dos columnas con flex */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center mx-auto">
        {/* Columna izquierda para la imagen */}
        <div className="w-full lg:w-[45%] flex justify-center mb-8 lg:mb-0">
          <img
            src="/TokenUtily/Logo.svg"
            alt="Left Illustration"
            className="w-2/3 lg:w-full object-contain"
          />
        </div>

        {/* Columna derecha para los cards */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {workExperience.map((card) => (
            card.id % 2 === 0 ? (
              <div
                key={card.id}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 relative overflow-hidden rounded-[1.75rem] bg-[#010C0B] transition-all duration-1000 ease-in-out hover:before:opacity-100 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#010C0B] before:via-[#010C0B] before:to-[#0A7269] before:opacity-0 before:transition-opacity before:duration-1000"
              >
                <div className="flex lg:flex-row items-center p-3 py-4 md:py-6 md:px-5 lg:py-8 lg:px-10 gap-2 w-full mx-7 relative">
                  <div className="flex items-center justify-center w-24 h-24 flex-shrink-0">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="lg:ms-5">
                    <h1 className="text-start text-lg md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-2 text-sm font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "#051714",
                  borderRadius: "calc(1.75rem * 0.96)",
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-default	"
              >
                <div className="flex lg:flex-row items-center p-3 py-4 md:py-6 md:px-5 lg:py-8 lg:px-10 gap-2 w-full mx-7">
                  <div className="flex items-center justify-center w-24 h-24 flex-shrink-0">
                    <img
                      src={card.thumbnail}
                      alt={card.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="lg:ms-5">
                    <h1 className="text-start text-lg md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-2 text-sm font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
