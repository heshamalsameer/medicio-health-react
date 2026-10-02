/* eslint-disable react/prop-types */
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const DoctorCard = ({ doctor, index = 0 }) => {
  return (
    <div className="reveal" style={{ "--d": `${index * 100}ms` }}>
      <article className="doc-card">
        <div className="doc-media">
          <img src={doctor.img} alt={doctor.name} loading="lazy" />
          <div className="doc-social">
            {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social profile" style={{ "--s": i }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="doc-body">
          <h3>{doctor.name}</h3>
          <p>{doctor.specialty}</p>
        </div>
      </article>
    </div>
  );
};
