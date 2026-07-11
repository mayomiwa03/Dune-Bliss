import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import GlobalStyle from "./components/style";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Menu from "./components/Menu";
import Pages from "./components/Pages";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
