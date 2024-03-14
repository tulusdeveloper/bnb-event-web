import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";

const ServiceCard = ({ blog }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxCharacters = 150; // Set the maximum number of characters to display initially

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription =
    blog.body.length > maxCharacters
      ? `${blog.body.slice(0, maxCharacters)}...`
      : blog.body;

  return (
    <div className="bg-gray-200 dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
      <Image
        src={blog.pictureUrl}
        alt={blog.title}
        width={800}
        height={600}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2 text-pink-600 dark:text-pink-400">
        {blog.title}
      </h3>
      <p className="text-md text-center px-4 text-gray-600 dark:text-gray-300">
        {showFullDescription ? blog.body : truncatedDescription}
        {blog.body.length > maxCharacters && (
          <Link href={`/post/${blog.id}`}>
            <button className="text-pink-600 dark:text-pink-400 font-bold ml-2">
              {showFullDescription ? "Hide" : "Read More"}
            </button>
          </Link>
        )}
      </p>
    </div>
  );
};

const OurWork = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.moibentech.ac.ke/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ml-80 dark:text-white dark:bg-gray-900">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center py-16">
        <h1 className="text-4xl font-serif text-gray-800 dark:text-white mb-6">
          Our Work
        </h1>
        <div className="w-16 h-1 bg-pink-500 dark:bg-pink-400 mb-4"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl text-center leading-relaxed">
          At Bliss & Blooms, we curate exceptional events that leave a lasting
          impression. From intimate gatherings to grand celebrations, our team
          of dedicated professionals brings your vision to life with meticulous
          attention to detail and a touch of elegance. Indulge in unforgettable
          experiences tailored to your unique style and preferences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {blogs.map((blog, index) => (
            <ServiceCard key={index} blog={blog} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurWork;
