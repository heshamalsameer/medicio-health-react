import { useCallback, useEffect, useRef, useState } from "react";
import "./Slider.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { FaHeartPulse } from "react-icons/fa6";

const slides = [
  {
    img: "/imgs/hero-carousel/hero-carousel-1.jpg",
    tag: "Welcome to",
    tagStrong: "Medicio",
    title: ["Modern care,", "human touch"],
    text: "Expert doctors, advanced diagnostics and a team that treats you like family — all under one roof.",
  },
  {
    img: "/imgs/hero-carousel/hero-carousel-2.jpg",
    tag: "24/7",
    tagStrong: "Emergency",
    title: ["Always here", "when you need us"],
    text: "Round-the-clock emergency response with fully equipped units and specialists on call every hour of the day.",
  },
  {
    img: "/imgs/hero-carousel/hero-carousel-3.jpg",
    tag: "15",
    tagStrong: "Departments",
    title: ["Specialists for", "every stage of life"],
    text: "From cardiology to pediatrics, our departments work together to deliver care that is precise and personal.",
  },
];

const DURATION = 6500;

function Slider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const drag = useRef({ x: 0, active: false });
  const n = slides.length;

  const go = useCallback((i) => setCurrent(((i % n) + n) % n), [n]);
  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [current, paused, next]);

  // pause when tab hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // swipe / drag
  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, active: true };
  };
  const onPointerUp = (e) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    drag.current.active = false;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
  };

  return (
    <section
      id="home"
      className={`slider ${paused ? "is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      <div className="slider-container">
        {slides.map((s, i) => (
          <div
            key={s.img}
            className={`slide ${i === current ? "active" : ""}`}
            aria-hidden={i !== current}
          >
            <img
              src={s.img}
              alt={s.title.join(" ")}
              draggable="false"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="content-slider wrap">
              <p className="slide-loc">
                <FaHeartPulse /> {s.tag} <span>{s.tagStrong}</span>
              </p>
              <h1>
                {s.title.map((line, k) => (
                  <span className="line" key={k}>
                    <span style={{ "--k": k }}>{line}</span>
                  </span>
                ))}
              </h1>
              <p className="slide-text">{s.text}</p>
              <div className="slide-cta">
                <a href="#appointment" className="btn">
                  <span className="btn-ic">
                    <IoArrowForward />
                  </span>
                  Book an appointment
                </a>
                <a href="#services" className="ghost-link">
                  Our services
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-ui wrap">
        <div className="counter">
          <strong key={current}>0{current + 1}</strong>
          <span>/ 0{n}</span>
        </div>
        <div className="dots" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.img}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => go(i)}
            >
              <span style={{ animationDuration: `${DURATION}ms` }} />
            </button>
          ))}
        </div>
        <div className="arrow">
          <button onClick={prev} aria-label="Previous slide">
            <IoIosArrowBack size={22} />
          </button>
          <button onClick={next} aria-label="Next slide">
            <IoIosArrowForward size={22} />
          </button>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}

export default Slider;
