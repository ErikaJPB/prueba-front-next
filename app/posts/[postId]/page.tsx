"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PostDetail from "@/components/PostDetail";
import { getPostDetails } from "@/lib/actions/getPostDetails";
import { Post, Comment } from "@/types";
import Error from "@/components/Error";

const PostPage = () => {
  const pathname = usePathname();
  const postId = Number(pathname.slice(pathname.lastIndexOf("/") + 1));

  const [postDetails, setPostDetails] = useState<{
    post: Post;
    comments: Comment[];
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!isNaN(postId)) {
      getPostDetails(postId)
        .then((data) => {
          setPostDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching post details:", error);
          setError(true);
          setLoading(false);
        });
    }
  }, [postId]);

  return (
    <div className="max-w-4xl mx-auto p-4 w-full h-full flex flex-col items-center">
      <h1 className="font-bold mb-8 mt-8 text-4xl">Post Details</h1>

      {error ? (
        <Error />
      ) : loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : postDetails ? (
        <PostDetail post={postDetails.post} comments={postDetails.comments} />
      ) : null}
    </div>
  );
};

export default PostPage;
