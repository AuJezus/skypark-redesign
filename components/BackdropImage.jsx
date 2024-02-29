import Image from "next/image";

function BackdropImage({ src }) {
  return (
    <div className="relative -translate-x-2">
      <Image
        className="scale-[95%] rounded-3xl"
        src={src}
        alt="Švenčių kambarys"
      />
      <div className="bg-primary absolute bottom-3 left-3 -z-10 h-full w-full scale-95 rounded-3xl opacity-70"></div>
    </div>
  );
}

export default BackdropImage;
