import React from 'react';
import Footer from '../Footer';
import Header from '../Header';


const AboutPage = () => {
return (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
     <Header />
      {/* Home page content goes here */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-4">About Bliss n Blooms Events</h1>
        <p className="text-lg">Insert information about your company here.</p>
        {/* Add more content as needed */}
      </div>
    </div>
    <Footer />
  </div>
);
};

export default AboutPage;