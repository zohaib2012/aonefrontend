import Video from "../assets/images/Aonetrade.mp4";
import Logo from "../assets/images/A-One - Logo-02.svg";
export default function ResponsiveLayout() {
  const paragraphText = (
    <>
      Boost Your Trade
      <br /> upto a 10% Equity Reward!
    </>
  );

  const mobText = "Boost Your Trade upto a 10% Equity Reward!";
  const headingText = (
    <>
      The Worlds {""}
      <span className="text-6xl lg:text-7xl font-semibold ">
        Number One Broker
      </span>
      <span className="text-red-600 text-8xl">.</span>
    </>
  );
  const mobHeadingText = "The Worlds Number One Broker";
  return (
    <div className="pt-20 relative w-full overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40 z-10" />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Left Div - 65% */}
          <div className="lg:w-[60%] w-full flex flex-col items-center md:items-start gap-4 mb-8 lg:mb-0 text-white">
            <div className="h-40 lg:h-32">
              <img src={Logo} alt="Left" className="w-full h-full mb-4" />
            </div>

            {/* Paragraph for large screens */}
            <div className="flex flex-row w-full justify-between items-right gap-8 mt-4">
              <div className="bg-red-500 w-90"></div>
              <div className="m-0 sm:m-auto">
                <p className="hidden lg:block mb-2 w-full text-left font-medium">
                  {paragraphText}
                </p>

                {/* Paragraph for mobile/tablet screens */}
                <p className="block lg:hidden mb-2 w-full text-center font-medium">
                  {mobText}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[36rem] sm:text-center text-left">
              <p className="hidden lg:block text-4xl font-medium w-full left-center">
                {headingText}
              </p>

              <p className="block lg:hidden text-5xl font-medium w-full text-center">
                {mobHeadingText}
              </p>
            </div>
          </div>

          {/* Right Div - 35% */}
          <div className="lg:w-[40%] w-full flex flex-col gap-8 items-center justify-center text-white">
            <div className="h-60 lg:h-80">
              <img
                src="https://direct-website.azureedge.net/assets/img/svelte-home/hero/5-stars-banner-logos-inverted.svg"
                alt="Right"
                className="w-full h-full object-cover mb-4"
              />
            </div>
            <button className="px-8 py-3 text-lg font-medium bg-Blue text-white rounded-full hover:bg-blue-700 transition">
              Trade Like A Pro!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
