import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import "./WhyUs.css";

import logoImage from "../assets/Work/outloud-brand-identity.jpg";
import instagramImage from "../assets/Work/limelight-news-branding.jpg";
import packagingImage from "../assets/Work/spm-shikhai-branding-packaging.png";
import advertisementImage from "../assets/Work/galileo-solar-branding.jpg";

function WhyUs() {
  const sectionRef = useRef(null);

  const [activeFormula, setActiveFormula] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".whyus-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const repeatedIdeas = [
    {
      number: "01",
      title: "OUTLOUD",
      image: logoImage,
    },
    {
      number: "02",
      title: "LIMELIGHT NEWS",
      image: instagramImage,
    },
    {
      number: "03",
      title: "SPM SHIKHAI",
      image: packagingImage,
    },
    {
      number: "04",
      title: "GALILEO SOLAR",
      image: advertisementImage,
    },
  ];

  const formulaItems = [
    {
      word: "STRATEGY",
      text: "We understand the brand, audience, goals and direction before creating anything.",
    },
    {
      word: "CREATIVITY",
      text: "We explore fresh concepts and ideas that give the brand its own personality.",
    },
    {
      word: "DESIGN",
      text: "We turn the creative direction into a strong and consistent visual language.",
    },
    {
      word: "EXECUTION",
      text: "We make sure the final creative works properly across every real-world touchpoint.",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <main
        className="whyus-page"
        ref={sectionRef}
      >
        <div className="whyus-glow whyus-glow-one"></div>
        <div className="whyus-glow whyus-glow-two"></div>

        <div className="whyus-container">
          {/* =====================================================
              HERO
              ===================================================== */}

          <header className="whyus-hero whyus-reveal">
            <div className="whyus-topline">
              <span className="whyus-label">
                WHY KALAKRIT
              </span>

              <span className="whyus-index">
                06 / WHY US
              </span>
            </div>

            <h1>
              BECAUSE AVERAGE IS
              <br />
              <span>ALREADY EVERYWHERE.</span>
            </h1>

            <div className="whyus-hero-bottom">
              <p>
                We don't want to create another version
                of something that already exists.
              </p>

              <ArrowUpRight
                size={26}
                strokeWidth={1.3}
                className="whyus-hero-arrow"
              />
            </div>
          </header>

          {/* =====================================================
              REPETITION
              ===================================================== */}

          <section className="whyus-repetition">
            <div className="whyus-section-number whyus-reveal">
              01
            </div>

            <div className="whyus-repetition-content">
              <span className="whyus-section-label whyus-reveal">
                THE PROBLEM
              </span>

              <p className="whyus-intro whyus-reveal whyus-delay-1">
                There are thousands of designs being created
                every single day.
              </p>

              <div className="whyus-list">
                {repeatedIdeas.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`whyus-list-item whyus-reveal whyus-delay-${
                      index + 1
                    }`}
                    onClick={() => openProject(item)}
                    aria-label={`View ${item.title} project`}
                  >
                    <span className="whyus-list-number">
                      {item.number}
                    </span>

                    <div className="whyus-list-image">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    <strong>
                      {item.title}
                    </strong>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.3}
                    />
                  </button>
                ))}
              </div>

              <p className="whyus-question whyus-reveal whyus-delay-5">
                We don't want to be another one.
              </p>
            </div>
          </section>

          {/* =====================================================
              DIFFERENCE
              ===================================================== */}

          <section className="whyus-difference">
            <div className="whyus-section-number whyus-reveal">
              02
            </div>

            <div className="whyus-difference-content">
              <span className="whyus-section-label whyus-reveal">
                THE DIFFERENCE
              </span>

              <h2 className="whyus-reveal whyus-delay-1">
                FIND THE IDEA
                <br />
                <span>BEHIND THE DESIGN.</span>
              </h2>

              <div className="whyus-copy whyus-reveal whyus-delay-2">
                <p>
                  At Kalakrit Studio, we focus on finding the
                  idea behind the design.
                </p>

                <p>
                  We look for the detail that can make someone
                  stop scrolling, pick up a product, remember a
                  brand or simply say, "This feels different."
                </p>

                <p>
                  We combine creative thinking with practical
                  design to make sure the work isn't only
                  visually attractive but also works for the
                  brand behind it.
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================
              FORMULA
              ===================================================== */}

          <section className="whyus-formula whyus-reveal">
            <div className="whyus-formula-top">
              <span>03 / OUR FORMULA</span>
              <span>BUILT TO WORK</span>
            </div>

            <div className="whyus-formula-main">
              {formulaItems.map((item, index) => (
                <div
                  className={`whyus-formula-item ${
                    activeFormula === index
                      ? "is-open"
                      : ""
                  }`}
                  key={item.word}
                >
                  <button
                    type="button"
                    className="whyus-formula-line"
                    onClick={() =>
                      setActiveFormula(
                        activeFormula === index
                          ? null
                          : index
                      )
                    }
                    aria-expanded={
                      activeFormula === index
                    }
                  >
                    <span>
                      {item.word}
                    </span>

                    <b>
                      {activeFormula === index
                        ? "−"
                        : "+"}
                    </b>
                  </button>

                  <div className="whyus-formula-description">
                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="whyus-formula-result">
              <span>
                THAT'S OUR FORMULA.
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.3}
              />
            </div>
          </section>

          {/* =====================================================
              FINAL
              ===================================================== */}

          <section className="whyus-final whyus-reveal">
            <div className="whyus-final-number">
              04
            </div>

            <div className="whyus-final-content">
              <span className="whyus-section-label">
                THE KALAKRIT APPROACH
              </span>

              <h2>
                MAKE PEOPLE
                <br />
                <span>FEEL SOMETHING.</span>
              </h2>

              <p>
                Good design gets noticed.
                Great creative makes people care.
              </p>
            </div>
          </section>

          {/* =====================================================
              END
              ===================================================== */}

          <div className="whyus-end whyus-reveal">
            <span>
              KALAKRIT STUDIO
            </span>

            <span>
              WHERE IDEAS BECOME BRANDS.
            </span>

            <span>
              2026
            </span>
          </div>
        </div>
      </main>

      {/* =========================================================
          PROJECT MODAL
          
          IMPORTANT:
          This is rendered through createPortal directly into BODY.
          So it cannot get trapped behind Navbar or parent stacking
          contexts.
          ========================================================= */}

      {selectedProject &&
        createPortal(
          <div
            className="whyus-project-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} project preview`}
            onClick={closeProject}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="whyus-project-close"
              onClick={closeProject}
              aria-label="Close project preview"
            >
              <X
                size={28}
                strokeWidth={2.2}
              />
            </button>

            {/* MODAL CONTENT */}

            <div
              className="whyus-project-modal-inner"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="whyus-project-modal-label">
                <span>
                  {selectedProject.number} / SELECTED WORK
                </span>

                <strong>
                  {selectedProject.title}
                </strong>
              </div>

              <div className="whyus-project-modal-image">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default WhyUs;