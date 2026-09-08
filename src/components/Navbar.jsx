import { useState, useEffect } from "react";
import logo from "../assets/kalakrit-logo-transparent.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="Kalakrit Studio"
            className="navbar-logo-img"
          />
        </a>

        <nav className={`navbar-nav ${menuOpen ? "active" : ""}`}>
          <div className="navbar-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="navbar-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="navbar-project-btn"
            onClick={closeMenu}
          >
            <span>Start a project</span>
            <span className="navbar-arrow">↗</span>
          </a>
        </nav>

        <button
          className={`navbar-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;