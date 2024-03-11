// components/ContactPage.jsx
import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ContactForm from '../ContactForm';

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen ml-80">
      <div className="flex-grow">
        <Header />
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-8">
            Have a question or need assistance? Fill out the form below, and we will get back to you as soon as possible.
          </p>
          <ContactForm />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;