"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PostDetailCard from "@/components/PostDetailCard";
import { getPostDetails } from "@/lib/actions/getPostDetails";
import { Post, Comment } from "@/types";

const PostPage = () => {
  const pathname = usePathname();
  const postId = Number(pathname.slice(pathname.lastIndexOf("/") + 1));
  const [postDetails, setPostDetails] = useState<{
    post: Post;
    comments: Comment[];
  } | null>(null);

  useEffect(() => {
    if (!isNaN(postId)) {
      getPostDetails(postId)
        .then((data) => {
          setPostDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching post details:", error);
        });
    }
  }, [postId]);

  return (
    <div className="max-w-4xl mx-auto p-4 w-full h-full flex flex-col items-center">
      <h1 className="font-bold mb-8 mt-8 text-4xl">Post Details</h1>
      {postDetails ? (
        <PostDetailCard
          post={postDetails.post}
          comments={postDetails.comments}
        />
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default PostPage;
