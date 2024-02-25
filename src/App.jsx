import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import { RiArrowUpLine } from "react-icons/ri";
import Footer from "./components/Footer";
const App = () => {
  const location = useLocation();
  const [scrollToTop, setScrollToTop] = useState(false);
  const handleScrollToTop = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const routerScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // router up scrool
  useEffect(() => {
    routerScrollToTop();
  }, [location]);
  return (
    <div className="bg-slate-100 dark:bg-gray-600 duration-300">
      {scrollToTop && (
        <div
          className="fixed bottom-4 right-4 text-5xl z-10 bg-blue-600 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-80"
          onClick={handleScrollToTop}
        >
          <RiArrowUpLine className="p-2 text-white" />
        </div>
      )}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
