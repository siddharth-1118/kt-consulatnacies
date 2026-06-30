"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container header-container">
        <div className="logo-area">
          <div className="logo-symbol">KTC</div>
          <div className="logo-text">
            <h1>Shree Krishna Tax Consultants</h1>
            <span>K.T.C.</span>
          </div>
        </div>

        <nav className={`main-nav ${isMobileMenuOpen ? "active" : ""}`} id="main-nav">
          <ul>
            <li>
              <a href="#hero" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMobileMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#calculators" onClick={closeMobileMenu}>
                Tax Tools
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a
            href="https://wa.me/919849760371?text=Hi%2C%20I%20would%20like%20to%20consult%20regarding%20tax%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-whatsapp"
            id="nav-whatsapp-btn"
          >
            <svg viewBox="0 0 24 24" className="icon-svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.128.962 11.514.962c-5.442 0-9.866 4.372-9.87 9.802 0 1.772.487 3.498 1.411 5.013l-.995 3.634 3.738-.971c1.554.911 3.13 1.34 4.759 1.34zm8.397-6.427c-.244-.121-1.44-.703-1.662-.784-.222-.081-.383-.122-.544.121-.161.243-.624.784-.765.945-.141.161-.282.181-.526.06-1.523-.762-2.457-1.349-3.41-2.996-.252-.435.252-.404.721-1.34.079-.161.039-.302-.02-.423-.06-.121-.544-1.303-.746-1.789-.196-.473-.393-.409-.544-.417-.14-.007-.302-.008-.463-.008-.161 0-.423.06-.644.302-.222.242-.846.827-.846 2.016 0 1.189.866 2.336.986 2.498.121.162 1.705 2.576 4.13 3.617.577.247 1.028.395 1.38.507.579.183 1.107.157 1.524.095.465-.069 1.44-.587 1.642-1.153.202-.566.202-1.052.141-1.153-.06-.101-.222-.162-.465-.283z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <button
            className={`mobile-nav-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
