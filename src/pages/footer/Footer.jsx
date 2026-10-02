import styles from "./Footer.module.css";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaPlus, FaRegCopyright } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { FooterSection } from "../../components/footerSection/FooterSection";

const links = [
  {
    title: "Useful Links",
    content: [
      { label: "Home", href: "#home" },
      { label: "About us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Doctors", href: "#doctors" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Departments",
    content: [
      { label: "Cardiology", href: "#departments" },
      { label: "Neurology", href: "#departments" },
      { label: "Hepatology", href: "#departments" },
      { label: "Pediatrics", href: "#departments" },
      { label: "Ophthalmology", href: "#departments" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>
            <span>
              <FaPlus />
            </span>
            Medicio
          </a>
          <p>
            A108 Adam Street, New York, NY 535022
            <br />
            <strong>Phone:</strong> +1 5589 55488 55
            <br />
            <strong>Email:</strong> info@example.com
          </p>
          <div className={styles.social}>
            {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {links.map((item) => (
          <div key={item.title} className={styles.col}>
            <FooterSection links={item} />
          </div>
        ))}

        <div className={styles.col}>
          <h4>Newsletter</h4>
          <p className={styles.note}>Health tips and clinic news, once a month.</p>
          <form className={styles.news} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email" required />
            <button aria-label="Subscribe">
              <IoArrowForward />
            </button>
          </form>
        </div>
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <span>
          <FaRegCopyright /> {new Date().getFullYear()} <strong>Medicio</strong>. All Rights Reserved.
        </span>
        <span>
          Designed by <span className={styles.bootstarap}>BootstrapMade</span>
        </span>
      </div>
    </footer>
  );
};
