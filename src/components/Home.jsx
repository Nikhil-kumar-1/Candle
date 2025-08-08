import React from 'react'
import Navbar from './Navbar'
import CandleRangeSection from './About'
import BestsellersGrid from './BestSeller'
import OurStory from './Story'
import LimitedEditions from './LimitedEdition'
import CustomerReviews from './Review'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <CandleRangeSection/>
      <BestsellersGrid />
      <OurStory />
      <LimitedEditions />
      <CustomerReviews />
      <Footer />
     
    </div>
  )
}

export default Home
