import React, { useEffect, useState } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((json) => setPosts(json))
  //     .catch((err) => setError(err.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  if (error) {
    return <h1 className="error">404 Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
};

export default Posts;
