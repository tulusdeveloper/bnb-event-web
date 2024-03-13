// components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    confirmEmail: "",
    date: "",
    phone: "",
    eventType: "",
    noOfGuests: "",
    venue: "",
    addressLine1: "",
    city: "",
    eventDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add your code to handle form submission
    // e.g., send the data to a server or an email service
    console.log(formData);
    // Reset the form after submission
    setFormData({
      first: "",
      last: "",
      email: "",
      confirmEmail: "",
      date: "",
      phone: "",
      eventType: "",
      noOfGuests: "",
      venue: "",
      addressLine1: "",
      city: "",
      eventDetails: "",
    });
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="first" className="block font-bold mb-2 text-gray-800 dark:text-white">
              First
            </label>
            <input
              type="text"
              id="first"
              name="first"
              value={formData.first}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
              required
            />
          </div>
          <div>
            <label htmlFor="last" className="block font-bold mb-2">
              Last
            </label>
            <input
              type="text"
              id="last"
              name="last"
              value={formData.last}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmEmail" className="block font-bold mb-2">
              Confirm Email
            </label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
            required
          />
        </div>
      

        <div className="mb-4">
          <label htmlFor="phone" className="block font-bold mb-2">
            Phone
          </label>
          <div className="flex">
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border border-gray-300 rounded-l-md py-2 px-3 text-gray-800 dark:text-gray-800"
              style={{ maxWidth: "120px" }}
            >
                <option value="+254">+254 (Kenya)</option>
              <option value="+1">+1 (United States)</option>
              <option value="+44">+44 (United Kingdom)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+49">+49 (Germany)</option>
              {/* Add more options as needed */}
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-r-md py-2 px-3 text-gray-800 dark:text-gray-800"
              required
            />
          </div>
        </div>  


        
        <div className="mb-4">
          <label htmlFor="eventType" className="block font-bold mb-2">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
            required
          >
            <option value="">Select Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate</option>
            <option value="private">Private</option>
            {/* Add more event types as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="noOfGuests" className="block font-bold mb-2">
            No. Of Guests
          </label>
          <input
            type="number"
            id="noOfGuests"
            name="noOfGuests"
            value={formData.noOfGuests}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="venue" className="block font-bold mb-2">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="addressLine1" className="block font-bold mb-2">
            Address Line 1
          </label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="city" className="block font-bold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block font-bold mb-2">
              State / Province / Region
            </label>
            <input
              type="text"
              id="state"
              name="state"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="eventDetails" className="block font-bold mb-2">
            Tell Us More About Your Event
          </label>
          <textarea
            id="eventDetails"
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 dark:text-gray-800"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div className="ml-8 dark:text-white">
        <h2 className="text-xl font-bold mb-4">GET IN TOUCH</h2>
        <p className="mb-2">Email: blissnbloomsevents@gmail.com</p>
        <p className="mb-2">Phone: +254 710 391 049</p>
        <p className="mb-2">Website: www.blissnbloomsevents.co.ke</p>
      </div>
      <br />
    </div>
  );
};

export default ContactForm;
