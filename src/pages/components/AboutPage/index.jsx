import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen ml-80">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-4xl px-6">
          <h1 className="text-4xl font-serif text-gray-800 mb-6">About Bliss & Blooms Events</h1>
          <div className="w-16 h-1 bg-pink-500 mb-4"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Bliss & Blooms we committed to providing our clients with the highest level of service and attention to detail. We believe that every event should be a celebration, we are dedicated to making your event the best it can be. Bliss & Blooms was founded in 2022 by Allan Rop and Nicole Rop, a family which shared a passion for events and design. They started the company with the goal of creating beautiful and memorable events that would reflect our clients unique style and vision. In the years since, Bliss & Blooms has grown to become one of the leading event planning and design companies in Eldoret. They have planned and executed events of all sizes, from intimate weddings to large corporate events. They are known for their attention to detail, their creativity, and their commitment to making their clients events unforgettable. Bliss & Blooms is a company that is constantly growing and evolving. They are committed to providing their clients with the best possible experience, and they are always looking for new ways to create beautiful and memorable events.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Vision & Mission</h2>
          <div className="w-16 h-1 bg-pink-500 mb-4"></div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The vision of Bliss & Blooms is to be the leading event planning and design company in Kenya. They aspire to create beautiful and memorable events that reflect their clients unique style and vision. They also aim to provide their clients with the highest level of service and attention to detail.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The mission of Bliss & Blooms is to create beautiful and memorable events that reflect their clients unique style and vision. They believe that every event should be a celebration, and they are dedicated to making their clients events the best they can be. We are committed to providing their clients with the best possible experience, and they are always looking for new ways to make their events even more special.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
