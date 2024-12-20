import { Instagram, Twitter, Github, Linkedin, MessageCircle } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-10 bg-center opacity-45"
        style={{
          backgroundImage: "url('/footer-grid.svg')",
        }}
      />

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw]">
          Shape <span className="text-[#00F6BC]">the Future </span>of Predictions
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center w-2/3 lg:w-1/3">
          Join the next-gen prediction market platform where transparency meets opportunity. Get early access to premium features and governance rights with CHIP tokens.
        </p>

        <a
          href="#launch"
          className="relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[1px] group"
        >
          {/* Animated border */}
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-[#00D8FF] to-[#094037]" />

          {/* Button content */}
          <span className="relative flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00D8FF] to-[#094037] text-white font-semibold w-full">
            {/* Shine effect */}
            <span
              className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[100%] transition-transform duration-1000"
            />

            {/* Text content */}
            <span className="relative z-10 flex items-center">
              Buy Token
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </span>
          </span>
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright ©2024 ChipBids
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <Twitter className="w-5 h-5 text-white" />
          </div>
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
