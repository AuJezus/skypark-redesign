"use client";

import tomas from "@/public/tomas.png";
import inga from "@/public/inga.png";
import aliona from "@/public/aliona.png";
import Testimonial from "./Testimonial";
import { useRef, useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const initTestimonials = [
  {
    name: "tomas zizys",
    rating: "11111",
    profilePic: tomas,
    comment:
      "Gera vieta vaikam daug veiklos ir gimtadinius galima svesti atskiros patalpos įrengtos tikrai verta apsilankyti ir vaikas bus labai patenkintas👍👍👐",
  },
  {
    name: "Inga Ruškuvienė",
    rating: "11111",
    profilePic: inga,
    comment:
      "Labai tinkama vaikams išsidūkti ir gimtadienio šventėms. Puikiai tinka ir suaugusiems - galima šokinėti ant batutų ar ant jų žaisti įvairius žaidimus",
  },
  {
    name: "Aliona Žibalė",
    rating: "11110",
    profilePic: aliona,
    comment: "Puiki vieta, daug pramogų, rekomenduojame.",
  },
];

function TestimonialSlide() {
  const [current, setCurrent] = useState(2);
  const [testimonials, setTestimonials] = useState(() => {
    return [
      initTestimonials.at(-2),
      initTestimonials.at(-1),
      ...initTestimonials,
      initTestimonials.at(0),
      initTestimonials.at(1),
    ];
  });
  const [isChanging, setIsChanging] = useState(false);

  const touchStart = useRef(null);

  function moveRight() {
    setIsChanging(false);
    setCurrent((c) => c + 1);
  }

  function moveLeft() {
    setIsChanging(false);
    setCurrent((c) => c - 1);
  }

  function checkIfInBounds() {
    // If at first clone
    if (current >= testimonials.length - 2) {
      setIsChanging(true);
      setCurrent(2);
    }

    // If at last clone
    if (current < 2) {
      setIsChanging(true);
      setCurrent(testimonials.length - 3);
    }
  }

  function getSwipeDirection(e) {
    const touchEnd = e.changedTouches[0].screenX;
    const touchDistance = touchEnd - touchStart.current;

    if (Math.abs(touchDistance) < 20) return;

    if (touchDistance > 0) moveLeft();

    if (touchDistance < 0) moveRight();
  }

  return (
    <>
      <div
        className={`absolute top-1/2 z-50 hidden w-full justify-between px-16 text-5xl md:flex xl:max-w-[1000px]`}
      >
        <BiLeftArrowAlt onClick={moveLeft} />
        <BiRightArrowAlt onClick={moveRight} />
      </div>
      <div
        className={`${isChanging ? "" : "transition-transform"} mb-6 flex w-3/4 sm:w-4/6 md:w-1/2 xl:w-1/3`}
        onTransitionEnd={checkIfInBounds}
        onTouchStart={(e) => (touchStart.current = e.changedTouches[0].screenX)}
        onTouchEnd={getSwipeDirection}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {testimonials.map((testimonial, i) => (
          <div
            className="flex-shrink-0 flex-grow-0 basis-full px-4 sm:px-6"
            key={testimonial.name + i}
          >
            <Testimonial
              isCurrent={testimonial === testimonials[current]}
              testimonial={testimonial}
              onMoveLeft={moveLeft}
              onMoveRight={moveRight}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default TestimonialSlide;
