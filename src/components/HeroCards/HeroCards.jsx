import { BsHeartPulseFill } from "react-icons/bs";
import { FaCapsules } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { FaDna } from "react-icons/fa";
import "./HeroCards.css";

const cards = [
  { icon: BsHeartPulseFill, title: "Cardiac Care", text: "Heart screenings, ECG and personalised prevention plans." },
  { icon: FaCapsules, title: "Pharmacy", text: "In-house pharmacy with prescriptions ready before you leave." },
  { icon: BiSolidInjection, title: "Vaccinations", text: "Routine and travel vaccines for children and adults." },
  { icon: FaDna, title: "Lab & Genetics", text: "Accurate lab testing with results delivered within 24 hours." },
];

const HeroCards = () => {
  return (
    <section className="wrap hero-cards" aria-label="Highlights">
      {cards.map(({ icon: Icon, title, text }, i) => (
        <div key={title} className="reveal" style={{ "--d": `${i * 100}ms` }}>
          <article className="w-card">
            <span className="hc-ic">
              <Icon />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="hc-num">0{i + 1}</span>
          </article>
        </div>
      ))}
    </section>
  );
};

export default HeroCards;
