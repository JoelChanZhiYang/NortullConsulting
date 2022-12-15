import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { NortullLogo } from "../vectors/NortullLogo";

export const NavBar = () => {
  const router = useRouter();
  return (
    <header>
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 absolute top-0 inset-x-0 z-10">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <NortullLogo />
              <span className="ml-4 self-center text-lg font-semibold whitespace-nowrap">
                Nortull <br></br>Consulting
              </span>
            </Link>
            <ul className="hidden md:flex gap-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/our-story"}>Our story</Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="peer  relative z-10 flex items-center space-x-2  font-medium rounded-lg px-5 py-2.5 text-center"
            >
              <span>Login</span>
            </button>
            <button
              onClick={() => {
                router.push("/book");
              }}
              className="peer text-white relative z-10 flex items-center space-x-2 bg-blue-600 font-medium rounded-lg px-5 py-2.5 text-center"
            >
              <span>Get started</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
