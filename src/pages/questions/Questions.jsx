import { useState } from "react";
import styles from "./Questions.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { IoAdd } from "react-icons/io5";

const accor = [
  { title: "How do I book an appointment?", content: "Use the appointment form on this page, call our front desk or visit any reception. You’ll receive a confirmation email with your time and doctor within the hour." },
  { title: "Do you accept health insurance?", content: "Yes — we work with most major insurance providers. Bring your insurance card to your first visit and our team will handle the paperwork for you." },
  { title: "Is the emergency department open 24/7?", content: "Absolutely. Our emergency unit is staffed around the clock, every day of the year, with specialists on call for urgent cases." },
  { title: "How long does it take to get lab results?", content: "Most routine lab results are ready within 24 hours and are sent securely to your patient portal and phone." },
  { title: "Can I choose my doctor?", content: "Yes. When booking you can select a specific doctor or let us assign the first available specialist in your chosen department." },
  { title: "What should I bring to my first visit?", content: "Please bring a photo ID, your insurance card, any previous medical records and a list of medications you are currently taking." },
];

export const Questions = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={`section ${styles.questions}`}>
      <div className="wrap">
        <HeaderSection
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <em>questions</em>
            </>
          }
          description="Quick answers to the questions our patients ask most."
        />
        <div className={styles.list}>
          {accor.map((item, i) => (
            <div key={item.title} className="reveal" style={{ "--d": `${i * 70}ms` }}>
              <div className={`${styles.item} ${open === i ? styles.open : ""}`}>
                <button
                  className={styles.head}
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span className={styles.num}>0{i + 1}</span>
                  <span className={styles.q}>{item.title}</span>
                  <span className={styles.ic}>
                    <IoAdd />
                  </span>
                </button>
                <div className={styles.body}>
                  <div>
                    <p>{item.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
