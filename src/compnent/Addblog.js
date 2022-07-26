import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addblog = () => {
  const [title, setTile] = useState(""),
    [body, setBody] = useState(""),
    [author, setAuthor] = useState(""),
    [louding, setlouding] = useState(false),
    hestory = useNavigate(),
    // submit function
    submit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };

      setlouding(true);

      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog");
        setlouding(false);
      });

      hestory("/");
    };

  return (
    <div className="add-blog-form">
      <h2>Add new blog</h2>
      <form onSubmit={submit}>
        <label>Blog titel</label>
        <input
          required
          type={"text"}
          value={title}
          onChange={(e) => setTile(e.target.value)}
        />
        <label>Blog author</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="salah">salahe</option>
          <option value="soussou">soussou</option>
        </select>
        {!louding && <button>Add Blog</button>}
        {louding && <button disabled>Adding to list...</button>}
      </form>
    </div>
  );
};

export default Addblog;
