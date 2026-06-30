import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";

// Components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}