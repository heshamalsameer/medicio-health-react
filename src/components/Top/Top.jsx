import "./Top.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuSmartphone } from "react-icons/lu";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Top = () => {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <div className="topbar-info">
          <span>
            <MdOutlineWatchLater /> Monday - Saturday, 8AM to 10PM
          </span>
          <a href="tel:+15589554885">
            <LuSmartphone /> Call us now +1 5589 55488 55
          </a>
        </div>
        <div className="topbar-social">
          {[
            [FaXTwitter, "X"],
            [FaFacebookF, "Facebook"],
            [FaInstagram, "Instagram"],
            [FaLinkedinIn, "LinkedIn"],
          ].map(([Icon, label]) => (
            <a key={label} href="#" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
