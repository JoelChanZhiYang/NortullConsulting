const Hero = () => {
  return (
    <div id="hero" className="h-screen max-h-[1080px] min-h-[750px] ">
      <video
        preload="auto"
        src="/images/grid.mp4"
        autoPlay
        muted
        loop
        typeof="video/mp4"
        className="h-full w-full object-cover fixed inset-0"
      />
      <div className="h-full w-full inset-0 fixed">
        <div className="px-12">
          <h1 className="h1 text-white py-12 text-center font-semibold">
            Simple and Effective IT Solutions for your business
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
