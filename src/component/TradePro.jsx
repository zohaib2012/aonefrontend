import { Link } from "react-router-dom";

const TradePro = () => {
  return (
    <>
      <div className=" container mx-auto flex items-center justify-center my-32 bg-white px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-Blue mb-6">
            Trade Like A Pro!
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 px-4">
            Trade CFDs on a wide range of instruments, including popular Aone
            pairs, Futures, Indices, Metals, Energy, Shares and ETFs and
            experience the global markets at your fingertips.
          </p>
          <Link to={"/register"}>
            <button
              className="
          bg-Blue text-white 
          px-8 py-3 
          rounded-full 
          text-base 
          font-semibold 
          hover:bg-HoverColor 
          transition-colors 
          duration-300 
          focus:outline-none 
          focus:ring-2 
          focus:ring-HoverColor 
          focus:ring-offset-2
          "
            >
              Register with the Pros
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TradePro;
