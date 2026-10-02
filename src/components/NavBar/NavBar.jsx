/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./NavBar.css";
import Apointment from "../Apointment/Apointment";
import { IoSunnyOutline, IoMoonOutline, IoClose, IoChevronDown } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useScrollY } from "../../hooks/useReveal";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "departments", label: "Departments" },
  { id: "doctors", label: "Doctors" },
];
const more = [
  { id: "testimonials", label: "Testimonials" },
  { id: "gallery", label: "Gallery" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];
const tail = [{ id: "contact", label: "Contact" }];
const all = [...links, ...more, ...tail];

const NavBar = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const y = useScrollY();

  useEffect(() => {
    const sections = all.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const moreActive = more.some((m) => m.id === active);
  const linkCls = (id) => (active === id ? "active-link" : "");

  return (
    <>
      <header className={`NavBar ${y > 40 ? "scrolled" : ""}`}>
        <nav className="wrap nav-inner" aria-label="Main">
          <a href="#home" className="logo" onClick={close}>
            <span className="logo-mark">
              <FaPlus />
            </span>
            Medicio
          </a>

          <ul className="ulNavBar">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={linkCls(l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="has-drop">
              <button className={moreActive ? "active-link" : ""} aria-haspopup="true">
                More <IoChevronDown />
              </button>
              <ul className="drop">
                {more.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`} className={linkCls(l.id)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {tail.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={linkCls(l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <span className={`ti ${theme === "dark" ? "" : "on"}`}>
                <IoMoonOutline />
              </span>
              <span className={`ti ${theme === "dark" ? "on" : ""}`}>
                <IoSunnyOutline />
              </span>
            </button>
            <Apointment className="nav-cta" />
            <button
              className="burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      <div className={`menu-overlay ${open ? "show" : ""}`} onClick={close} />
      <aside className={`ulmenu ${open ? "open" : ""}`} aria-hidden={!open}>
        <button className="menu-close" onClick={close} aria-label="Close menu">
          <IoClose />
        </button>
        <ul>
          {all.map((l, i) => (
            <li key={l.id} style={{ "--i": i }}>
              <a href={`#${l.id}`} onClick={close} className={linkCls(l.id)}>
                <small>{String(i + 1).padStart(2, "0")}</small>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-foot" style={{ "--i": all.length }}>
          <Apointment onClick={close} />
        </div>
      </aside>
    </>
  );
};

export default NavBar;
