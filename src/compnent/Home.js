import Blogs from "../BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isloding,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
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
