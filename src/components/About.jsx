import { useEffect, useRef } from "react";

import "./About.css";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements =
      section.querySelectorAll(".about-reveal");

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

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="about-container">

        {/* MAIN HEADING */}

        <div className="about-top">
          <div className="about-intro about-reveal">

            <div className="about-kicker">
              <span className="about-kicker-line"></span>
              <span>ABOUT KALAKRIT</span>
            </div>

            <div className="about-heading-meta">
              <span>03 / ABOUT</span>
              <span>CREATIVE STUDIO</span>
            </div>

            <h1>
              WE DON'T JUST DESIGN.
              <br />
              <span>WE BUILD PERCEPTION.</span>
            </h1>

          </div>
        </div>


        {/* CONTENT */}

        <div className="about-content">

          <div className="about-copy">

            <p className="about-lead about-reveal">
              Kalakrit Studio is a creative design and branding
              studio built for brands that want to stand out,
              communicate better, and create a strong visual
              presence.
            </p>


            <p className="about-reveal about-delay-1">
              We believe good design is not just about making
              something look beautiful. It is about understanding
              what a brand stands for, who it wants to speak to,
              and how it wants to be remembered. Every colour,
              typeface, layout, image, animation and creative
              decision has a purpose.
            </p>


            <p className="about-reveal about-delay-2">
              We work with businesses, founders, startups and
              growing brands to transform their ideas into
              meaningful visual identities and creative
              communication. From the first concept to the final
              execution, we combine strategy, design and
              creativity to create work that feels intentional
              rather than ordinary.
            </p>


            <p className="about-reveal about-delay-3">
              Whether it is a complete brand identity, packaging
              redesign, social media presence, campaign creative
              or content production, our approach stays the same
              — understand the brand first, then create something
              people actually notice.
            </p>


            <p className="about-final-line about-reveal about-delay-4">
              Because your brand deserves more than just another
              design.
            </p>


            <button
              type="button"
              className="about-link about-reveal about-delay-5"
              onClick={scrollToContact}
            >
              <span>
                LET'S CREATE SOMETHING DIFFERENT
              </span>

              <span className="about-link-arrow">
                ↗
              </span>
            </button>

          </div>

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="about-statement about-reveal">

          <span>IDEAS</span>

          <span className="statement-symbol">
            ×
          </span>

          <span>IDENTITY</span>

          <span className="statement-symbol">
            ×
          </span>

          <span>IMPACT</span>

        </div>

      </div>
    </section>
  );
}

export default About;