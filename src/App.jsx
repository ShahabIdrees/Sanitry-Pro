import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./screens/home";
import Styles from "./screens/styles";
import About from "./screens/about";
import Contact from "./screens/contact";
import Layout from "./layout.jsx";
import ScrollToTop from "./scroll-to-top.js";


function App() {


  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
