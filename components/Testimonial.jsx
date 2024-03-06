import Image from "next/image";
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiSolidQuoteAltLeft,
  BiSolidStar,
  BiStar,
} from "react-icons/bi";
import CardTitle from "./CardTitle";
import uniqid from "uniqid";

function Testimonial({
  testimonial,
  isCurrent = false,
  onMoveLeft,
  onMoveRight,
}) {
  return (
    <div
      className={`${isCurrent ? "scale-110" : " opacity-60 md:opacity-30"} flex h-full flex-col transition-all`}
    >
      <Image
        className="relative z-20 mx-auto w-20 translate-y-1/2 rounded-full"
        src={testimonial.profilePic}
        alt={testimonial.name}
      />

      <div className="relative flex h-full flex-col items-center gap-2 rounded-3xl bg-primary/20 p-3 pt-12 md:p-8 md:py-16">
        <div
          className={`${isCurrent ? "" : "hidden"} absolute top-0 flex w-full justify-between p-3 text-2xl md:hidden`}
        >
          <BiLeftArrowAlt onClick={onMoveLeft} />
          <BiRightArrowAlt onClick={onMoveRight} />
        </div>

        <CardTitle>{testimonial.name}</CardTitle>

        <div className="flex items-center text-primary">
          {testimonial.rating.split("").map((isFull) => (
            <div key={uniqid()}>
              {/*Can't use testimonial name as key, because I make clones in end and start. */}
              {isFull === "0" && <BiStar />}
              {isFull === "1" && <BiSolidStar />}
            </div>
          ))}
        </div>

        <BiSolidQuoteAltLeft className="mb-2 text-4xl text-secondary" />

        <p className="text-center">{testimonial.comment}</p>
      </div>
    </div>
  );
}

export default Testimonial;
