
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";


const gridItems = [
  {
    id: 1,
    title: "Secure & Transparent",
    description: "Built on Solana blockchain with advanced security measures and fully transparent operations.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Community Governance",
    description: "Shape the future of ChipBids through decentralized governance and active participation.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 opacity-70 md:h-[350px] lg:h-[400px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Multiple Markets",
    description: "Trade on sports, politics, crypto, and global events with real-time data and accurate oracles.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Instant Settlements",
    description: "Experience lightning-fast settlements powered by Solana's high-performance blockchain.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: " mx-auto  justify-items-center h-[200px] py-4",
    titleClassName: "justify-start",
    img: "/Bg3.avif",
  },

  {
    id: 5,
    title: "Advanced Analytics",
    description: "Access powerful analytics tools and insights to make informed predictions.",
    className: "md:col-span-3 md:row-span-2 ",
    imgClassName: "absolute -right-10 bottom-0 md:w-3/5	w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Industry-leading 0.3% transaction fees, maximizing your profits while ensuring platform sustainability.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center 2xl:text-sm",
    img: "",
    spareImg: "",
  },
];



const Grid = () => {
  return (
    <section id="features">
      <BentoGrid className="w-full py-20 px-5 lg:px-10 cursor-default">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
