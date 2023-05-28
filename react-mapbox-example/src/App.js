import MyMap from "./components/MyMap";
import SearchableMap from "./components/SearchableMap";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <div style={{ margin: "0 auto", textAlign: "center", fontSize: "2rem" }}>
        <a href="/">Show My Location</a> or <a href="/search">Search</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyMap />} />
          <Route path="/search" element={<SearchableMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
