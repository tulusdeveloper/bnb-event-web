// components/PostDetails.jsx
import React from 'react';
import Image from 'next/image';
import Footer from '../Footer';
import Navbar from '../Navbar';


const PostDetails = ({ post }) => {
  return (
    <div className="flex flex-col min-h-screen ml-80 dark:text-white dark:bg-gray-900">
      <Navbar/>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <Image
          src={post.pictureUrl}
          alt={post.title}
          width={800}
          height={600}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;