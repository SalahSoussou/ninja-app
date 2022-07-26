import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetals() {
  const { id } = useParams();
  const hestory = useNavigate();
  const { data, isloding, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const handleDilet = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      hestory("/");
    });
  };
  return (
    <div className="blog-details">
      {isloding && <h1>Loding...</h1>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2> {data.title}</h2>
          <p>By {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDilet}>delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetals;
