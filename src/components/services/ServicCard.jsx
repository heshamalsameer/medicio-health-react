/* eslint-disable react/prop-types */
import styles from "./ServiceCard.module.css";
import { IoArrowForward } from "react-icons/io5";

export const ServicCard = ({ title, description, icon, index = 0 }) => {
  return (
    <div className="reveal" style={{ "--d": `${(index % 3) * 100}ms` }}>
      <article className={styles.card}>
        <span className={styles.icon}>{icon()}</span>
        <h3>{title}</h3>
        <span className={styles.line} />
        <p>{description}</p>
        <a href="#appointment" className={styles.more}>
          Book now <IoArrowForward />
        </a>
      </article>
    </div>
  );
};
