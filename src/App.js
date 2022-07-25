import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Addblog from "./compnent/Addblog";
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
            <Route path="/addBlog" element={<Addblog />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
