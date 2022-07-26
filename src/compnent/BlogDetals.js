import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetals() {
  const { id } = useParams();
  const { data, isloding, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  return (
    <div className="blog-details">
      {isloding && <h1>Loding...</h1>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2> {data.title}</h2>
          <p>By {data.author}</p>
          <div>{data.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetals;
