import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/product/Products";
import ProductDetail from "./pages/product/ProductDetail";
import ContactUs from "./pages/ContactUs";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}
