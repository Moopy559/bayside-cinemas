import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex flex-col h-full bg-slate-600 sticky">
      <ul>
        <li>
          <Image
            src="/img/bayside-cinema.avif"
            alt="Bayside Cinemas logo"
            width={150}
            height={50}
          />
        </li>
        <li>Home</li>
        <li>Coming Soon</li>
        <li>Gift Cards</li>
        <li>Premium Lounge</li>
        <li>Bayside Cinemas</li>
        <li>SEARCH ICON</li>
        <li>PROFILE ICON</li>
      </ul>
    </div>
  );
}
