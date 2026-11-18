import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { useEffect } from "react";
import { useLocation } from "react-router";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PillarsPage from "./pages/Pillars";
import ProductsPage from "./pages/Products";
import InfrastructurePage from "./pages/Infrastructure";
import CSRPage from "./pages/CSR";
import ContactPage from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pillars" element={<PillarsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/csr" element={<CSRPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
