import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>KALAKRIT STUDIO</h2>
            <p>Where Ideas Become Brands.</p>
          </div>

          <div className="footer-services">
            <a href="#services">Branding</a>
            <a href="#services">Packaging</a>
            <a href="#services">Social Media</a>
            <a href="#services">Content</a>
            <a href="#services">Creative</a>
            <a href="#services">Design</a>
          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 Kalakrit Studio. All Rights Reserved.
          </span>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;