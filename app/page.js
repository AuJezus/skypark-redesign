import Subheading from "@/components/Subheading";
import Image from "next/image";
import {
  BiCurrentLocation,
  BiMailSend,
  BiPhone,
  BiRightArrowAlt,
} from "react-icons/bi";
import Heading2 from "@/components/Heading";
import Button from "@/components/Button";
import BackdropImage from "@/components/BackdropImage";
import TestimonialSlide from "@/components/TestimonialSlide";
import CardTitle from "@/components/CardTitle";

import parkImage1 from "@/public/parkas1.jpg";
import parkImage2 from "@/public/parkas2.jpg";
import parkImage3 from "@/public/parkas3.jpg";
import kambarys from "@/public/kambarys.jpg";
import contactUsImage from "@/public/contact-us.png";
import ContactForm from "@/components/ContactForm";
import Bubbles from "@/components/Bubbles";

export const parks = [
  {
    name: "skypark vilnius outlet",
    address: "Vytauto Pociūno g. 8, 3 aukštas",
    email: "voutlet@skypark.lt",
    phone: "8 615 27999",
    image: parkImage1,
  },
  {
    name: "skypark ogmios miestas",
    address: "Verkių g. 29B, Ogmios miestas",
    email: "vilnius@skypark.lt",
    phone: "8 613 97001",
    image: parkImage2,
  },
  {
    name: "skypark klaipėda",
    address: "Taikos pr. 141, BIG 2, Klaipėda",
    email: "klaipeda@skypark.lt",
    phone: "8 686 81172 ",
    image: parkImage3,
  },
];

export default function Home() {
  return (
    <div className="">
      {/* Hero section */}
      <div className="relative mb-36 flex h-screen items-center overflow-x-clip px-3 md:mb-64 xl:mb-28">
        <div className="mb-24 md:mb-0 md:ml-8 md:mt-12 md:w-2/3 xl:ml-16 xl:w-1/3">
          <Subheading>skypark</Subheading>
          <h1 className="mt-2 font-nunito text-5xl font-bold capitalize xl:text-6xl">
            Didžiausias batutų centras visoje Europoje!
          </h1>
        </div>
        <Bubbles />
      </div>

      {/* Parks section */}
      <div
        id="parks-section"
        className="mb-28 px-3 md:px-12 lg:mx-auto lg:max-w-4xl lg:px-0 xl:max-w-[1200px]"
      >
        <div className="mb-8">
          <Subheading>parkai</Subheading>
          <Heading2>Mus galite rasti</Heading2>
        </div>

        <div className="grid justify-center justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
          {parks.map((park, i) => (
            <div
              key={park.name}
              className={`${i === parks.length - 1 ? "md:col-span-2 xl:col-span-1" : ""} flex max-w-[350px] flex-col overflow-hidden rounded-3xl border-[5px] border-primary`}
            >
              <Image
                className="h-[250px] w-full object-cover"
                src={park.image}
                alt={park.name}
              />
              <div className="my-6 flex flex-col gap-6 px-3">
                <CardTitle>{park.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <BiCurrentLocation />
                  <p>{park.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BiMailSend />
                  <p>{park.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <BiPhone />
                  <p>{park.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events section */}
      <div
        id="events-section"
        className="mb-28 px-3 md:px-12 lg:mx-auto lg:max-w-4xl lg:px-0 xl:grid xl:max-w-[1200px] xl:grid-cols-2 xl:grid-rows-[auto_1fr]"
      >
        <div className="mb-8">
          <Subheading>šventės</Subheading>
          <Heading2>Šventes šveskime kartu!</Heading2>
        </div>

        <div className="mb-6 md:w-5/6 xl:row-span-2 xl:mb-0 xl:h-[500px] xl:w-full">
          <BackdropImage src={kambarys} />
        </div>

        <div className="flex flex-col items-start gap-6 md:w-5/6">
          <p>
            Šiaurės miestelyje įsikūrusiame Skypark Jūsų laukia trylika
            skirtingų temų šventinių kambarių. Skypark’e kiekvienas suras sau
            tinkamą šventės vietą, nuo pačių mažiausių iki suaugusių.
          </p>
          <p>
            Prekybos centre Vilnius Outlet (Pilaitėje) įsikūrusiame Skypark Jūsų
            laukia net šešiolika šventinių kambarių. Skypark’e kiekvienas suras
            sau tinkamą šventės vietą, nuo pačių mažiausių iki suaugusių.
          </p>
          <Button>
            <Subheading>Daugiau</Subheading>
            <BiRightArrowAlt />
          </Button>
        </div>
      </div>

      {/* Testimonial section */}
      <div
        id="testimonials-section"
        className="mb-28 xl:mx-auto xl:max-w-[1200px]"
      >
        <div className="mb-8 px-3 md:px-12 lg:mx-auto lg:max-w-4xl lg:px-0">
          <Subheading>ATSILIEPIMAI</Subheading>
          <Heading2>Ką kiti sako apie mus</Heading2>
        </div>

        <div className="relative flex justify-center overflow-x-hidden">
          <TestimonialSlide />
        </div>
      </div>

      {/* Contact us section */}
      <div
        id="contact-us-section"
        className="mb-16 px-3 md:px-12 lg:mx-auto lg:max-w-4xl lg:px-0 xl:max-w-[1200px]"
      >
        <div className="mb-8">
          <Subheading>kontaktai</Subheading>
          <Heading2>Susisiekite su mumis</Heading2>
        </div>

        <div className="items-center xl:flex">
          <div className="mb-16 xl:mb-0 xl:w-full">
            <ContactForm />
          </div>

          <div className="w-full xl:h-[600px]">
            <BackdropImage src={contactUsImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
