import Image from "next/image";

interface MovieProps {
  image: string;
  title: string;
  subtitle?: string;
  largeFormat: boolean;
}

export default function Movie({
  image,
  title,
  subtitle,
  largeFormat,
}: MovieProps) {
  return (
    <>
      {largeFormat ? (
        // LARGE FORMAT
        <div
          className="bg-no-repeat bg-cover h-[600px] flex justify-end flex-col rounded-md overflow-hidden drop-shadow-sm"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="bg-gradient-to-t from-black to-transparent p-12">
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <a href="" className="text-hotRed">
              Book Now
            </a>
          </div>
        </div>
      ) : (
        // SMALL FORMAT
        <div>
          <Image
            src={image}
            alt={title}
            className="rounded-md"
            width={300}
            height={300}
          />
          <h3 className="mt-4">{title}</h3>
        </div>
      )}
    </>
  );
}
