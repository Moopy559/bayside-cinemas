import Image from "next/image";
import Film from "./svg/Film";
import Gift from "./svg/Gift";
import Star from "./svg/Star";
import Calendar from "./svg/Calendar";

export default function SideNav() {
  return (
    <div className="h-full sticky p-6 uppercase text-secondary font-medium">
      <ul className="flex flex-col gap-y-6">
        <li>
          <Image
            src="/img/bayside-cinema.avif"
            alt="Bayside Cinemas logo"
            width={150}
            height={50}
          />
        </li>
        <li className="flex gap-x-4 items-center">
          <Film width={25} />
          <p>Home</p>
        </li>
        <li className="flex gap-x-4 items-center">
          <Calendar width={25} />
          <p>Coming Soon</p>
        </li>
        <li className="flex gap-x-4 items-center">
          <Gift width={25} />
          <p>Gift Cards</p>
        </li>
        <li className="flex gap-x-4 items-center">
          <Star width={25} />
          <p>Premium Lounge</p>
        </li>
      </ul>
    </div>
  );
}
