import { useState } from "react";
import styles from "./Contact.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { IoSend, IoCheckmarkCircle } from "react-icons/io5";

const initial = { name: "", email: "", subject: "", message: "" };
const info = [
  { icon: CiLocationOn, title: "Address", text: "A108 Adam Street, New York, NY 535022", wide: true },
  { icon: IoIosCall, title: "Call Us", text: "+1 5589 55488 55", href: "tel:+15589554885" },
  { icon: TfiEmail, title: "Email Us", text: "info@example.com", href: "mailto:info@example.com" },
];

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters";
  return e;
}

export const Contect = () => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate(values);
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setValues(initial);
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  const field = (name, label, textarea = false) => (
    <div className={`${styles.field} ${errors[name] ? styles.invalid : ""}`}>
      {textarea ? (
        <textarea id={`c-${name}`} name={name} rows={5} value={values[name]} onChange={onChange} placeholder=" " />
      ) : (
        <input id={`c-${name}`} name={name} value={values[name]} onChange={onChange} placeholder=" " type={name === "email" ? "email" : "text"} />
      )}
      <label htmlFor={`c-${name}`}>{label}</label>
      {errors[name] && <span className={styles.err}>{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="wrap">
        <HeaderSection
          eyebrow="Contact"
          title={
            <>
              We’re here <em>to help</em>
            </>
          }
          description="Questions about a treatment, a bill or a visit? Reach out and our team will get back to you shortly."
        />

        <div className={`reveal ${styles.map}`} data-anim="zoom">
          <iframe
            title="Medicio location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11662.9823862156!2d-80.11417883366248!3d25.936737059558723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2snl!4v1724217821361!5m2!1sar!2snl"
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.infoGrid}>
            {info.map(({ icon: Icon, title, text, href, wide }, i) => {
              const Tag = href ? "a" : "div";
              return (
                <div key={title} className={`reveal ${wide ? styles.wide : ""}`} style={{ "--d": `${i * 90}ms` }}>
                  <Tag href={href} className={styles.contactCol}>
                    <Icon className={styles.contactIcon} />
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </Tag>
                </div>
              );
            })}
          </div>

          <form className={`reveal ${styles.form}`} data-anim="right" onSubmit={onSubmit} noValidate>
            <div className={styles.row2}>
              {field("name", "Your Name")}
              {field("email", "Your Email")}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message", true)}
            <div className={styles.actions}>
              <button type="submit" className="btn" disabled={status === "sending"}>
                <span className="btn-ic">
                  {status === "sending" ? <span className={styles.spinner} /> : <IoSend />}
                </span>
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              <span className={`${styles.toast} ${status === "sent" ? styles.show : ""}`} role="status">
                <IoCheckmarkCircle /> Message sent — thank you!
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
