import Home from "./router/home/Home";
import Layout from "./router/layout/Layout";
import Wishlist from "./router/wishlist/Wishlist";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./router/detail/Detail";
import Login from "./router/login/Login";
import Cart from "./router/cart/Cart";
import Resume from "./router/resume/Resume";
import Auth from "./router/auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/resume" element={<Resume />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
