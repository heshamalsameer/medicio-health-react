import { useEffect, useState } from "react";
import "./App.css";
import Top from "./components/Top/Top";
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";
import HeroCards from "./components/HeroCards/HeroCards";
import NeedHelp from "./components/NeedHelpp/NeedHelpp";
import About from "./components/About/About";
import { Services } from "./pages/services/Services";
import MakePoint from "./pages/MakePoint/MakePoint";
import { Department } from "./pages/departments/Department";
import { Testimonials } from "./pages/testimonials/Testimonials";
import { Doctors } from "./pages/doctors/Doctors";
import { Gallery } from "./pages/gallery/Gallery";
import { Pricing } from "./pages/pricing/Pricing";
import { Questions } from "./pages/questions/Questions";
import { Contect } from "./pages/contactUs/Contact";
import { Footer } from "./pages/footer/Footer";
import ScrollUI from "./components/ScrollUI/ScrollUI";
import Preloader from "./components/ScrollUI/Preloader";
import { useRevealAll } from "./hooks/useReveal";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("medicio-theme");
    if (saved) return saved;
  } catch {
    /* storage unavailable */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useRevealAll();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("medicio-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  return (
    <div className="app">
      <Preloader />
      <ScrollUI />
      <Top />
      <NavBar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />
      <main>
        <Slider />
        <HeroCards />
        <NeedHelp />
        <About />
        <Services />
        <MakePoint />
        <Department />
        <Testimonials />
        <Doctors />
        <Gallery />
        <Pricing />
        <Questions />
        <Contect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
