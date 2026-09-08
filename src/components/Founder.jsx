import { useEffect, useRef } from "react";

import { ArrowUpRight } from "lucide-react";

import founderPhoto from "../assets/Founder/founder.jpg";

import "./Founder.css";

function Founder() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements =
      section.querySelectorAll(".founder-reveal");

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
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
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
      className="founder-section"
      id="founder"
      ref={sectionRef}
    >
      {/* Background glow */}
      <div className="founder-glow founder-glow-one"></div>
      <div className="founder-glow founder-glow-two"></div>

      <div className="founder-container">
        {/* =========================================
            TOP HEADER
            ========================================= */}

        <div className="founder-top founder-reveal">
          <div className="founder-kicker">
            <span className="founder-kicker-line"></span>
            <span>THE FOUNDER</span>
          </div>

          <div className="founder-heading-meta">
            <span>05 / FOUNDER</span>
            <span>CREATIVE LEADERSHIP</span>
          </div>

          <h1>
            THE PERSON
            <br />
            <span>BEHIND KALAKRIT.</span>
          </h1>
        </div>

        {/* =========================================
            FOUNDER CONTENT
            ========================================= */}

        <div className="founder-content">
          {/* LEFT VISUAL */}

          <div className="founder-visual founder-reveal">
            <div className="founder-card">
              <div className="founder-card-top">
                <span>01</span>
                <span>KALAKRIT STUDIO</span>
              </div>

              <div className="founder-card-center">
                <div className="founder-photo-wrap">
                  <img
                    src={founderPhoto}
                    alt="Poorabh Maheshwari"
                    className="founder-photo"
                  />
                </div>

                <div className="founder-orbit founder-orbit-one"></div>
                <div className="founder-orbit founder-orbit-two"></div>

                <div className="founder-cross founder-cross-one"></div>
                <div className="founder-cross founder-cross-two"></div>
              </div>

              <div className="founder-card-bottom">
                <span>FOUNDER</span>
                <span>CREATIVE LEAD</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="founder-info">
            <div className="founder-name-block founder-reveal">
              <span className="founder-small-label">
                FOUNDER &amp; CREATIVE LEAD
              </span>

              <h2>
                POORABH
                <br />
                <span>MAHESHWARI</span>
              </h2>
            </div>

            <div className="founder-line founder-reveal"></div>

            <p className="founder-description founder-reveal">
              Poorabh Maheshwari is a creative professional focused on
              design, branding and visual communication, with a passion
              for turning ideas into strong visual experiences.
            </p>

            <p className="founder-description founder-reveal">
              His approach to creativity comes from looking beyond just
              aesthetics — understanding what a brand wants to
              communicate, how people perceive it and how design can
              help create that connection.
            </p>

            <p className="founder-description founder-reveal">
              From brand identities and packaging to social media
              creatives, campaigns and digital content, his work focuses
              on creating visuals that are not only attractive but
              purposeful.
            </p>

            <p className="founder-description founder-reveal">
              With an eye for detail and a strong interest in modern
              design, Poorabh believes that every brand has a story to
              tell, and the right creative direction can turn that story
              into something people remember.
            </p>

            <div className="founder-quote founder-reveal">
              <span className="founder-quote-mark">“</span>

              <p>
                Creativity should not simply decorate a brand,
                but become a part of its identity, personality
                and growth.
              </p>
            </div>

            <div className="founder-bottom founder-reveal">
              <div className="founder-philosophy">
                <span>THE BELIEF</span>

                <strong>
                  IDEAS → IDENTITY → IMPACT
                </strong>
              </div>

              <button
                className="founder-cta"
                type="button"
                onClick={scrollToContact}
              >
                <span>START A PROJECT</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.8}
                />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM STATEMENT
            ========================================= */}

        <div className="founder-statement founder-reveal">
          <div className="founder-statement-number">
            05
          </div>

          <div className="founder-statement-text">
            <span>THE VISION</span>

            <p>
              BUILDING BRANDS THAT PEOPLE
              <strong> SEE, FEEL &amp; REMEMBER.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;