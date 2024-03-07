import React from 'react';
import Footer from '../Footer';
import Image from 'next/image';
import Header from '../Header';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen ml-80">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="max-w-5xl px-6 py-12">
          <h1 className="text-5xl font-serif text-gray-800 mb-8 text-center">About Us</h1>
          <div className="flex flex-col md:flex-row items-center justify-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/about/279A1860.jpg"
                alt="Bliss & Blooms"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Bliss & Blooms</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a premier event planning and design company based in Eldoret, Kenya. We specialize in weddings, corporate events, private parties, and more. Our team of experienced event planners and designers will work with you to create a truly unforgettable event that reflects your unique style and vision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are committed to providing our clients with the highest level of service and attention to detail. Whether you're planning an intimate gathering or a grand celebration, we'll ensure every detail is perfect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Contact us today to learn more about our services and let's start planning your next event together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
