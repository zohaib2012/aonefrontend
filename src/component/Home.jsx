import TradingFeatures from "./TradingFeatures";
import AccountTypes from "./Accounttypes";
import TradingPlatforms from "./TradingPlatforms";
import MobileTradingApp from "./MobileTradingApp";
import TradingPlatformHero from "./TradingPlatformHero";
import SharesTradingInterface from "./SharesTradingInterface";
import FxProStatsInterface from "./FxProStatsInterfac";

import Dashboard from "./Component(Admin)/Dashboard";
import Newlettee from "./Newlettee";
import Faq from "./Faq";
import TradePro from "./TradePro";

const Home = () => {
  return (
    <div>
      <TradingPlatformHero />
      <TradingFeatures />
      <Newlettee />
      <AccountTypes />
      <TradingPlatforms />
      <FxProStatsInterface />
      <Faq />
      <TradePro />
      {/* <Dashboard/> */}
    </div>
  );
};

export default Home;
