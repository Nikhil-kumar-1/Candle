import React from "react";
import CandleRangeSection from "./CandleRangeSection";
import BestsellersGrid from "./BestSeller";
import OurStory from "./Story";
import LimitedEditions from "./LimitedEdition";
import CustomerReviews from "./Review";
import HeroSection from "./Hero";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <CandleRangeSection />
      <BestsellersGrid />
      <OurStory />
      <LimitedEditions />
      <CustomerReviews />
    </div>
  );
};

export default Home;
