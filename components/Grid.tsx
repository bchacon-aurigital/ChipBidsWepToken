
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

import { useTranslation } from "react-i18next";

const Grid = () => {
  const { t } = useTranslation();

  const gridItems = [
    {
      id: 1,
      title: t("features.items.0.title"),
      description: t("features.items.0.description"),
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: t("features.items.1.title"),
      description: t("features.items.1.description"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 opacity-70 md:h-[350px] lg:h-[400px]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: t("features.items.2.title"),
      description: t("features.items.2.description"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: t("features.items.3.title"),
      description: t("features.items.3.description"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: " mx-auto  justify-items-center h-[200px] py-4",
      titleClassName: "justify-start",
      img: "/Bg3.avif",
    },
    {
      id: 5,
      title: t("features.items.4.title"),
      description: t("features.items.4.description"),
      className: "md:col-span-3 md:row-span-2 ",
      imgClassName: "absolute -right-10 bottom-0 md:w-3/5 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: t("features.items.5.title"),
      description: t("features.items.5.description"),
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center 2xl:text-sm",
      img: "",
      spareImg: "",
    },
  ];

  return (
    <>
      <h1 className="text-white text-5xl font-bold text-center mb-24">
        {t("features.title")} <span className="text-[#00F6BC]">{t("features.title2")}</span>
      </h1>
      <div className="w-full px-5 sm:px-10 justify-center bg-[#0B2320] dark:bg-grid-[#00F6BC]/[0.10] rounded-3xl mb-24">
        <section id="features">
          <BentoGrid className="w-full py-20 px-5 lg:px-10 cursor-default">
            {gridItems.map((item, i) => (
              <BentoGridItem
                id={item.id}
                key={i}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}
                spareImg={item.spareImg}
              />
            ))}
          </BentoGrid>
        </section>
      </div>
    </>
  );
};

export default Grid;
