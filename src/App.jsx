//import "./App.css";
import "./style/MovieList.css";
import "./style/Header.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorite/Favorite";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
