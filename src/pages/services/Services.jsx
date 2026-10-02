import styles from "./Services.module.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { ServicCard } from "../../components/services/ServicCard";
import { FaHeartbeat, FaDna } from "react-icons/fa";
import { BsCapsulePill, BsPersonWheelchair } from "react-icons/bs";
import { TbLibraryPlus } from "react-icons/tb";
import { IoPersonAdd } from "react-icons/io5";

const services = [
  { title: "Cardiology Check-ups", description: "Complete heart assessments including ECG, echo and stress tests with same-week results.", icon: () => <FaHeartbeat /> },
  { title: "Pharmacy & Prescriptions", description: "On-site pharmacy with digital prescriptions and home delivery for chronic medication.", icon: () => <BsCapsulePill /> },
  { title: "Family Medicine", description: "One family doctor for the whole household — preventive care, follow-ups and referrals.", icon: () => <IoPersonAdd /> },
  { title: "Genetic Testing", description: "Advanced DNA screening to understand inherited risks and personalise your treatment.", icon: () => <FaDna /> },
  { title: "Rehabilitation", description: "Physiotherapy and mobility programs that help you return to daily life faster.", icon: () => <BsPersonWheelchair /> },
  { title: "Health Packages", description: "Annual wellness bundles combining lab work, imaging and specialist consultations.", icon: () => <TbLibraryPlus /> },
];

export const Services = () => {
  return (
    <section id="services" className="section alt">
      <div className="wrap">
        <HeaderSection
          eyebrow="Services"
          title={
            <>
              Complete care, <em>one place</em>
            </>
          }
          description="Everything you and your family need — from prevention and diagnosis to treatment and recovery."
        />
        <div className={styles.grid}>
          {services.map((item, index) => (
            <ServicCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
