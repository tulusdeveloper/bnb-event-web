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
                We are committed to providing our clients with the highest level of service and attention to detail. Whether youre planning an intimate gathering or a grand celebration, well ensure every detail is perfect.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Contact us today to learn more about our services and lets start planning your next event together.
              </p>
            </div>
          </div>
       
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-16 py-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision & Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>Vision:</strong> The vision of Bliss & Blooms is to be the leading event planning and design company in Kenya. They aspire to create beautiful and memorable events that reflect their clients unique style and vision. They also aim to provide their clients with the highest level of service and attention to detail.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                <strong>Mission:</strong> The mission of Bliss & Blooms is to create beautiful and memorable events that reflect their clients unique style and vision. They believe that every event should be a celebration, and they are dedicated to making their clients events the best they can be. We are committed to providing their clients with the best possible experience, and they are always looking for new ways to make their events even more special.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We have over 10 years of experience in the event planning industry, and our team of passionate event planners and designers is dedicated to exceeding your expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We offer a wide range of event services to meet your needs, ensuring your event reflects your unique style and vision.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Bliss & Blooms! We cant wait to start planning your dream event.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
