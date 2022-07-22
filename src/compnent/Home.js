import { useState, useEffect } from "react";
import Blogs from "../BlogList";

const Home = () => {
  const [blogs, setblogs] = useState(null),
    [isloding, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setblogs(data);
          setLoding(false);
        });
    }, 5000);
  }, []);

  return (
    <div className="home">
      {isloding && (
        <div>
          <h1>loading...</h1>
        </div>
      )}
      {blogs && <Blogs blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
