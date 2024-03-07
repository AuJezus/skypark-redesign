import Image from "next/image";

function BackdropImage({ src }) {
  return (
    <div className="h-full -translate-x-2">
      <Image
        className="h-full w-full scale-[95%] rounded-3xl object-cover"
        src={src}
        alt="Švenčių kambarys"
      />
      <div className="absolute bottom-3 left-3 -z-10 h-full w-full scale-95 rounded-3xl bg-primary opacity-70"></div>
    </div>
  );
}

export default BackdropImage;
