const url = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts(page = 1, limit = 10) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const allPosts = await response.json();

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const posts = allPosts.slice(startIndex, endIndex);

    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
