import React from "react";
import CandleRangeSection from "./About";
import BestsellersGrid from "./BestSeller";
import OurStory from "./Story";
import LimitedEditions from "./LimitedEdition";
import CustomerReviews from "./Review";


const Home = () => {
  return (
    <div>
      <CandleRangeSection />
      <BestsellersGrid />
      <OurStory />
      <LimitedEditions />
      <CustomerReviews />
    </div>
  );
};

export default Home;
