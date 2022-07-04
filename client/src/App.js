import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Components/Pages --- //
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import OrderHistory from "./pages/OrderHistory";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/orderHistory" element={<OrderHistory />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
