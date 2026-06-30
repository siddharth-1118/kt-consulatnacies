export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-image">
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="lbl">Years of Trusted Consulting</span>
          </div>
          <div className="about-image-placeholder">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="finance-crest">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#C5A059" strokeWidth="4" strokeDasharray="10 5" />
              <path d="M70,130 L100,60 L130,130 Z" fill="#043A3A" />
              <path d="M85,130 L100,90 L115,130 Z" fill="#C5A059" />
              <circle cx="100" cy="55" r="10" fill="#C5A059" />
            </svg>
          </div>
        </div>
        <div className="about-content">
          <span className="section-subtitle">About Our Firm</span>
          <h2 className="about-title">Providing Expert Guidance with Impeccable Integrity</h2>
          <p className="about-text-lead">
            Shree Krishna Tax Consultants (K.T.C.) was established to simplify financial compliance and tax burdens for businesses and individuals alike.
          </p>
          <p>
            Led by <strong>Hemanth Kumar Chennuru</strong>, a dedicated Tax Consultant & Accountant, we bring years of practical experience in managing financial records, analyzing tax liability, and ensuring fully optimized legal submissions.
          </p>
          <div className="consultant-profile">
            <div className="profile-details">
              <h4>Hemanth Kumar Chennuru</h4>
              <span>Founder & Lead Tax Consultant</span>
            </div>
          </div>
          <div className="about-features">
            <div className="feature-item">
              <span className="check-mark">✓</span>
              <div>
                <strong>Expert Knowledge:</strong> Keep up to date with the latest tax amendments and compliance mandates.
              </div>
            </div>
            <div className="feature-item">
              <span className="check-mark">✓</span>
              <div>
                <strong>Tailored Services:</strong> Tailor-fit solutions to optimize tax strategy for businesses of all scales.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
