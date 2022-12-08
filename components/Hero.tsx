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
        className="h-full w-full object-cover"
      />

      <div></div>
    </div>
  );
};

export default Hero;
