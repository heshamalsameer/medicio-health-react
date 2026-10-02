import "./Doctors.css";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import { DoctorCard } from "../../components/doctors/DoctorCard";
import { doctors } from "../../data";

export const Doctors = () => {
  return (
    <section id="doctors" className="section alt">
      <div className="wrap">
        <HeaderSection
          eyebrow="Doctors"
          title={
            <>
              Meet our <em>specialists</em>
            </>
          }
          description="Experienced, caring and internationally trained — the people behind your care."
        />
        <div className="doc-grid">
          {doctors.map((item, index) => (
            <DoctorCard key={item.name} doctor={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
