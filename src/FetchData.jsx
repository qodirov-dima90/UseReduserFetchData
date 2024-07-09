import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData() {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoding(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setLoding(false);
        setPost({});
        setError("Xatolik ro'y berdi");
      });
  }, []);
  return (
    <div>
      {loding ? (
        "Loding .."
      ) : (
        <div>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}
      {error ? error : null}
    </div>
  );
}

export default FetchData;
