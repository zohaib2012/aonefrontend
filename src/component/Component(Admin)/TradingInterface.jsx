import { Link } from "react-router-dom";

const TradingInterface = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#23282B]">
      <div className="bg-[#2C3235] rounded-lg shadow-lg w-full max-w-md p-6 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Trade on the #590479693</h2>
          <button className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <label className="text-sm text-gray-400 mb-1 block">Server</label>
            <div className="flex">
              <input
                type="text"
                value="Aone mt5"
                readOnly
                className="bg-gray-700 border border-gray-600 rounded px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="ml-2 bg-gray-700 p-2 rounded hover:bg-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="text-sm text-gray-400 mb-1 block">
              MT5 Login
            </label>
            <div className="flex">
              <input
                type="text"
                value="590479693"
                readOnly
                className="bg-gray-700 border border-gray-600 rounded px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="ml-2 bg-gray-700 p-2 rounded hover:bg-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-between text-sm my-4">
            <div className="text-gray-400">
              Your password was sent to:
              <div className="text-white">2k4326139@gmail.com</div>
            </div>
            <button className="text-blue-400 hover:text-blue-300">Reset</button>
          </div>

          <Link to={"https://aonemt5.tgsm.io/"}>
            <div className="w-full  my-3  h-12  bg-blue-700 hover:bg-blue-600  text-center p-1 rounded-md text-white">
              Aone Web Terminal
              <span className="text-xs block ">
                Trade right in your browser
              </span>
            </div>
          </Link>

          <div className="text-center mt-4">
            <div className="text-blue-400">MetaTrader5</div>
            <Link
              to={
                "https://drive.google.com/uc?export=download&id=1IKI4Pft7MdOds4rWm4gtk2_rCVP7150M"
              }
              download
            >
              <div className="text-sm text-blue-400">
                Download & install terminal for Android
              </div>
            </Link>
          </div>

          <div className="flex space-x-5">
            <Link
              to={
                "https://drive.google.com/uc?export=download&id=1IKI4Pft7MdOds4rWm4gtk2_rCVP7150M"
              }
              download
            >
              <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                MT5 for Windows
              </button>
            </Link>

            <Link to={"https://testflight.apple.com/join/MQcAGqK6"}>
              <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                MT5 for Mac
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingInterface;
