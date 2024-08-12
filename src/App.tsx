import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import ReviewPage from "./pages/ReviewPage";
import Safari from "./pages/Safari";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className=" max-w-7xl mx-auto px-2 md:px-4 ">
        <div className="z-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/submit-review" element={<ReviewPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
