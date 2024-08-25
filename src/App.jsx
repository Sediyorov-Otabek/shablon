import Home from "./router/home/Home";
import Layout from "./router/layout/Layout";
import Wishlist from "./router/wishlist/Wishlist";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./router/detail/Detail";
import Login from "./router/login/Login";
import Cart from "./router/cart/Cart";
import Resume from "./router/resume/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Detail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
