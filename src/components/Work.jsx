import { useEffect, useRef, useState } from "react";

import { ArrowUpRight } from "lucide-react";

import "./Work.css";

function Work() {
  const sectionRef = useRef(null);

  const [statsStarted, setStatsStarted] = useState(false);
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements =
      section.querySelectorAll(".work-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
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

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const stats = section.querySelector(".work-stats");

    if (!stats) return;

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsStarted) {
            setStatsStarted(true);
            statsObserver.disconnect();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    statsObserver.observe(stats);

    return () => {
      statsObserver.disconnect();
    };
  }, [statsStarted]);

  useEffect(() => {
    if (!statsStarted) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      setYears(Math.floor(3 * easedProgress));
      setClients(Math.floor(600 * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setYears(3);
        setClients(600);
      }
    };

    requestAnimationFrame(animate);
  }, [statsStarted]);

  const scrollToContact = () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="work-page"
      id="work"
      ref={sectionRef}
    >
      <div className="work-grid-bg">
        <span className="work-glow work-glow-one"></span>
        <span className="work-glow work-glow-two"></span>
        <span className="work-glow work-glow-three"></span>
      </div>

      <div className="work-container">

        {/* HEADER */}

        <div className="work-header">
          <div className="work-kicker work-reveal">
            <span className="work-kicker-line"></span>
            <span>SELECTED WORK</span>
          </div>

          <div className="work-index work-reveal work-delay-1">
            <span>02</span>
            <span>/</span>
            <span>WORK</span>
          </div>

          <h2 className="work-heading work-reveal work-delay-2">
            IDEAS WE'VE
            <br />
            <span>TURNED INTO IMPACT.</span>
          </h2>

          <p className="work-intro work-reveal work-delay-3">
            We build identities, campaigns and creative
            systems that help brands look sharper,
            communicate clearly and stay remembered.
          </p>
        </div>

        {/* STATS */}

        <div className="work-stats">

          <div className="work-stat work-reveal work-delay-1">
            <div className="work-stat-top">
              <span>01 / EXPERIENCE</span>

              <ArrowUpRight
                size={20}
                strokeWidth={1.7}
              />
            </div>

            <div className="work-stat-number">
              <span className="work-stat-highlight">
                {years}+
              </span>
            </div>

            <div className="work-stat-label">
              YEARS EXPERIENCE
            </div>

            <p>
              YEARS OF CREATIVE
              <br />
              EXPERIENCE
            </p>

            <div className="work-stat-corner">
              01
            </div>
          </div>

          <div className="work-stat-divider"></div>

          <div className="work-stat work-reveal work-delay-2">
            <div className="work-stat-top">
              <span>02 / CLIENTS</span>

              <ArrowUpRight
                size={20}
                strokeWidth={1.7}
              />
            </div>

            <div className="work-stat-number">
              <span className="work-stat-highlight">
                {clients}+
              </span>
            </div>

            <div className="work-stat-label">
              CLIENTS
            </div>

            <p>
              BRANDS &
              <br />
              BUSINESSES
            </p>

            <div className="work-stat-corner">
              02
            </div>
          </div>

        </div>

        {/* STATEMENT */}

        <div className="work-statement work-reveal">
          <span className="work-statement-line"></span>

          <p>
            WE CREATE WORK THAT
            <strong> PEOPLE NOTICE.</strong>
          </p>

          <span className="work-statement-line"></span>
        </div>

        {/* FEATURE CTA */}

        <div className="work-feature work-reveal">
          <div className="work-feature-glow"></div>

          <div className="work-feature-orb work-feature-orb-one"></div>

          <div className="work-feature-orb work-feature-orb-two"></div>

          <div className="work-feature-ring"></div>

          <div className="work-feature-content">
            <div className="work-feature-small">
              WHAT'S NEXT?
            </div>

            <h2>
              YOUR NEXT
              <br />
              <span className="work-feature-gradient-text">
                PROJECT.
              </span>
            </h2>

            <p>
              Every great project starts with an idea.
              Maybe yours is next.
            </p>
          </div>

          <button
            type="button"
            className="work-feature-button"
            onClick={scrollToContact}
          >
            <span>START A PROJECT</span>

            <ArrowUpRight
              size={20}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* END */}

        <div className="work-end work-reveal">
          <span>02</span>

          <span></span>

          <span>KEEP SCROLLING</span>
        </div>

      </div>
    </section>
  );
}

export default Work;