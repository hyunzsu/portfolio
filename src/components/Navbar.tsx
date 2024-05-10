import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header className="flex justify-between p-8">
        <Link href="/" className="flex items-center text-36 font-semibold">
          H.
        </Link>
        <nav className="flex items-center gap-2 text-22 font-regular">
          <button className="hover:font-bold">About,</button>
          <button className="hover:font-bold">Projects,</button>
          <button className="hover:font-bold">Contact</button>
        </nav>
      </header>
    </div>
  );
}
