"use client";

import React, { useEffect, useState } from "react";
import { getPosts } from "@/lib/actions/getPosts";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";
import Error from "@/components/Error";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await getPosts(currentPage);
        setPosts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(true);
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col w-full h-full mx-auto max-w-7xl mb-2 mt-4 items-center">
      <h1 className="text-4xl font-bold mb-4 mt-8">Posts</h1>

      {error ? (
        <Error />
      ) : loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {!loading && !error && (
        <Pagination
          totalPages={10}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Home;
