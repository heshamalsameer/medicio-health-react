/* eslint-disable react/prop-types */
import { FaUserDoctor, FaRegHospital } from "react-icons/fa6";
import { HiMiniBeaker } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import { useCountUp, useInView } from "../../../hooks/useReveal";
import "./AboutCard.css";

const stats = [
  { icon: FaUserDoctor, value: 25, label: "Doctors" },
  { icon: FaRegHospital, value: 15, label: "Departments" },
  { icon: HiMiniBeaker, value: 8, label: "Research Labs" },
  { icon: SlBadge, value: 150, label: "Awards" },
];

const Stat = ({ icon: Icon, value, label, i }) => {
  const [ref, inView] = useInView(0.5);
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="reveal" style={{ "--d": `${i * 100}ms` }}>
      <div className="w-aboutcard">
        <span className="ac-ic">
          <Icon />
        </span>
        <div>
          <strong>
            {n}
            <sup>+</sup>
          </strong>
          <span className="ac-label">{label}</span>
        </div>
      </div>
    </div>
  );
};

const AboutCard = () => (
  <div className="about-stats">
    {stats.map((s, i) => (
      <Stat key={s.label} {...s} i={i} />
    ))}
  </div>
);

export default AboutCard;
