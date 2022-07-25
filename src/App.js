import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./compnent/Home";
import Nav from "./compnent/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
