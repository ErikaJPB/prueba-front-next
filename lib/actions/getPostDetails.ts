import { Comment, Post } from "@/types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPostDetails(
  postId: number
): Promise<{ post: Post; comments: Comment[] }> {
  try {
    const postResponse = await fetch(`${BASE_URL}/posts/${postId}`);
    if (!postResponse.ok) {
      throw new Error(`HTTP error! Status: ${postResponse.status}`);
    }
    const post: Post = await postResponse.json();

    const commentsResponse = await fetch(
      `${BASE_URL}/posts/${postId}/comments`
    );
    if (!commentsResponse.ok) {
      throw new Error(`HTTP error! Status: ${commentsResponse.status}`);
    }
    const comments: Comment[] = await commentsResponse.json();

    return { post, comments };
  } catch (error) {
    console.error("Error fetching post details:", error);
    throw error;
  }
}
