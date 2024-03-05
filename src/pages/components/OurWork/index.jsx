import React from 'react';
import Footer from '../Footer';
import Header from '../Header';


const OurWork = () => {
return (
  <div className="flex flex-col min-h-screen ml-80">
    <div className="flex-grow">
     <Header/>
      {/* Home page content goes here */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-4">Our Work</h1>
        <p className="text-lg">Check out our previous work.</p>
        {/* Add more content as needed */}
      </div>
    </div>
    <Footer />
  </div>
);
};

export default OurWork;