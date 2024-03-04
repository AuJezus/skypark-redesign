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

import bubbleImage1 from "@/public/bubble1.webp";
import parkImage1 from "@/public/parkas1.jpg";
import parkImage2 from "@/public/parkas2.jpg";
import parkImage3 from "@/public/parkas3.jpg";
import kambarys from "@/public/kambarys.jpg";
import contactUsImage from "@/public/contact-us.png";
import ContactForm from "@/components/ContactForm";

const parks = [
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
      <div className="relative mb-36 flex h-screen items-center px-3">
        <div>
          <Subheading>skypark</Subheading>
          <h1 className="mb-24 mt-2 font-nunito text-5xl font-bold capitalize">
            Didžiausias batutų centras visoje Europoje!
          </h1>
        </div>
        <div>
          <div className="absolute -left-16 top-14 z-10 aspect-square w-[180px] rounded-full bg-[#FFA231]"></div>
          <div className="absolute -right-12 top-16 z-10 aspect-square w-[100px] rounded-full bg-[#FF841F]"></div>
          <div className="absolute right-24 top-40 z-10 aspect-square w-[89px] rounded-full bg-[#FF9529]"></div>
          <div className="absolute bottom-56 left-4 z-10 aspect-square w-[93px] rounded-full bg-[#FF7d1B]"></div>
          <Image
            src={bubbleImage1}
            alt="Skypark vaikų nuotrauka"
            className="absolute -right-8 bottom-2 z-10 aspect-square w-[300px] rounded-full object-cover"
          ></Image>
          <div className="absolute -bottom-20 -left-20 z-10 aspect-square w-[180px] rounded-full bg-[#FF9e2f]"></div>
        </div>
      </div>

      {/* Parks section */}
      <div className="mb-28 px-3">
        <div className="mb-8">
          <Subheading>parkai</Subheading>
          <Heading2>Mus galite rasti</Heading2>
        </div>

        <div className="grid justify-center gap-10">
          {parks.map((park) => (
            <div
              key={park.name}
              className="flex w-[350px] flex-col overflow-hidden rounded-3xl border-[5px] border-primary"
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
      <div className="mb-28 px-3">
        <div className="mb-8">
          <Subheading>šventės</Subheading>
          <Heading2>Šventes šveskime kartu!</Heading2>
        </div>

        <div className="mb-6">
          <BackdropImage src={kambarys} />
        </div>

        <div className="flex flex-col items-start gap-6">
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
      <div className="mb-28">
        <div className="mb-8 px-3">
          <Subheading>šventės</Subheading>
          <Heading2>Šventes šveskime kartu!</Heading2>
        </div>

        <div className="flex justify-center overflow-x-hidden">
          <TestimonialSlide />
        </div>
      </div>

      {/* Contact us section */}
      <div className="mb-16 px-3">
        <div className="mb-8">
          <Subheading>kontaktai</Subheading>
          <Heading2>Susisiekite su mumis</Heading2>
        </div>

        <div className="mb-16">
          <ContactForm />
        </div>

        <BackdropImage src={contactUsImage} />
      </div>
    </div>
  );
}
