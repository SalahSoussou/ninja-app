import Home from "./compnent/Home";
import Nav from "./compnent/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
