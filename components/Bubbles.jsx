import bubbleImage1 from "@/public/bubble1.webp";
import bubbleImage2 from "@/public/bubble2.jpg";
import bubbleImage3 from "@/public/bubble3.jpg";
import Image from "next/image";

function Bubbles() {
  return (
    <div>
      <div className="absolute -left-16 top-14 z-10 aspect-square w-[180px] rounded-full bg-[#FFA231] xl:left-0 xl:-translate-x-1/2"></div>
      <div className="absolute -right-12 top-16 z-10 aspect-square w-[100px] rounded-full bg-[#FF841F] md:left-[30%] md:right-0 md:top-48 xl:left-[15%]"></div>
      <div className="absolute right-0 top-72 z-10 hidden aspect-square w-[160px] translate-x-1/2 rounded-full bg-[#FF841F] md:block xl:left-[25%] xl:top-[8%]"></div>
      <div className="absolute right-24 top-40 z-10 aspect-square w-[89px] rounded-full bg-[#FF9529] md:bottom-32 md:right-[47%] md:top-auto xl:right-[45%] xl:top-[50%]"></div>
      <div className="absolute bottom-56 left-4 z-10 aspect-square w-[93px] rounded-full bg-[#FF7d1B] md:-bottom-48 md:left-auto md:w-[120px] xl:bottom-[5%] xl:left-[25%] xl:w-[130px]"></div>
      <Image
        src={bubbleImage1}
        alt="Skypark vaikų nuotrauka"
        className="absolute -right-8 bottom-2 z-10 aspect-square w-[300px] rounded-full object-cover md:-bottom-56 md:right-[40%] xl:-right-24 xl:top-1/3 xl:w-[360px]"
      ></Image>
      <Image
        src={bubbleImage2}
        alt="Skypark vaikų nuotrauka"
        className="absolute right-[8%] top-16 z-10 hidden aspect-square w-[287px] rounded-full object-cover md:block xl:right-[30%] xl:top-[10%] xl:w-[330px]"
      ></Image>
      <Image
        src={bubbleImage3}
        alt="Skypark vaikų nuotrauka"
        className="absolute bottom-10 right-[4%] z-10 hidden aspect-square w-[266px] rounded-full object-cover md:block xl:right-[20%] xl:w-[300px]"
      ></Image>
      <div className="absolute -bottom-12 -left-20 z-10 aspect-square w-[180px] rounded-full bg-[#FF9e2f] md:-bottom-0 xl:-left-8"></div>
      <div className="absolute -right-12 top-[6%] z-10 hidden aspect-square w-[180px] rounded-full bg-[#FF9e2f] xl:block"></div>
      <div className="absolute bottom-[15%] left-[45%] hidden aspect-square w-[130px] rounded-full bg-[#ff9529] xl:block"></div>
      <div className="absolute right-[15%] top-[15%] hidden aspect-square w-[130px] rounded-full bg-[#ff831f] xl:block"></div>
      <div className="absolute bottom-[8%] right-[8%] hidden aspect-square w-[130px] rounded-full bg-[#FFA231] xl:block"></div>
      <div className="absolute right-[18%] top-[40%] hidden aspect-square w-[100px] rounded-full bg-[#FF841F] xl:block"></div>
    </div>
  );
}

export default Bubbles;
