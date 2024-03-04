import React from 'react';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';

const HomePage = () => {
    return (
        <div className="flex flex-col flex-grow">

            <div>
                <ImageSlider />
            </div>
            {/* Home page content goes here */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-3xl font-bold mb-4" >Welcome to Bliss n Blooms Events</h1>
                <p className="text-lg">We are a premier event planning company dedicated to creating unforgettable experiences.</p>
                {/* Add more content as needed */}
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;