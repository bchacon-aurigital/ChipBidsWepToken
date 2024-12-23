import { BsTwitterX, BsTelegram } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full pt-20 pb-10 px-5">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 bg-center opacity-45 pointer-events-none"
        style={{
          backgroundImage: "url('/footer-grid.svg')",
        }}
      />

      <div className="flex flex-col items-center z-10 relative">

        <h1 className="heading lg:max-w-[50vw]">
          {t("footer.title")} <span className="text-[#00F6BC]"> {t("footer.title2")} </span> {t("footer.title3")}
        </h1>

        <p className="text-white-200 md:mt-10 my-5 text-center w-2/3 lg:w-1/3">
          {t("footer.description")}
        </p>

        <a
          href="#launch"
          className="relative inline-flex items-center justify-center overflow-hidden rounded-lg p-[1px] group z-10"
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
              {t("footer.buyToken")}
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </span>
          </span>
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center z-10 relative">
        <p className="md:text-base text-sm md:font-normal font-light">
          {t("footer.copyright")}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {/* Botón de Twitter */}
          <a
            href="https://x.com/chipsbids?s=11&t=3NGgd0Po9RlxgNjhuZNXwA"
            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 z-10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.social.twitter")}
          >
            <BsTwitterX className="w-5 h-5 text-white" />
          </a>

          {/* Botón de Telegram */}
          <a
            href="https://t.me/ChipBids"
            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 z-10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.social.telegram")}
          >
            <BsTelegram className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
      <div className="lg:hidden"></div>
    </footer>
  );
};

export default Footer;
