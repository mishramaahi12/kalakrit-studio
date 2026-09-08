import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import "./FAQ.css";

function FAQ() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const revealElements = section.querySelectorAll(".faq-reveal");

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

    return () => {
      observer.disconnect();
    };
  }, []);

  const faqs = [
    {
      question: "What kind of brands do you work with?",
      answer:
        "We work with businesses, founders, startups and growing brands that want to build a stronger visual presence. Whether you are launching something new or looking to improve an existing brand, we can build a creative direction around your goals.",
    },
    {
      question: "Do you only work on social media?",
      answer:
        "No. Social media is one part of what we do. Our services also include brand identity, packaging design, graphic design, campaigns, content production, creative direction and other visual communication.",
    },
    {
      question: "Can you redesign our existing brand?",
      answer:
        "Absolutely. We can evaluate your current visual identity, understand what is working and what is not, and create a refined direction that feels more relevant, consistent and memorable.",
    },
    {
      question: "Do you provide content shoots?",
      answer:
        "Yes. Depending on the project or package, we can support content shoots, product photography, professional photography, reels and other creative content requirements.",
    },
    {
      question: "Can we get a custom package?",
      answer:
        "Yes. Every brand has different requirements. If the standard packages do not fit your needs, we can build a custom creative partnership around your content, branding and business goals.",
    },
    {
      question: "How do we start?",
      answer:
        "Simply get in touch with us and tell us a little about your brand, what you are looking to create and where you want to take it. We will understand your requirements and discuss the right creative direction.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

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
      className="faq-section"
      id="faq"
      ref={sectionRef}
    >
      <div className="faq-glow faq-glow-one"></div>
      <div className="faq-glow faq-glow-two"></div>

      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header faq-reveal">
          <div className="faq-kicker">
            <span className="faq-kicker-line"></span>
            <span>FREQUENTLY ASKED</span>
          </div>

          <div className="faq-heading-meta">
            <span>09 / FAQ</span>
            <span>GOOD QUESTIONS. CLEAR ANSWERS.</span>
          </div>

          <h1>
            QUESTIONS?
            <br />
            <span>WE&apos;VE GOT ANSWERS.</span>
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="faq-content">

          {/* FAQ LIST */}
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "is-open" : ""
                  }`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-question-left">
                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question-text">
                        {faq.question}
                      </span>
                    </div>

                    <span className="faq-icon">
                      <Plus
                        size={19}
                        strokeWidth={1.8}
                      />
                    </span>
                  </button>

                  {/* ANSWER ONLY EXISTS WHEN OPEN */}
                  {isOpen && (
                    <div className="faq-answer">
                      <div className="faq-answer-inner">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SIDE CARD */}
          <div className="faq-side faq-reveal faq-delay-2">
            <div className="faq-side-number">06</div>

            <div className="faq-side-content">
              <span>STILL HAVE A QUESTION?</span>

              <p>
                Let&apos;s talk about your brand, your idea
                and what we can create together.
              </p>

              <button
                type="button"
                className="faq-contact-link"
                onClick={scrollToContact}
              >
                <span>GET IN TOUCH</span>

                <span className="faq-contact-icon">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="faq-bottom faq-reveal faq-delay-3">
          <span>CLARITY BEFORE CREATIVITY.</span>

          <span className="faq-bottom-line"></span>

          <span>KALAKRIT STUDIO</span>
        </div>

      </div>
    </section>
  );
}

export default FAQ;