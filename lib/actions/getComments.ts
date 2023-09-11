const url = "https://jsonplaceholder.typicode.com/comments";

export async function getComments() {
  try {
    const response = await fetch(url);
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.log(error);
  }
}
