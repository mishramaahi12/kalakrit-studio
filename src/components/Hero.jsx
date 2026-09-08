import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import "./Hero.css";

const services = [
  "BRANDING",
  "PACKAGING",
  "SOCIAL MEDIA",
  "CONTENT",
  "CREATIVE",
];

function Hero() {
  const sectionRef = useRef(null);
  const orbOneWrapRef = useRef(null);
  const orbTwoWrapRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    if (orbOneWrapRef.current) {
      orbOneWrapRef.current.style.transform =
        `translate(${x * 40}px, ${y * 40}px)`;
    }

    if (orbTwoWrapRef.current) {
      orbTwoWrapRef.current.style.transform =
        `translate(${x * -32}px, ${y * -32}px)`;
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hero-page">
      <section
        className="hero-section glow-wrap"
        ref={sectionRef}
        onMouseMove={handleMouseMove}
      >

        {/* BACKGROUND GLOW */}

        <div
          className="hero-orb-parallax"
          ref={orbOneWrapRef}
        >
          <div className="hero-orb hero-orb-one"></div>
        </div>

        <div
          className="hero-orb-parallax"
          ref={orbTwoWrapRef}
        >
          <div className="hero-orb hero-orb-two"></div>
        </div>


        <div className="hero-content">

          {/* EYEBROW */}

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line"></span>

            <span>
              DESIGN & DIGITAL CRAFT STUDIO
            </span>

            <span className="hero-eyebrow-dot"></span>

            <span>
              AHMEDABAD
            </span>
          </div>


          {/* MAIN HEADING */}

          <div className="hero-heading-wrap">

            <span className="hero-side-mark">
              01 / INTRO
            </span>

            <h1 className="hero-title">

              <span className="line-clip">
                <span className="line-inner line-inner-1">
                  WE SAW YOUR BRAND.
                </span>
              </span>

              <span className="line-clip">
                <span className="line-inner line-inner-2">
                  <span className="gradient-live">
                    WE HAVE IDEAS.
                  </span>
                </span>
              </span>

            </h1>

          </div>


          {/* BOTTOM CONTENT */}

          <div className="hero-bottom">

            <div className="hero-description-wrap">

              <span className="hero-description-label">
                CREATIVE PARTNERS FOR AMBITIOUS BRANDS
              </span>

              <p className="hero-description">
                We build brands that look good, feel right,
                and stay remembered.
              </p>

            </div>


            {/* BUTTONS */}

            <div className="hero-actions">

              <button
                type="button"
                className="hero-primary-btn"
                onClick={() =>
                  scrollToSection("contact")
                }
              >
                <span>
                  LET'S CREATE
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                />
              </button>


              <button
                type="button"
                className="hero-secondary-btn"
                onClick={() =>
                  scrollToSection("work")
                }
              >
                <span>
                  VIEW OUR WORK
                </span>

                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                />
              </button>

            </div>

          </div>

        </div>


        {/* SERVICES MARQUEE */}

        <div className="hero-services">

          <div className="hero-services-inner">

            <span className="hero-services-label">
              WE CREATE
            </span>

            <div className="hero-marquee">

              <div className="hero-marquee-track">

                {[...services, ...services].map(
                  (item, i) => (
                    <span
                      className="hero-marquee-group"
                      key={`${item}-${i}`}
                    >
                      <span className="hero-service-item">
                        {item}
                      </span>

                      <span className="hero-service-dot"></span>
                    </span>
                  )
                )}

              </div>

            </div>

          </div>

        </div>


        {/* SCROLL INDICATOR */}

        <button
          type="button"
          className="hero-scroll"
          onClick={() =>
            scrollToSection("about")
          }
        >
          <span>
            SCROLL TO EXPLORE
          </span>

          <span className="hero-scroll-line"></span>

          <span>
            ↓
          </span>
        </button>

      </section>
    </div>
  );
}

export default Hero;