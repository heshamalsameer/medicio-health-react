import { useEffect, useState } from "react";

function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const finish = () => setTimeout(() => setDone(true), 400);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const safety = setTimeout(() => setDone(true), 3000);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setGone(true), 800);
    return () => clearTimeout(t);
  }, [done]);

  if (gone) return null;
  return (
    <div className={`preloader ${done ? "done" : ""}`} aria-hidden="true">
      <div className="preloader-inner">
        <svg className="ecg" viewBox="0 0 180 60">
          <path d="M0 30 H55 L65 12 L78 50 L90 4 L102 44 L110 30 H180" />
        </svg>
        <div className="preloader-logo">
          MEDICIO<span>+</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
