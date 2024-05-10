import Image from "next/image";

interface MovieProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function Movie({ image, title, subtitle }: MovieProps) {
  return (
    <>
      <div>
        {/* <Image src={image} alt="title" width={1200} height={0} /> */}
        <div
          className="bg-no-repeat bg-cover h-[600px] flex justify-end flex-col rounded-md overflow-hidden"
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
      </div>
    </>
  );
}
