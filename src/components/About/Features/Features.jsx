import { FaHandHoldingMedical, FaMedkit, FaLungs } from "react-icons/fa";
import { FaStaffSnake } from "react-icons/fa6";
import "./Features.css";

const items = [
  { icon: FaHandHoldingMedical, title: "Patient-Centred Care", text: "Every treatment plan is built around your history, goals and lifestyle — not a template." },
  { icon: FaMedkit, title: "Rapid Emergency Response", text: "Triage within minutes and fully equipped emergency units ready around the clock." },
  { icon: FaStaffSnake, title: "Experienced Specialists", text: "Senior consultants with international training lead every department." },
  { icon: FaLungs, title: "Advanced Diagnostics", text: "Modern imaging, pulmonary and lab facilities for fast, accurate answers." },
];

const Features = () => {
  return (
    <div className="features">
      <div className="features-media reveal" data-anim="left">
        <img src="/imgs/features.jpg" alt="Doctor with patient" loading="lazy" />
        <div className="features-pill">
          <span className="dot" /> Open today · 8AM – 10PM
        </div>
      </div>
      <div>
        <p className="eyebrow reveal">
          <span className="eyebrow-bar" />
          Why choose us
        </p>
        <h3 className="h-display reveal features-title" style={{ "--d": "80ms" }}>
          Healthcare that feels <em>personal</em>
        </h3>
        <div className="features-list">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="reveal" style={{ "--d": `${120 + i * 90}ms` }}>
              <div className="feature">
                <span className="f-ic">
                  <Icon />
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
