import axios from "axios";
import React from "react";

const baseURL = "https://krds-assignment.github.io/aoc/api-assets/data.json";
// const baseURL ="https://jsonplaceholder.typicode.com/users/1";
 function Get() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.image}</p>
      {/* <button onClick={createPost}>Create Post</button> */}

    </div>
  );
}
export default Get;
