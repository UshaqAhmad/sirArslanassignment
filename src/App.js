import Navbar from "./components/Navbar";

import Newproducts from "./components/Newproducts";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import Card from "./components/Card";
import { Routes, Route } from "react-router-dom";

import ProdDetail from "./components/ProdDetail";
function App() {
  return (
    <>
      <Navbar />
      <Card />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Newproducts />} />
        <Route path="/Products/:id" element={<ProdDetail />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
