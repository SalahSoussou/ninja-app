import React from "react";

function Blogs({ blogs, title }) {
  let ran = blogs.map((e) => (
    <div className="privew" key={e.id}>
      <h2> {e.title}</h2>
      <p> author {e.author}</p>
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
