import React from "react";
import Link from "next/link";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <div className="mt-4 mb-4 shadow-2xl rounded-lg overflow-hidden cursor-pointer py-2 px-2">
          <div className="block bg-white rounded-lg overflow-hidden">
            <div className="px-8 py-8 bg-white ">
              <h2 className="text-xl font-semibold text-black">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
