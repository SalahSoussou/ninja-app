import React from "react";

const Home = () => {
  const [num, setnum] = React.useState(1);

  const handleClick = () => {
    setnum(num + 1);
  };

  return (
    <div className="home">
      <h2>Home page</h2>
      <h1>{num}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
