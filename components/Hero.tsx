import { useRouter } from "next/router";
import { CenterColumn } from "./layout/CenterColumn";
import { NavBar } from "./NavBar";

export const Hero = () => {
  const router = useRouter();
  return (
    <div
      id="hero"
      className="h-screen max-h-[1080px] min-h-[750px] flex flex-col"
    >
      <div className="flex-1 relative">
        <NavBar />

        <video
          preload="auto"
          src="/images/grid.mp4"
          autoPlay
          muted
          loop
          playsInline
          typeof="video/mp4"
          className="h-full w-full object-cover absolute inset-0"
        />
        <div className="h-full w-full inset-0 text-white absolute">
          <CenterColumn>
            <div className="px-12">
              <h1 className="h2 pt-44 pb-12 text-center font-semibold">
                Simple and Effective IT Solutions for your business
              </h1>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  router.push("/book");
                }}
                className="text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-md dark:shadow-orange-800/80 font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Book a consultation
              </button>
            </div>
          </CenterColumn>
        </div>
      </div>
    </div>
  );
};
