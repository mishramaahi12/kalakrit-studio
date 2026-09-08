import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Services.css";

function Services() {
  const sectionRef = useRef(null);
  const [activeApproach, setActiveApproach] = useState(0);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".service-reveal");

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

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "BRAND IDENTITY",
      description:
        "We create complete visual identities that give your brand a recognisable personality and a consistent presence across every touchpoint.",
      tags:
        "Logo Design · Brand Identity · Brand Guidelines · Typography · Colour System · Visual Language",
    },
    {
      number: "02",
      title: "PACKAGING DESIGN",
      description:
        "Your packaging is often the first physical interaction someone has with your product. We create packaging that communicates quality, personality and purpose while standing out on the shelf.",
      tags:
        "Product Packaging · Label Design · Box Design · Packaging Redesign · Product Mockups",
    },
    {
      number: "03",
      title: "SOCIAL MEDIA",
      description:
        "We turn social media into a proper brand experience instead of a collection of random posts. From visual direction to creative content, we build a consistent and engaging presence.",
      tags:
        "Social Media Design · Content Planning · Creative Posts · Carousels · Stories · Reels",
    },
    {
      number: "04",
      title: "CONTENT & CREATIVE",
      description:
        "Ideas need the right execution. We develop creative concepts and visual content designed to capture attention and communicate your message effectively.",
      tags:
        "Creative Campaigns · Reels · Product Videos · Motion Graphics · Creative Direction · Visual Concepts",
    },
    {
      number: "05",
      title: "GRAPHIC DESIGN",
      description:
        "From everyday brand communication to large-scale campaigns, we create designs that are visually strong, clear and aligned with your brand.",
      tags:
        "Marketing Creatives · Posters · Brochures · Presentations · Digital Ads · Print Design",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "UNDERSTAND",
      text:
        "We start by understanding your brand, your business, your audience, your competitors and most importantly, what makes you different.",
    },
    {
      number: "02",
      title: "STRATEGISE",
      text:
        "We define the creative direction, visual language and communication approach before moving into execution.",
    },
    {
      number: "03",
      title: "CREATE",
      text:
        "This is where ideas become visuals. We explore concepts, layouts, typography, colours, imagery and creative directions.",
    },
    {
      number: "04",
      title: "REFINE",
      text:
        "Good work gets better through refinement. We analyse, improve and polish every important detail until the design feels right.",
    },
    {
      number: "05",
      title: "LAUNCH",
      text:
        "The final creative is prepared for the real world — whether that means social media, packaging, print, digital campaigns or brand communication.",
    },
  ];

  return (
    <main className="services-page" ref={sectionRef}>
      <div className="services-glow services-glow-one"></div>
      <div className="services-glow services-glow-two"></div>
      <div className="services-grid"></div>

      <div className="services-container">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <header className="services-header service-reveal">
          <div className="services-kicker">
            <span className="services-kicker-line"></span>
            <span>WHAT WE DO</span>
          </div>

          <div className="services-header-content">
            <div className="services-header-meta">
              <span>03 / SERVICES</span>
              <span>CREATIVE STUDIO</span>
            </div>

            <h1>
              CREATIVE SERVICES
              <br />
              <span>BUILT AROUND YOUR BRAND.</span>
            </h1>

            <p>
              From strategy and identity to content and creative
              execution, we build visual experiences that help
              brands stand out, communicate better and stay
              remembered.
            </p>
          </div>
        </header>

        {/* =====================================================
            SERVICES LIST
            ===================================================== */}

        <section className="services-list">
          <div className="services-list-heading service-reveal">
            <span>01 / CAPABILITIES</span>
            <span>WHAT WE CAN CREATE</span>
          </div>

          {services.map((service, index) => (
            <article
              className={`service-item service-reveal service-delay-${index}`}
              key={service.number}
            >
              <div className="service-number">
                {service.number}
              </div>

              <div className="service-main">
                <div className="service-title-row">
                  <h2>{service.title}</h2>

                  <span className="service-title-dot"></span>
                </div>

                <p className="service-description">
                  {service.description}
                </p>

                <p className="service-tags">
                  {service.tags}
                </p>
              </div>

              <div className="service-arrow">
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.4}
                />
              </div>
            </article>
          ))}
        </section>

        {/* =====================================================
            OUR APPROACH
            ===================================================== */}

        <section className="approach-section service-reveal">

          <div className="approach-accent"></div>

          <div className="approach-top">
            <div className="approach-number">
              06
            </div>

            <div className="approach-heading">
              <span className="approach-kicker">
                HOW WE WORK
              </span>

              <h2>
                THINK.
                <br />
                CREATE.
                <br />
                <span>REFINE.</span>
              </h2>

              <p>
                Good creative doesn't happen by accident.
                We follow a process that gives every idea
                the space to become something stronger.
              </p>
            </div>
          </div>

          <div className="approach-workflow">

            <div className="approach-progress">
              <div
                className="approach-progress-fill"
                style={{
                  height: `${
                    ((activeApproach + 1) /
                      approach.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>

            <div className="approach-steps">
              {approach.map((step, index) => {
                const isActive =
                  activeApproach === index;

                return (
                  <div
                    className={`approach-step ${
                      isActive ? "is-active" : ""
                    }`}
                    key={step.number}
                  >
                    <button
                      type="button"
                      className="approach-step-button"
                      onClick={() =>
                        setActiveApproach(index)
                      }
                      aria-expanded={isActive}
                    >
                      <span className="approach-step-number">
                        {step.number}
                      </span>

                      <span className="approach-step-title">
                        {step.title}
                      </span>

                      <span className="approach-step-symbol">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>

                    <div className="approach-step-content">
                      <p>{step.text}</p>

                      <span className="approach-step-status">
                        STEP {step.number} / 05
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="approach-bottom">
            <span>FROM IDEA</span>

            <ArrowUpRight
              size={19}
              strokeWidth={1.3}
            />

            <span>TO EXECUTION</span>
          </div>
        </section>

        {/* =====================================================
            BOTTOM STATEMENT
            ===================================================== */}

        <div className="services-statement service-reveal">
          <div className="statement-line"></div>

          <div className="statement-content">
            <span>STRATEGY</span>
            <b>×</b>
            <span>CREATIVITY</span>
            <b>×</b>
            <span>EXECUTION</span>
          </div>

          <div className="statement-line"></div>
        </div>

      </div>
    </main>
  );
}

export default Services;