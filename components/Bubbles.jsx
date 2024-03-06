import bubbleImage1 from "@/public/bubble1.webp";
import bubbleImage2 from "@/public/bubble2.jpg";
import bubbleImage3 from "@/public/bubble3.jpg";
import Image from "next/image";

function Bubbles() {
  return (
    <div>
      <div className="absolute -left-16 top-14 z-10 aspect-square w-[180px] rounded-full bg-[#FFA231]"></div>
      <div className="absolute -right-12 top-16 z-10 aspect-square w-[100px] rounded-full bg-[#FF841F] md:left-[30%] md:right-0 md:top-48"></div>
      <div className="absolute right-0 top-72 z-10 hidden aspect-square w-[160px] translate-x-1/2 rounded-full bg-[#FF841F] md:block"></div>
      <div className="absolute right-24 top-40 z-10 aspect-square w-[89px] rounded-full bg-[#FF9529] md:bottom-32 md:right-[47%] md:top-auto"></div>
      <div className="absolute bottom-56 left-4 z-10 aspect-square w-[93px] rounded-full bg-[#FF7d1B] md:-bottom-48 md:left-auto md:w-[120px]"></div>
      <Image
        src={bubbleImage1}
        alt="Skypark vaikų nuotrauka"
        className="absolute -right-8 bottom-2 z-10 aspect-square w-[300px] rounded-full object-cover md:-bottom-56 md:right-[40%]"
      ></Image>
      <Image
        src={bubbleImage2}
        alt="Skypark vaikų nuotrauka"
        className="absolute right-[8%] top-16 z-10 hidden aspect-square w-[287px] rounded-full object-cover md:block"
      ></Image>
      <Image
        src={bubbleImage3}
        alt="Skypark vaikų nuotrauka"
        className="absolute bottom-10 right-[4%] z-10 hidden aspect-square w-[266px] rounded-full object-cover md:block"
      ></Image>
      <div className="absolute -bottom-12 -left-20 z-10 aspect-square w-[180px] rounded-full bg-[#FF9e2f] md:-bottom-0"></div>
    </div>
  );
}

export default Bubbles;
