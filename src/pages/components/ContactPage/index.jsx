// components/ContactPage.jsx
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ContactForm from '../ContactForm';
import GoogleMapIframe from '../GoogleMapIframe';

const ContactPage = () => {
  const location = { lat: 37.7749, lng: -122.4194 }; // Replace with your desired location

  return (
    <div className="flex flex-col min-h-screen ml-80 dark:text-white dark:bg-gray-900">
      <div className="flex-grow">
        <Header />
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-pink-500 mb-4"></div>
          <p className="text-lg mb-8">
            Have a question or need assistance? Fill out the form below, and we will get back to you as soon as possible.
          </p>
          <ContactForm />
          <br />
          
          <br />
        </div>
        <GoogleMapIframe/>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;