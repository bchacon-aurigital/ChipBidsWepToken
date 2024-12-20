import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
  return (
    <section className="w-full py-20 bg-[#010C0B] px-10 lg:px-0 cursor-default" id="Roadmap">
      <h1 className="text-white text-5xl font-bold text-center mb-24">
      <span className="text-[#00F6BC]">Roadmap</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full ">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
          bgImage="/Roadmap/RoadmapBG1.avif"
        />
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
          bgImage="/Roadmap/RoadmapBG2.avif"
        />
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
          bgImage="/Roadmap/RoadmapBG1.avif"
        />
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  des,
  bgImage,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
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
      {/* Imagen de fondo */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/canvas-card:opacity-20 transition-opacity duration-300 rounded-3xl"
      />

      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30 z-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30 z-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30 z-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30 z-30" />

      <div className="relative z-20 px-10 flex flex-col items-center justify-center w-full">
        <motion.div

          animate={hovered ? {
            y: -20,
            scale: 0.8
          } : {
            y: 80,
            scale: 1.3
          }}

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
          <h2 className="text-white text-3xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-sm" style={{ color: "#E4ECFF" }}>
            {des}
          </p>
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

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;