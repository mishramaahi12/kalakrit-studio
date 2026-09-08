import { useEffect, useRef } from "react";

import { ArrowUpRight, Quote } from "lucide-react";

import "./Testimonials.css";

function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements =
      section.querySelectorAll(".testimonial-reveal");

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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
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

  const testimonials = [
    {
      number: "01",
      quote:
        "Kalakrit Studio understood our vision and turned it into a visual identity that actually felt like us.",
      name: "Riya Shah",
    },
    {
      number: "02",
      quote:
        "The creative direction, attention to detail and overall design quality completely changed how we presented our brand.",
      name: "Arjun Mehta",
    },
    {
      number: "03",
      quote:
        "They don't just make things look good. They understand the idea behind the brand and make it memorable.",
      name: "Karan Patel",
    },
  ];

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      ref={sectionRef}
    >
      <div className="testimonials-glow testimonials-glow-one"></div>

      <div className="testimonials-glow testimonials-glow-two"></div>

      <div className="testimonials-container">

        {/* HEADER */}
        <div className="testimonials-header testimonial-reveal">
          <div className="testimonials-kicker">
            <span className="testimonials-kicker-line"></span>

            <span>CLIENT STORIES</span>
          </div>

          <div className="testimonials-heading-meta">
            <span>08 / TESTIMONIALS</span>

            <span>WORDS THAT MATTER</span>
          </div>

          <h1>
            DON&apos;T TAKE OUR WORD
            <br />
            <span>FOR IT.</span>
          </h1>
        </div>

        {/* FEATURE QUOTE */}
        <div className="testimonials-feature testimonial-reveal testimonial-delay-1">
          <div className="testimonial-feature-icon">
            <Quote
              size={24}
              strokeWidth={1.5}
            />
          </div>

          <p>
            “Great design is something you notice.
            Great branding is something you remember.”
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card testimonial-reveal ${
                index === 1
                  ? "testimonial-delay-2"
                  : index === 2
                    ? "testimonial-delay-3"
                    : "testimonial-delay-1"
              }`}
              key={testimonial.number}
            >
              <div className="testimonial-card-top">
                <span>{testimonial.number}</span>

                <ArrowUpRight
                  className="testimonial-card-arrow"
                  size={20}
                  strokeWidth={1.5}
                />
              </div>

              <div className="testimonial-card-content">
                <Quote
                  className="testimonial-quote-mark"
                  size={25}
                  strokeWidth={1.4}
                />

                <p>{testimonial.quote}</p>
              </div>

              {/* ONLY CLIENT NAME */}
              <div className="testimonial-card-footer">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="testimonials-bottom testimonial-reveal testimonial-delay-3">
          <div className="testimonials-bottom-line"></div>

          <div className="testimonials-bottom-content">
            <span>YOUR STORY COULD BE NEXT.</span>

            <button
              type="button"
              onClick={scrollToContact}
              className="testimonials-cta"
            >
              <span>START A PROJECT</span>

              <span className="testimonials-cta-icon">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;