import "./App.css";
import CardName from "./CardName";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TextComponent from "./TextComponent";
import AboutPage from "./Pages/AboutPage";
import ProductPage from "./Pages/ProductPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      {/* <CardName/> */}
      {/* <HomePage></HomePage> */}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
