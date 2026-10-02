import doctor1 from "./assets/doctors/doctors-1.jpg";
import doctor2 from "./assets/doctors/doctors-2.jpg";
import doctor3 from "./assets/doctors/doctors-3.jpg";
import doctor4 from "./assets/doctors/doctors-4.jpg";
import dept5 from "./assets/departments-5.jpg";

// Shared content used by Departments, Doctors and the appointment form.
export const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    img: "/imgs/departments-1.jpg",
    lead: "Heart health from prevention to intervention.",
    text: "Our cardiology team provides full cardiac assessments, ECG and echocardiography, hypertension management and post-operative follow-up — with fast access to specialists when every minute counts.",
    points: ["24/7 cardiac emergency unit", "Echo, ECG & stress testing", "Cardiac rehabilitation program"],
  },
  {
    id: "neurology",
    name: "Neurology",
    img: "/imgs/departments-2.jpg",
    lead: "Precise diagnosis for brain and nerve conditions.",
    text: "From migraines and epilepsy to stroke recovery, our neurologists use modern imaging and nerve-conduction studies to find answers quickly and design effective long-term care.",
    points: ["MRI & EEG diagnostics", "Stroke recovery clinic", "Headache & epilepsy care"],
  },
  {
    id: "hepatology",
    name: "Hepatology",
    img: "/imgs/departments-3.jpg",
    lead: "Specialised care for liver health.",
    text: "We diagnose and treat liver disease at every stage, combining lab work, elastography and nutrition counselling to protect one of your most vital organs.",
    points: ["Fibroscan elastography", "Hepatitis treatment", "Nutrition & lifestyle support"],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    img: "/imgs/departments-4.jpg",
    lead: "Gentle care for our youngest patients.",
    text: "Child-friendly clinics, growth monitoring, vaccinations and a team that knows how to make kids — and parents — feel at ease during every visit.",
    points: ["Vaccination schedules", "Growth & development checks", "Newborn care"],
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    img: dept5,
    lead: "Clear vision, expertly protected.",
    text: "Comprehensive eye exams, cataract and glaucoma care and laser treatments delivered by experienced ophthalmologists with the latest diagnostic equipment.",
    points: ["Comprehensive eye exams", "Cataract & glaucoma surgery", "Laser vision correction"],
  },
];

export const doctors = [
  { name: "Walter White", specialty: "Chief Medical Officer", dept: "cardiology", img: doctor1 },
  { name: "Sarah Johnson", specialty: "Anesthesiologist", dept: "neurology", img: doctor2 },
  { name: "William Anderson", specialty: "Cardiologist", dept: "cardiology", img: doctor3 },
  { name: "Amanda Jepson", specialty: "Neurosurgeon", dept: "neurology", img: doctor4 },
];
