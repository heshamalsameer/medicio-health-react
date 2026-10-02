import Apointment from "../Apointment/Apointment";
import { IoCall } from "react-icons/io5";
import "./NeedHelpp.css";

const NeedHelpp = () => {
  return (
    <section className="need-help">
      <div className="nh-bg" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="wrap nh-inner reveal">
        <a href="tel:+15589554885" className="nh-phone" aria-label="Call emergency line">
          <IoCall />
        </a>
        <div className="nh-text">
          <h2>In an emergency? Need help now?</h2>
          <p>
            Our emergency department is open 24/7 with specialists on call. Call us
            directly or book an urgent appointment and we’ll take care of the rest.
          </p>
        </div>
        <Apointment light />
      </div>
    </section>
  );
};

export default NeedHelpp;
