import SectionTitle from "../SectionTitle/SectionTitle";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { FaUserDoctor } from "react-icons/fa6";
import "./About.css";
import AboutCard from "./AboutCard/AboutCard";
import Features from "./Features/Features";

const points = [
  "Board-certified specialists across 15 medical departments",
  "Same-day appointments and online booking in under a minute",
  "Digital records — your results and prescriptions always with you",
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionTitle
          eyebrow="About Us"
          title={
            <>
              Caring for your health <em>since 2008</em>
            </>
          }
          text="We combine medical expertise with genuine compassion to give every patient the care they deserve."
        />

        <div className="about-grid">
          <div className="about-media reveal" data-anim="left">
            <div className="about-img">
              <img src="/imgs/about.jpg" alt="Medical team at Medicio" loading="lazy" />
            </div>
            <div className="about-badge">
              <FaUserDoctor />
              <div>
                <strong>18+</strong>
                <span>Years of care</span>
              </div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="reveal">
              We put patients first — in every decision, every visit and every follow-up.
            </h3>
            <p className="reveal" style={{ "--d": "80ms" }}>
              From routine check-ups to complex surgery, our teams collaborate across
              departments so you get one clear plan, fewer waiting rooms and faster
              recovery.
            </p>
            <ul className="about-list">
              {points.map((p, i) => (
                <li key={p} className="reveal" style={{ "--d": `${140 + i * 90}ms` }}>
                  <span className="check">
                    <LiaCheckDoubleSolid />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <p className="reveal about-note" style={{ "--d": "420ms" }}>
              Accredited by international healthcare standards and trusted by more than
              40,000 families every year.
            </p>
          </div>
        </div>

        <AboutCard />
        <Features />
      </div>
    </section>
  );
};

export default About;
