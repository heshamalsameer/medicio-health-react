/* eslint-disable react/prop-types */
import SectionTitle from "../SectionTitle/SectionTitle";

// Thin wrapper kept for backward compatibility — uses the shared SectionTitle.
export const HeaderSection = ({ eyebrow, title, description, light }) => (
  <SectionTitle eyebrow={eyebrow} title={title} text={description} light={light} />
);
