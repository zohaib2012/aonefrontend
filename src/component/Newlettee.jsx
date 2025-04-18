import { Link } from "react-router-dom";

const Newlettee = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 py-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="px-6 py-6 rounded-lg  bg-Blue">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-8 px-6 ">
            {/* 70% Section for Heading */}
            <div className="lg:col-span-2 flex items-center">
              <h2 className=" text-5xl  font-semibold  text-white ">
                Trade Forex, Indices, Stocks and more with Aone - the world`s
                No. 1 broker
              </h2>
            </div>

            {/* 30% Section for Button */}
            <div className="lg:col-span-1 mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8 flex items-center">
              <div id="mc_embed_signup">
                <form className="sm:flex w-full">
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0 w-full">
                    <Link
                      className="w-full flex items-center justify-center px-12 py-3 text-base leading-6 font-medium rounded-full text-Blue bg-white focus:ring hover:bg-indigo-700 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out"
                      to="/register"
                    >
                      Trade like a Pro
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newlettee;
