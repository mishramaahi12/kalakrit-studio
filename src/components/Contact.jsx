import { useEffect, useRef } from "react";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const pageRef = useRef(null);

  useEffect(() => {
    const elements =
      pageRef.current?.querySelectorAll(".contact-reveal");

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

    return () => observer.disconnect();
  }, []);

  const contactDetails = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "kalakritstudio@gmail.com",
      href: "mailto:kalakritstudio@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 93282 48925",
      href: "tel:+919328248925",
    },
    {
      icon: null,
      label: "INSTAGRAM",
      value: "@kalakritstudio_",
      href: "https://www.instagram.com/kalakritstudio_/",
      external: true,
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Ahmedabad, Gujarat, India",
      href: "https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C%20Gujarat%2C%20India",
      external: true,
    },
  ];

  return (
    <main
      className="contact-page"
      id="contact"
      ref={pageRef}
    >
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* HERO */}
        <header className="contact-hero contact-reveal">
          <div className="contact-hero-top">
            <span className="contact-kicker">
              GET IN TOUCH
            </span>

            <span className="contact-hero-index">
              11 / CONTACT
            </span>
          </div>

          <h1>
            LET&apos;S MAKE
            <br />
            <span>SOMETHING MATTER.</span>
          </h1>

          <div className="contact-hero-bottom">
            <p>
              Have a brand, product or idea that deserves
              better creative direction?
            </p>

            <span className="contact-scroll-mark">
              ↓ SCROLL TO CONNECT
            </span>
          </div>
        </header>

        {/* INTRO */}
        <section className="contact-intro contact-reveal contact-delay-1">
          <div className="contact-intro-number">
            01
          </div>

          <div className="contact-intro-content">
            <span className="contact-section-label">
              START WITH AN IDEA
            </span>

            <h2>
              TELL US
              <br />
              <span>WHAT YOU&apos;RE BUILDING.</span>
            </h2>

            <div className="contact-intro-copy">
              <p>Have a project in mind?</p>
              <p>Need a new identity?</p>
              <p>Want to redesign your packaging?</p>
              <p>Need better social media content?</p>

              <p>
                Or simply have an idea you don&apos;t know
                how to execute?
              </p>

              <strong>
                Tell us about it.
              </strong>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS */}
        <section className="contact-details contact-reveal contact-delay-2">
          <div className="contact-details-heading">
            <span>
              02 / FIND US
            </span>

            <p>
              PICK YOUR WAY IN.
            </p>
          </div>

          <div className="contact-list">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`contact-item contact-reveal contact-delay-${
                    index + 2
                  }`}
                >
                  <span className="contact-item-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="contact-item-icon">
                    {Icon ? (
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                      />
                    ) : (
                      <span className="instagram-mark">
                        ◎
                      </span>
                    )}
                  </div>

                  <div className="contact-item-info">
                    <span className="contact-item-label">
                      {item.label}
                    </span>

                    <span className="contact-item-value">
                      {item.value}
                    </span>
                  </div>

                  <span className="contact-item-arrow">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* STATEMENT */}
        <section className="contact-statement contact-reveal contact-delay-3">
          <div className="contact-statement-number">
            03
          </div>

          <div className="contact-statement-content">
            <span className="contact-section-label">
              WHY KALAKRIT
            </span>

            <h2>
              YOUR BRAND
              <br />
              <span>
                DESERVES TO BE REMEMBERED.
              </span>
            </h2>

            <p>
              You already have the idea.
            </p>

            <p>
              You already have the product.
            </p>

            <p>
              You already have the ambition.
            </p>

            <p className="contact-statement-highlight">
              Now you need the right creative direction
              to bring it all together.
            </p>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="contact-cta-section contact-reveal contact-delay-4">
          <div className="contact-cta-label">
            <span>04</span>
            <span>LET&apos;S CREATE</span>
          </div>

          <h2>
            READY TO
            <br />
            <span>MAKE YOUR MARK?</span>
          </h2>

          <p>
            Let&apos;s build something people don&apos;t just see —
            something they remember.
          </p>

          <a
            href="mailto:kalakritstudio@gmail.com"
            className="contact-main-cta"
          >
            <span>
              START A PROJECT
            </span>

            <span className="contact-cta-arrow">
              ↗
            </span>
          </a>
        </section>

        {/* END */}
        <div className="contact-end contact-reveal contact-delay-5">
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
  );
}

export default Contact;