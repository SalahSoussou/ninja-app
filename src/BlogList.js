import React from "react";
import { Link } from "react-router-dom";

function Blogs({ blogs, title }) {
  let ran = blogs.map((e) => (
    <div className="privew" key={e.id}>
      <Link to={`/addBlog/${e.id}`}>
        <h2> {e.title}</h2>
        <p> author {e.author}</p>
      </Link>
    </div>
  ));

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {ran}
    </div>
  );
}

export default Blogs;
