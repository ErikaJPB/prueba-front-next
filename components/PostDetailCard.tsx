import React from "react";
import { Post, Comment } from "@/types";
import Link from "next/link";

interface PostDetailCardProps {
  post: Post;
  comments: Comment[];
}

const PostDetailCard: React.FC<PostDetailCardProps> = ({ post, comments }) => {
  return (
    <div className="border rounded-lg p-4 my-4 bg-white text-gray-700">
      <h1 className="text-2xl font-bold">Original Post</h1>
      <div className="mb-8 mt-8 py-2 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
        <p className="text-gray-600 mt-2 mb-2">{post.body}</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-2">Post Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li
              key={comment.id}
              className={`border p-4 rounded-lg mb-4 py-6 mt-8  ${
                index !== comments.length - 1 ? "mb-6" : ""
              }`}
            >
              <h4 className="text-lg font-semibold">{comment.name}</h4>
              <p className="text-gray-600 mt-2">{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end">
        <Link href="/" className="text-xl font-bold items-center justify-end">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PostDetailCard;
