import Image from "next/image";

export default function SideNav() {
  return (
    <div className="h-full sticky p-6 uppercase">
      <ul className="flex flex-col gap-y-6">
        <li>
          <Image
            src="/img/bayside-cinema.avif"
            alt="Bayside Cinemas logo"
            width={150}
            height={50}
          />
        </li>
        <li className="flex gap-x-4">
          <div>ICON</div>
          <p>Home</p>
        </li>
        <li className="flex gap-x-4">
          <div>ICON</div>
          <p>Coming Soon</p>
        </li>
        <li className="flex gap-x-4">
          <div>ICON</div>
          <p>Gift Cards</p>
        </li>
        <li className="flex gap-x-4">
          <div>ICON</div>
          <p>Premium Lounge</p>
        </li>

        <li>SEARCH ICON</li>
        <li>PROFILE ICON</li>
      </ul>
    </div>
  );
}
