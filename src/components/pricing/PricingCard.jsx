/* eslint-disable react/prop-types */
import { IoCheckmark, IoClose } from "react-icons/io5";

const FEATURES = [
  "General consultations",
  "Online booking & reminders",
  "Lab test discounts",
  "Specialist consultations",
  "Annual full health check",
];

// how many features each plan includes
const INCLUDED = { Free: 3, Business: 4, Developer: 5, Ultimate: 5 };

const Card = ({ title, price, yearly = false, isAdvance = false, index = 0 }) => {
  const included = INCLUDED[title] ?? FEATURES.length;
  const shown = yearly ? Math.round(price * 12 * 0.8) : price;

  return (
    <div className="reveal" style={{ "--d": `${index * 100}ms` }}>
      <article className={`price-card ${isAdvance ? "featured" : ""}`}>
        {isAdvance && <span className="ribbon">Advance</span>}
        <h3>{title}</h3>
        <div className="price">
          <span className="cur">$</span>
          <strong key={shown}>{shown}</strong>
          <span className="per">/{yearly ? "year" : "month"}</span>
        </div>
        <ul>
          {FEATURES.map((f, i) => (
            <li key={f} className={i < included ? "" : "off"}>
              {i < included ? <IoCheckmark /> : <IoClose />}
              {f}
            </li>
          ))}
        </ul>
        <a href="#appointment" className={`price-btn ${isAdvance ? "solid" : ""}`}>
          {price === 0 ? "Get Started" : "Buy Now"}
        </a>
      </article>
    </div>
  );
};
export default Card;
