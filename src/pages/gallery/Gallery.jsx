import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose, IoExpand } from "react-icons/io5";
import gallery1 from "../../assets/gallery/gallery-1.jpg";
import gallery2 from "../../assets/gallery/gallery-2.jpg";
import gallery3 from "../../assets/gallery/gallery-3.jpg";
import gallery4 from "../../assets/gallery/gallery-4.jpg";
import gallery5 from "../../assets/gallery/gallery-5.jpg";
import gallery6 from "../../assets/gallery/gallery-6.jpg";
import gallery7 from "../../assets/gallery/gallery-7.jpg";
import gallery8 from "../../assets/gallery/gallery-8.jpg";
import { HeaderSection } from "../../components/HeaderSection/HeaderSection";
import "./Gallery.css";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

export const Gallery = () => {
  const [lightbox, setLightbox] = useState(-1);
  const open = lightbox >= 0;

  const move = useCallback(
    (dir) => setLightbox((i) => (i + dir + images.length) % images.length),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(-1);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  return (
    <section id="gallery" className="section gallery">
      <div className="wrap">
        <HeaderSection
          eyebrow="Gallery"
          title={
            <>
              Inside <em>Medicio</em>
            </>
          }
          description="Take a look at our clinics, labs and the spaces designed around your comfort."
        />
      </div>

      <div className="gallery-slider reveal" data-anim="zoom">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Keyboard]}
          effect="coverflow"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 160, modifier: 1.4, slideShadows: false }}
          slidesPerView="auto"
          centeredSlides
          grabCursor
          loop
          keyboard={{ enabled: true, onlyInViewport: true }}
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation={{ prevEl: ".g-prev", nextEl: ".g-next" }}
          className="mySwiper"
        >
          {images.map((src, i) => (
            <SwiperSlide key={src}>
              <button className="g-item" onClick={() => setLightbox(i)} aria-label={`Open image ${i + 1}`}>
                <img className="slide-img" src={src} alt={`Medicio facility ${i + 1}`} loading="lazy" />
                <span className="g-zoom">
                  <IoExpand />
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="wrap g-nav">
          <button className="g-prev" aria-label="Previous image">
            <IoIosArrowBack />
          </button>
          <button className="g-next" aria-label="Next image">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {open && (
        <div className="lightbox" onClick={() => setLightbox(-1)} role="dialog" aria-modal="true">
          <button className="lb-close" aria-label="Close">
            <IoClose />
          </button>
          <button className="lb-arrow left" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous">
            <IoIosArrowBack />
          </button>
          <img key={lightbox} src={images[lightbox]} alt={`Medicio facility ${lightbox + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className="lb-arrow right" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next">
            <IoIosArrowForward />
          </button>
          <span className="lb-count">
            {lightbox + 1} / {images.length}
          </span>
        </div>
      )}
    </section>
  );
};
