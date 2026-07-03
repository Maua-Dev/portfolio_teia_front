import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Members from "./pages/members";

// Components
import Header from "./components/header/header";
//import Footer from "./components/footer/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}