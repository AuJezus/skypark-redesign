import Image from "next/image";

function BackdropImage({ src }) {
  return (
    <div className="-translate-x-2">
      <Image
        className="scale-[95%] rounded-3xl"
        src={src}
        alt="Švenčių kambarys"
      />
      <div className="absolute bottom-3 left-3 -z-10 h-full w-full scale-95 rounded-3xl bg-primary opacity-70"></div>
    </div>
  );
}

export default BackdropImage;
