import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { TestimonialCard } from "../../components/testimonials/TestimonialCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import testimonials1 from "../../assets/testimonials/testimonials-1.jpg";
import testimonials2 from "../../assets/testimonials/testimonials-2.jpg";
import testimonials3 from "../../assets/testimonials/testimonials-3.jpg";
import testimonials4 from "../../assets/testimonials/testimonials-4.jpg";
import testimonials5 from "../../assets/testimonials/testimonials-5.jpg";

// Sample testimonials — replace with real patient feedback.
const testimonials = [
  { name: "Jena Karlis", job: "Store Owner", img: testimonials1, opinion: "The staff were incredibly kind and the doctor took time to explain everything. I booked online in the morning and was seen the same afternoon." },
  { name: "Matt Brandon", job: "Entrepreneur", img: testimonials2, opinion: "After years of back-and-forth elsewhere, Medicio’s cardiology team finally gave me a clear plan. I feel healthier and more confident than ever." },
  { name: "Johan Larson", job: "Freelancer", img: testimonials5, opinion: "Modern facilities, no long waiting rooms and results sent straight to my phone. This is how healthcare should work." },
  { name: "Sara Wilsson", job: "Designer", img: testimonials3, opinion: "The pediatrics team made my daughter feel completely at ease. Gentle, patient and genuinely caring — we won’t go anywhere else." },
  { name: "Emma Lindqvist", job: "Teacher", img: testimonials4, opinion: "When I needed emergency care at midnight they were fast, calm and professional. I can’t thank the team enough." },
];

export const Testimonials = () => {
  const track = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [hover, setHover] = useState(false);

  const step = () => {
    const el = track.current;
    const card = el?.firstElementChild;
    return card ? card.offsetWidth + 24 : 1;
  };

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const perView = Math.max(1, Math.round(el.clientWidth / step()));
    setPages(Math.max(1, testimonials.length - perView + 1));
    setPage(Math.round(el.scrollLeft / step()));
  }, []);

  useEffect(() => {
    measure();
    const el = track.current;
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = useCallback((i) => {
    track.current.scrollTo({ left: i * step(), behavior: "smooth" });
  }, []);
  const next = useCallback(() => goTo(page + 1 >= pages ? 0 : page + 1), [page, pages, goTo]);
  const prev = () => goTo(page - 1 < 0 ? pages - 1 : page - 1);

  useEffect(() => {
    if (hover) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, hover]);

  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <HeaderSection
          eyebrow="Testimonials"
          title={
            <>
              What our <em>patients</em> say
            </>
          }
          description="Real stories from people who trusted us with their health."
        />

        <div
          className="reveal"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className={styles.track} ref={track}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} item={t} current={i === page} />
            ))}
          </div>
          <div className={styles.controls}>
            <button onClick={prev} aria-label="Previous testimonial">
              <IoIosArrowBack />
            </button>
            <div className={styles.dots}>
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  className={i === page ? styles.on : ""}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next testimonial">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
