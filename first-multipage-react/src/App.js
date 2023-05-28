import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Article from "./pages/Article";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My articles</h1>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
