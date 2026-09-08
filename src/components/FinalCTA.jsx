import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import "./FinalCTA.css";

function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements =
      section.querySelectorAll(".final-cta-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="final-cta-section"
      id="final-cta"
      ref={sectionRef}
    >
      <div className="final-cta-glow final-cta-glow-one"></div>
      <div className="final-cta-glow final-cta-glow-two"></div>

      <div className="final-cta-grid"></div>

      <div className="final-cta-container">

        {/* TOP META */}
        <div className="final-cta-meta final-cta-reveal">
          <span className="final-cta-kicker">
            <span className="final-cta-kicker-line"></span>
            LET&apos;S CREATE SOMETHING MEMORABLE
          </span>

          <span className="final-cta-number">
            10 / START
          </span>
        </div>

        {/* MAIN HEADING */}
        <div className="final-cta-heading final-cta-reveal">
          <h1>
            YOUR BRAND DESERVES
            <br />
            <span>TO BE REMEMBERED.</span>
          </h1>
        </div>

        {/* CONTENT */}
        <div className="final-cta-content">

          <div className="final-cta-copy final-cta-reveal">
            <p className="final-cta-lead">
              You already have the idea.
              <br />
              The product. The ambition.
            </p>

            <p>
              What you need is the right creative direction
              to turn it into something people don&apos;t just
              see — something they remember.
            </p>
          </div>

          <div className="final-cta-action final-cta-reveal">
            <button
              type="button"
              className="final-cta-button"
              onClick={scrollToContact}
            >
              <span>START A PROJECT</span>

              <span className="final-cta-button-icon">
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.7}
                />
              </span>
            </button>

            <span className="final-cta-action-note">
              TELL US WHAT YOU&apos;RE BUILDING.
            </span>
          </div>
        </div>

        {/* BOTTOM BRAND */}
        <div className="final-cta-bottom final-cta-reveal">
          <div className="final-cta-brand">
            <span>KALAKRIT STUDIO</span>
            <small>WHERE IDEAS BECOME BRANDS.</small>
          </div>

          <div className="final-cta-formula">
            <span>IDEA</span>
            <i>×</i>
            <span>CREATIVITY</span>
            <i>×</i>
            <span>IMPACT</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;