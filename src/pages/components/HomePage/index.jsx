import React from 'react';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow w-full">
        <div>
          <ImageSlider />
        </div>
        {/* Home page content goes here */}
        <div className="w-full">
          <h1>Welcome to Bliss n Blooms Events</h1>
          <p>We are a premier event planning company dedicated to creating unforgettable experiences.</p>
          {/* Add more content as needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;