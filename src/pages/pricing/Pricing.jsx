import { useState } from "react";
import Card from "../../components/pricing/PricingCard";
import styles from "./Pricing.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";

const plans = [
  { title: "Free", price: 0 },
  { title: "Business", price: 19 },
  { title: "Developer", price: 29 },
  { title: "Ultimate", price: 48, isAdvance: true },
];

export const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section alt">
      <div className="wrap">
        <HeaderSection
          eyebrow="Pricing"
          title={
            <>
              Simple plans, <em>no surprises</em>
            </>
          }
          description="Choose a care plan that fits your family. Switch or cancel any time."
        />

        <div className={`reveal ${styles.toggleWrap}`}>
          <div className={styles.toggle} data-yearly={yearly}>
            <span className={styles.pill} />
            <button onClick={() => setYearly(false)} aria-pressed={!yearly}>
              Monthly
            </button>
            <button onClick={() => setYearly(true)} aria-pressed={yearly}>
              Yearly <small>-20%</small>
            </button>
          </div>
        </div>

        <div className={styles.cards}>
          {plans.map((p, i) => (
            <Card key={p.title} {...p} yearly={yearly} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
