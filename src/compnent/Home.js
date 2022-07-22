import { useState, useEffect } from "react";
import Blogs from "../BlogList";

const Home = () => {
  const [blogs, setblogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setblogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <Blogs blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
