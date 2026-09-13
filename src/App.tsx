/* Routes */
import { BrowserRouter, Routes, Route} from "react-router-dom";

/* Pages */
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Members from "./pages/members";
import ProjectPage from "./pages/projectpage";
import Selected_Member_Page from "./pages/selected_members_page";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
          <Header />            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/members" element={<Members />} />
              <Route path="/projectpage/:id" element={<ProjectPage />} />
              <Route path="/selected_member/:id" element={<Selected_Member_Page />} />
            </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  )
}