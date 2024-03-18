import React from "react";
import ImageSwiper from "../ImageSwiper";
import Footer from "../Footer";
import GoogleMapIframe from "../GoogleMapIframe";


const HomePage = () => {
  const images = [
    '/slides/279A1860.jpg',
    '/slides/B21A6289.jpg',
    '/slides/B21A6295.jpg',
    // Add more image URLs here
  ];
  
  return (
    <div className="flex flex-col min-h-screen ml-80">
      <div className="flex-grow">

        {/* Home page content goes here */}
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Bliss n Blooms Events
          </h1>
          <p className="text-lg">
            We are a premier event planning company dedicated to creating
            unforgettable experiences.
          </p><div className="image-swiper">
              <ImageSwiper images={images} />
            </div>
          {/* Add more content as needed */}
        </div>
      </div>

      

      <GoogleMapIframe />

      <br />
      <Footer />
    </div>
  );
};

export default HomePage;
