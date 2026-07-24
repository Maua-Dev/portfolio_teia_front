import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Members from "./pages/members";

export default function App() {
  return (
    <BrowserRouter >
        <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-grow">
        </main>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        <Footer />   
        </div>  
    </BrowserRouter>
  )
}