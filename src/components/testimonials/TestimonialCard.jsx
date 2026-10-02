/* eslint-disable react/prop-types */
import styles from "./Testimonial.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoStar } from "react-icons/io5";

export const TestimonialCard = ({ item, current = false }) => {
  return (
    <figure className={`${styles.testimonial} ${current ? styles.current : ""}`}>
      <RiDoubleQuotesL className={styles.qot} />
      <div className={styles.stars} aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, k) => (
          <IoStar key={k} />
        ))}
      </div>
      <blockquote>{item.opinion}</blockquote>
      <figcaption>
        <img className={styles.img} src={item.img} alt={item.name} loading="lazy" />
        <span>
          <strong className={styles.name}>{item.name}</strong>
          <small className={styles.job}>{item.job}</small>
        </span>
      </figcaption>
    </figure>
  );
};
