export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-area light">
            <div className="logo-symbol">KTC</div>
            <div className="logo-text">
              <h3>Shree Krishna Tax Consultants</h3>
              <span>K.T.C.</span>
            </div>
          </div>
          <p className="footer-desc">
            Professional and reliable tax advisory and bookkeeping services. Ensuring legal compliances and financial success for our valued clients.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#calculators">Tax Tools</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-credentials">
          <h4>Professional Scope</h4>
          <ul>
            <li>Income Tax Advisory</li>
            <li>GST Compliances</li>
            <li>Books Auditing Support</li>
            <li>Corporate Compliance</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; 2026 Shree Krishna Tax Consultants (K.T.C.). All rights reserved.</p>
          <p className="made-by">Tax Consultant & Accountant: Hemanth Kumar Chennuru</p>
        </div>
      </div>
    </footer>
  );
}
