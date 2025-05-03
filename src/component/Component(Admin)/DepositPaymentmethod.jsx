
import { Check } from "lucide-react";
import { AiFillBank } from "react-icons/ai";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import USDT from "../../assets/images/usdt_orbital-dark.png";
import Localbank from "../../assets/images/local-bank-dark.png";
import EasyPaisa from "../../assets/images/Easypaisa-logo.png";
import Jazzcash from "../../assets/images/jazzcash-logo.jpeg";

const DepositPaymentmethod = () => {
  const navigate = useNavigate();
  // const [selectedMethod, setSelectedMethod] = useState("bank");

  const location = useLocation();

  const usdtActive = location.pathname === "/profile/wallet/deposit/usdt";
  const localbankActive = location.pathname === "/profile/wallet/deposit/localbank";
  const easypaisaActive = location.pathname === "/profile/wallet/deposit/easypaisa";
  const jazzcashActive = location.pathname === "/profile/wallet/deposit/jazzcash";
  const skrillActive = location.pathname === "/profile/wallet/deposit/skrill";
  // const ethriumActive = location.pathname === "/profile/wallet/deposit/etherium";
  // const creditcardActive = location.pathname === "/profile/wallet/deposit/creditcard";
  // const binanceActive = location.pathname === "/profile/wallet/deposit/binance";

  const handleback = () => {
    navigate(-1);
  };



  return (
    <div className="lg:min-h-screen p-4 text-white flex flex-col lg:flex-row items-center justify-center">
      <div className="w-full max-w-4xl border-2 border-gray-600 flex flex-col lg:flex-row overflow-hidden">
        {/* Deposit Methods Column (hidden on mobile, shown as tabbar) */}
        <div className="hidden lg:block w-1/3 border-r border-gray-600">
          <div className="p-2 border-b border-gray-600">
            <h2 className="text-xl font-bold">Deposit</h2>
          </div>

          <div className="divide-y divide-gray-600">
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${usdtActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/usdt")}
            >
              <img src={USDT} alt="aone" className="w-6 h-6 mr-3" />
              <span>USDT TRC20</span>
            </div>
            <div
            
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${localbankActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/localbank")}
            >
              <img src={Localbank} alt="aone" className="w-6 h-6 mr-3" />
              <span>Local Bank Transfer</span>

            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${skrillActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/skrill")}
            >
              <img src="https://avatars.mds.yandex.net/i?id=4b8079486bfabe6616d4d2a1f060d9887ce3d4b4-5239568-images-thumbs&n=13" alt="aone" className="w-6 h-6 mr-3" />
              <span>Skrill</span>

            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${easypaisaActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/easypaisa")}
            >
              <img src={EasyPaisa} alt="aone" className="w-6 h-6 mr-3" />
              <span>EasyPaisa</span>

            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${jazzcashActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/jazzcash")}
            >
              <img src={Jazzcash} alt="aone" className="w-6 h-6 mr-3" />
              <span>JazzCash</span>

            </div>

            {/* <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${creditcardActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/creditcard")}
            >
              <img src={Creditcard} alt="aone" className="w-6 h-6 mr-3" />
              <span>Credit/Debit Card</span>
            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${binanceActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/binance")}
            >
              <img src={Binance} alt="aone" className="w-6 h-6 mr-3" />
              <span>Crypto Payment</span>
            </div>
            <div
              className={`p-2 flex items-center cursor-pointer hover:bg-[#3C3C3C] ${ethriumActive ? "bg-gray-700 text-white" : ""
                }`}
              onClick={() => navigate("/profile/wallet/deposit/etherium")}
            >
              <img src={Ethrium} alt="aone" className="w-6 h-6 mr-3" />
              <span>Ethereum</span>
            </div> */}

          </div>
          <button
            onClick={handleback}
            className="bg-gray-700 hover:bg-gray-500 text-blue-400 px-4 py-2 mt-52 mx-1 rounded-lg transition"
          >
            Back
          </button>
        </div>

        {/* Deposit Instructions Column */}
        <div className="w-full lg:w-2/3 p-6">
          <div className="bg-green-600/20 text-green-400 p-3 rounded-lg mb-4 flex items-center">
            <Check className="mr-2" />
            <span>The connection is secured</span>
          </div>

          <main>
            <Outlet />
          </main>
        </div>
      </div>

      {/* Bottom Tab Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1E1E1E] border-t border-[#3C3C3C] flex justify-around py-2 text-xs">
        <button
          onClick={() => navigate("/profile/wallet/deposit/usdt")}
          className={`flex flex-col items-center
          
          `}
        >
           <img src={USDT} alt="aone" className="w-6 h-6 mb-1" />
          USDT TRC20
        </button>

        <button
          onClick={() => navigate("/profile/wallet/deposit/localbank")}
          className={`flex flex-col items-center 
           
          `}
        >
          <AiFillBank className="w-6 h-6 mb-1" />
          Bank
        </button>
        <button
          onClick={() => navigate("/profile/wallet/deposit/skrill")}
          className={`flex flex-col items-center 
           
          `}
        >
             <img src="http://avatars.mds.yandex.net/i?id=4b8079486bfabe6616d4d2a1f060d9887ce3d4b4-5239568-images-thumbs&n=13" alt="aone" className="w-6 h-6 mb-1" />
          Skrill
        </button>
        <button
          onClick={() => navigate("/profile/wallet/deposit/jazzcash")}
          className={`flex flex-col items-center 
          
          `}
        >
           <img src={Jazzcash} alt="aone" className="w-6 h-6 mb-1" />
         JazzCash
        </button>
        <button
          onClick={() => navigate("/profile/wallet/deposit/easypaisa")}
          className={`flex flex-col items-center 
        
          `}
        >
          <img src={EasyPaisa} alt="aone" className="w-6 h-6 mb-1" />
                Easypaisa
        </button>
      </div>
    </div>
  );
};

export default DepositPaymentmethod;