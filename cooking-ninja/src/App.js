import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home.js";
import Search from "./pages/search/Search.js";
import Create from "./pages/create/Create.js";
import Recipe from "./pages/recipe/Recipe.js";

/*app router code class what .... command */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );//end return route
}//end func

export default App;
