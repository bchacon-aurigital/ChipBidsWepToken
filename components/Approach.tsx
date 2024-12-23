"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Phase {
  period: string;
  title: string;
  items: string[];
}

const Approach = () => {
  const { t } = useTranslation();

  const phases = t("roadmap.phases", { returnObjects: true }) as Phase[];

  return (
    <section className="w-full py-20 bg-[#010C0B] px-10 lg:px-0 cursor-default" id="Roadmap">
      <h1 className="text-white text-5xl font-bold text-center mb-24">
        <span className="text-[#00F6BC]">{t("roadmap.title")}</span>
      </h1>
      <div className="my-20 flex flex-wrap lg:flex-nowrap items-center justify-center w-full gap-6">
        {phases.map((phase, index) => (
          <Card
            key={index}
            title={`${phase.period} - ${phase.title}`}
            icon={<AceternityIcon order={`Phase ${index + 1}`} />}
            des={phase.items.slice(0, 4).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            bgImage={`/Roadmap/RoadmapBG${(index % 2) + 1}.avif`}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  des,
  bgImage,
}: {
  title: string;
  icon: React.ReactNode;
  des: React.ReactNode;
  bgImage: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
   dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[35rem] rounded-3xl bg-[#030F0E] mt-6"
    >
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/canvas-card:opacity-20 transition-opacity duration-300 rounded-3xl"
      />
      <div className="relative z-20 px-10 flex flex-col items-center justify-center w-full">
        <motion.div
          animate={
            hovered
              ? { y: -20, scale: 0.8 }
              : { y: 80, scale: 1.3 }
          }
          transition={{ duration: 0.3 }}
          className="text-center min-w-40 w-full"
        >
          {icon}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.3 }}
          className="text-center w-full"
        >
          <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
          <ul className="text-sm list-disc text-[#E4ECFF] pl-5">{des}</ul>
        </motion.div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-lg bg-[#071D19] bg-opacity-85 px-5 py-2">
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
          justify-center rounded-full text-sky-400 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export default Approach;
