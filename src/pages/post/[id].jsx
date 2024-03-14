// pages/post/[id].jsx
import React from 'react';
import { useRouter } from 'next/router';
import PostDetails from '../components/PostDetails';


const PostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <PostDetails post={post} />;
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://api.moibentech.ac.ke/blogs/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 60, // revalidate every 60 seconds
  };
};

export const getStaticPaths = async () => {
   
  const res = await fetch('https://api.moibentech.ac.ke/blogs');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
};

export default PostPage;