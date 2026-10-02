import { useState } from "react";
import styles from "./Departments.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { departments } from "../../data";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { IoArrowForward } from "react-icons/io5";

export const Department = () => {
  const [active, setActive] = useState(departments.length - 1);
  const d = departments[active];

  return (
    <section id="departments" className="section">
      <div className="wrap">
        <HeaderSection
          eyebrow="Departments"
          title={
            <>
              Specialists you can <em>rely on</em>
            </>
          }
          description="Explore our departments and find the right team for your needs."
        />

        <div className={`reveal ${styles.layout}`}>
          <ul className={styles.menu} role="tablist" style={{ "--i": active }}>
            <span className={styles.indicator} aria-hidden="true" />
            {departments.map((x, i) => (
              <li key={x.id}>
                <button
                  role="tab"
                  aria-selected={active === i}
                  className={active === i ? styles.select : ""}
                  onClick={() => setActive(i)}
                >
                  <small>0{i + 1}</small>
                  {x.name}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.panel} key={d.id} role="tabpanel">
            <div className={styles.text}>
              <h3 className={styles.header}>{d.name}</h3>
              <p className={styles.lead}>{d.lead}</p>
              <p>{d.text}</p>
              <ul className={styles.points}>
                {d.points.map((p, i) => (
                  <li key={p} style={{ "--k": i }}>
                    <LiaCheckDoubleSolid /> {p}
                  </li>
                ))}
              </ul>
              <a href="#appointment" className={styles.link}>
                Book with {d.name} <IoArrowForward />
              </a>
            </div>
            <div className={styles.img}>
              <img src={d.img} alt={d.name} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
