import React from "react";

function Blogs({ blogs }) {
  let ran = blogs.map((e) => (
    <div className="privew" key={e.id}>
      <h2> {e.title}</h2>
      <p> author {e.author}</p>
    </div>
  ));

  return <div className="blog-list">{ran}</div>;
}

export default Blogs;
