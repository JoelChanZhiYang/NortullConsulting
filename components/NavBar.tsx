import Link from "next/link";
import { NortullLogo } from "./NortullLogo";

export const NavBar = () => {
  return (
    <nav className="px-4 sm:px-4 py-6 rounded absolute top-0 inset-x-0 z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <NortullLogo />
          <span className="ml-4 self-center text-xl font-semibold whitespace-nowrap">
            Nortull <br></br>Consulting
          </span>
        </Link>
        <div>
          <ul className="">
            <li>hi</li>
            <li>hi</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
