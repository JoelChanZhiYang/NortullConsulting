import { useRouter } from "next/router";
import { CenterColumn } from "../layout/CenterColumn";
import { NavBar } from "./NavBar";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Underline } from "../vectors/Underline";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className="h-screen max-h-[1080px] flex flex-col">
      <div className="flex-1 relative">
        <NavBar />

        <div className="h-full w-full inset-0 absolute flex items-center bg-gradient-to-b from-white to-blue-100">
          <CenterColumn>
            <div className="space-y-4 md:space-y-8">
              <h1 className="h2 text-center font-semibold text-gray-900">
                Building <i>tomorrow&apos;s </i> solutions{" "}
                <span className="text-blue-600 font-bold relative">
                  <span>today</span>
                  <Underline className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" />
                </span>
              </h1>
              <h2 className="h4 text-center text-gray-600">
                Future-proof your business with a custom tech solution
              </h2>
              <div className="flex justify-center">
                <div className="relative">
                  <button
                    onClick={() => {
                      router.push("/book");
                    }}
                    className="text-white peer relative z-10 flex items-center space-x-2 bg-blue-600 font-medium rounded-lg px-5 py-2.5 text-center"
                  >
                    <span>Find out more</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                  <div className="absolute -inset-3 rounded-lg peer-hover:bg-blue-200 blur-lg"></div>
                </div>
              </div>
            </div>
          </CenterColumn>
        </div>
      </div>
    </div>
  );
};
