/* eslint-disable react/prop-types */
import { FaRegCalendarCheck } from "react-icons/fa6";

const Apointment = ({ light = false, className = "", onClick }) => {
  return (
    <a
      href="#appointment"
      onClick={onClick}
      className={`btn ${light ? "btn--light" : ""} ${className}`}
    >
      <span className="btn-ic">
        <FaRegCalendarCheck />
      </span>
      Make an Appointment
    </a>
  );
};

export default Apointment;
