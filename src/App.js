import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import PostPage from "./Pages/PostPage";
import NavBar from "./Components/Navigation/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/post" index element={<PostPage />} />
        <Route path="/cart" index element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
