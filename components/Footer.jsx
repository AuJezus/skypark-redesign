import { parks } from "@/app/page";
import CardTitle from "./CardTitle";
import { BiCurrentLocation, BiMailSend, BiPhone } from "react-icons/bi";

function Footer() {
  return (
    <div className="grid-cols-2 gap-8 bg-primary p-6 text-base md:grid md:flex-row md:px-12">
      {parks.map((park) => (
        <div key={park.name} className="hidden flex-col gap-4 md:flex">
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
      ))}
      <div className="flex flex-col gap-8 md:justify-between md:gap-0">
        <p>
          Skypark – puiki vieta ne tik mažiesiems aktyviai leisti laiką, bet ir
          ekstremalams nutrūktgalviams saugiai pasimokinti naujų triukų.
        </p>
        <p>Sukurta su meile AuJezus ❤️</p>
      </div>
    </div>
  );
}

export default Footer;
