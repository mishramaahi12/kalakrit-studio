import { useEffect, useRef } from "react";

import "./Pricing.css";

function Pricing() {
  const pageRef = useRef(null);

  useEffect(() => {
    const elements =
      pageRef.current?.querySelectorAll(".pricing-reveal");

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

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const packages = [
    {
      number: "01",
      name: "ESSENTIAL",
      price: "₹18,000",
      description:
        "For brands building a consistent creative presence.",
      features: [
        "Social Media Management",
        "Creative Posts",
        "Reels",
        "Stories",
        "Content Planning",
        "Caption & Hashtag Support",
        "Monthly Creative Direction",
        "Performance Overview",
      ],
      note: "STARTING FROM ₹18K / MONTH",
    },

    {
      number: "02",
      name: "GROWTH",
      price: "₹30,000",
      description:
        "For brands ready to level up their content.",
      features: [
        "Everything in Essential",
        "Increased Content Output",
        "Premium Social Media Creatives",
        "Professional Reel Editing",
        "Content Shoot",
        "Creative Campaign Concepts",
        "Content Strategy",
        "Monthly Analytics",
        "Priority Communication",
      ],
      note: "STARTING FROM ₹30K / MONTH",
      featured: true,
    },

    {
      number: "03",
      name: "PREMIUM",
      price: "₹45,000",
      description:
        "For brands looking for a complete creative system.",
      features: [
        "Everything in Growth",
        "Premium Brand Creatives",
        "Multiple Content Shoots",
        "Professional Photography",
        "Cinematic Reel Editing",
        "Campaign Development",
        "Creative Direction",
        "Social Media Strategy",
        "Detailed Monthly Reporting",
        "Priority Support",
      ],
      note: "STARTING FROM ₹45K / MONTH",
    },

    {
      number: "04",
      name: "SIGNATURE",
      price: "₹65,000",
      description:
        "For brands wanting a dedicated creative partner.",
      features: [
        "Complete Social Media Management",
        "Premium Content Creation",
        "Professional Photography",
        "Multiple Content Shoots",
        "High-End Reel Production",
        "Creative Campaigns",
        "Brand Communication",
        "Creative Strategy",
        "Monthly Analytics & Insights",
        "Dedicated Creative Direction",
        "Priority Support",
      ],
      note: "STARTING FROM ₹65K / MONTH",
    },
  ];

  return (
    <main className="pricing-page" ref={pageRef}>
      <div className="pricing-glow pricing-glow-one"></div>

      <div className="pricing-glow pricing-glow-two"></div>

      <div className="pricing-container">

        {/* HEADER */}

        <header className="pricing-header pricing-reveal">
          <div className="pricing-kicker">
            <span className="pricing-kicker-line"></span>

            <span>CREATIVE PARTNERSHIPS</span>
          </div>

          <div className="pricing-header-meta">
            <span>05 / PRICING</span>

            <span>BUILT FOR GROWTH</span>
          </div>

          <h1>
            THAT GROW
            <br />
            <span>WITH YOUR BRAND.</span>
          </h1>

          <div className="pricing-header-bottom">
            <p className="pricing-header-lead">
              We don't believe every brand needs the same package.
            </p>

            <p>
              That's why our creative partnerships are designed
              around different stages of growth — from brands
              looking to establish a strong presence to businesses
              ready to build a complete creative ecosystem.
            </p>
          </div>
        </header>

        {/* PRICING GRID */}

        <section className="pricing-grid">
          {packages.map((pkg, index) => (
            <article
              key={pkg.number}
              className={`pricing-card pricing-reveal pricing-delay-${index} ${
                pkg.featured ? "featured" : ""
              }`}
            >
              <div className="pricing-shine"></div>

              <div className="pricing-card-number">
                {pkg.number}
              </div>

              {pkg.featured && (
                <div className="pricing-popular">
                  MOST POPULAR
                </div>
              )}

              <div className="pricing-card-main">
                <div className="pricing-card-heading">
                  <h2>{pkg.name}</h2>

                  <p>
                    {pkg.description}
                  </p>
                </div>

                <div className="pricing-price">
                  <span>{pkg.price}</span>

                  <small>/ MONTH</small>
                </div>

                <div className="pricing-line"></div>

                <ul className="pricing-features">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={feature}>
                      <span className="pricing-feature-number">
                        {String(featureIndex + 1).padStart(2, "0")}
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-card-footer">
                <span>
                  {pkg.note}
                </span>

                <button
                  type="button"
                  className="pricing-card-link"
                  aria-label={`Choose ${pkg.name} package`}
                  onClick={scrollToContact}
                >
                  <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* CUSTOM PACKAGE */}

        <section className="pricing-custom pricing-reveal">
          <div className="pricing-custom-number">
            05
          </div>

          <div className="pricing-custom-content">
            <span className="pricing-custom-label">
              CUSTOM PARTNERSHIP
            </span>

            <h2>
              NEED SOMETHING
              <br />
              <span>BUILT DIFFERENT?</span>
            </h2>

            <p>
              Let's build a package around your brand.
            </p>
          </div>

          <button
            type="button"
            className="pricing-custom-button"
            onClick={scrollToContact}
          >
            <span>
              DISCUSS YOUR PROJECT
            </span>

            <span>
              ↗
            </span>
          </button>
        </section>

        {/* BOTTOM STATEMENT */}

        <div className="pricing-statement pricing-reveal">
          <span>YOUR BRAND</span>

          <b>×</b>

          <span>YOUR STAGE</span>

          <b>×</b>

          <span>YOUR GROWTH</span>
        </div>

      </div>
    </main>
  );
}

export default Pricing;