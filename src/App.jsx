import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ProductDetail from "./components/ProductDetail";
import ProductInfo from "./components/ProductInfo";

function App() {
  const fruits = [
    { id: 1, name: "Jonh Doe", age: 40, email: "johndoe@gmail.com" },
    { id: 2, name: "Mary Doe", age: 31, email: "marydoe@gmail.com" },
    { id: 3, name: "Peter Doe", age: 30, email: "peterdoe@gmail.com" },
    { id: 4, name: "Jane Doe", age: 30, email: "janedoe@gmail.com" },
  ];

  const arr = ["Apple", "Cherry", "Orange"];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product"
            element={<Products fruits={fruits} arr={arr} />}
          />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="contact/:id" element={<ProductInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
