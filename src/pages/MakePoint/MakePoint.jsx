import { useMemo, useState } from "react";
import styles from "./MakePoint.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { departments, doctors } from "../../data";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";

const initial = { name: "", email: "", phone: "", date: "", dept: "", doctor: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email";
  if (!/^[+\d][\d\s-]{6,}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number";
  if (!v.date) e.date = "Pick a date";
  if (!v.dept) e.dept = "Choose a department";
  return e;
}

const MakePoint = () => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const deptDoctors = doctors.filter((d) => !values.dept || d.dept === values.dept);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value, ...(name === "dept" ? { doctor: "" } : {}) }));
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
      setTimeout(() => setStatus("idle"), 4500);
    }, 1200);
  };

  const field = (name, label, props = {}) => (
    <div className={`${styles.field} ${errors[name] ? styles.invalid : ""}`}>
      <input id={`ap-${name}`} name={name} value={values[name]} onChange={onChange} placeholder=" " {...props} />
      <label htmlFor={`ap-${name}`}>{label}</label>
      {errors[name] && <span className={styles.err}>{errors[name]}</span>}
    </div>
  );

  return (
    <section id="appointment" className={`section ${styles.bgf7f}`}>
      <div className="wrap">
        <SectionTitle
          light
          eyebrow="Make an Appointment"
          title={
            <>
              Book your visit in <em>under a minute</em>
            </>
          }
          text="Choose a department, pick a date and we’ll confirm your appointment by email within the hour."
        />

        <form className={`reveal ${styles.form}`} onSubmit={onSubmit} noValidate>
          <div className={styles.row3}>
            {field("name", "Your Name")}
            {field("email", "Your Email", { type: "email" })}
            {field("phone", "Your Phone", { type: "tel" })}
          </div>
          <div className={styles.row3}>
            {field("date", "Appointment Date", { type: "date", min: today, className: styles.filled })}
            <div className={`${styles.field} ${errors.dept ? styles.invalid : ""}`}>
              <select id="ap-dept" name="dept" value={values.dept} onChange={onChange} className={styles.filled}>
                <option value="">Select Department</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
              <label htmlFor="ap-dept">Department</label>
              {errors.dept && <span className={styles.err}>{errors.dept}</span>}
            </div>
            <div className={styles.field}>
              <select id="ap-doctor" name="doctor" value={values.doctor} onChange={onChange} className={styles.filled}>
                <option value="">Any available doctor</option>
                {deptDoctors.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name} — {d.specialty}
                  </option>
                ))}
              </select>
              <label htmlFor="ap-doctor">Doctor</label>
            </div>
          </div>
          <div className={styles.field}>
            <textarea id="ap-message" name="message" rows={4} value={values.message} onChange={onChange} placeholder=" " />
            <label htmlFor="ap-message">Message (optional)</label>
          </div>

          <div className={styles.actions}>
            <button type="submit" className="btn" disabled={status === "sending"}>
              <span className="btn-ic">
                {status === "sending" ? <span className={styles.spinner} /> : <FaRegCalendarCheck />}
              </span>
              {status === "sending" ? "Booking…" : "Make an Appointment"}
            </button>
            <div className={`${styles.toast} ${status === "sent" ? styles.show : ""}`} role="status">
              <IoCheckmarkCircle /> Your appointment request was sent. Thank you!
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MakePoint;
