export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">Professional Financial Partner</span>
          <h2 className="hero-title">Navigate Your Taxes & Compliance with Confidence</h2>
          <p className="hero-lead">
            Expert Tax Advisory, Hassle-free GST Registrations, ITR Filings, and Comprehensive Bookkeeping tailored for individuals and businesses.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-gold btn-large">
              Get Free Consultation
            </a>
            <a href="#services" className="btn btn-outline btn-large">
              Explore Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Accurate Filings</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">On-Time</span>
              <span className="stat-label">Statutory Compliance</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Expert</span>
              <span className="stat-label">Tax Advisors</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card">
            <div className="visual-card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span className="title">GST Returns Portal</span>
            </div>
            <div className="visual-card-body">
              <div className="illustration-gst">
                <div className="screen-box">
                  <div className="badge-gst">GST</div>
                  <div className="text-lines">
                    <div className="line short"></div>
                    <div className="line long"></div>
                    <div className="line medium"></div>
                  </div>
                  <div className="magnifier"></div>
                </div>
                <div className="calendar-box">
                  <div className="cal-header"></div>
                  <div className="cal-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="chart-bars">
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
