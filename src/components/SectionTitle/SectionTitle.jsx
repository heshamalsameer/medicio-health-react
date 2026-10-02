/* eslint-disable react/prop-types */
import "./SectionTitle.css";

/**
 * Shared section heading.
 * eyebrow — small uppercase label, title — main heading (JSX allowed), text — subtitle.
 */
const SectionTitle = ({ eyebrow, title, text, align = "center", light = false }) => {
  return (
    <div className={`section-title ${align} ${light ? "light" : ""}`}>
      {eyebrow && (
        <p className="eyebrow reveal">
          <span className="eyebrow-bar" />
          {eyebrow}
          <span className="eyebrow-bar" />
        </p>
      )}
      <h2 className="h-display reveal" style={{ "--d": "80ms" }}>
        {title}
      </h2>
      {text && (
        <p className="st-text reveal" style={{ "--d": "140ms" }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
