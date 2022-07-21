import { useState } from "react";
import Blogs from "../BlogList";

const Home = () => {
  const [blogs, setblogs] = useState([
    { id: 1, title: "blog 1", body: "sum text ...", author: "salah" },
    { id: 2, title: "blog 2", body: "sum text ...", author: "soiu" },
    { id: 3, title: "blog 3", body: "sum text ...", author: "soussou" },
    { id: 4, title: "blog 4", body: "sum text ...", author: "iddine" },
  ]);

  return (
    <div className="home">
      <Blogs blogs={blogs} />
    </div>
  );
};

export default Home;
