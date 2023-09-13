import React from "react";
import { Comment } from "@/types";

interface PostDetailCardProps {
  comments: Comment[];
}

const PostDetailCard: React.FC<PostDetailCardProps> = ({ comments }) => {
  return (
    <div className="border rounded-lg p-4 my-4 bg-white text-gray-700">
      <h3 className="text-2xl font-bold mb-2">Post Comments</h3>
      <ul className="flex flex-col w-full h-full mb-2 mr-4">
        {comments.map((comment, index) => (
          <li
            key={comment.id}
            className={`border p-4 rounded-lg mb-4 py-4 mt-4  ${
              index !== comments.length - 1 ? "mb-6" : ""
            }`}
          >
            <h4 className="text-lg font-semibold">{comment.name}</h4>
            <p className="text-gray-600 mt-2">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetailCard;
