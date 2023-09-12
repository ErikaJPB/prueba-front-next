import React from "react";
import { Post, Comment } from "@/types";
import Link from "next/link";
import PostDetailCard from "@/components/PostDetailCard";

interface PostDetailProps {
  post: Post;
  comments: Comment[];
}

const PostDetail: React.FC<PostDetailProps> = ({ post, comments }) => {
  return (
    <div>
      <div className="border rounded-lg p-4 my-4 bg-white text-gray-700">
        <h1 className="text-2xl font-bold">Original Post</h1>
        <div className="mb-8 mt-8 py-2 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
          <p className="text-gray-600 mt-2 mb-2">{post.body}</p>
        </div>
      </div>

      <PostDetailCard comments={comments} />

      <div className="flex justify-end">
        <Link href="/" className="text-xl font-bold items-center justify-end">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
