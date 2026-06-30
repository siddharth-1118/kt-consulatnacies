export default function Services() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
      title: "Income Tax Return Filing",
      description: "Precise filing of ITR for individuals, HUFs, salaried professionals, and business owners. Minimize tax liabilities with optimal deductions.",
      tag: "Annual Compliance",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
      title: "GST Registration & Return Filings",
      description: "Seamless registration for your enterprise and error-free filing of GSTR-1, GSTR-3B, and annual returns. Stay compliant, avoid penalties.",
      tag: "Monthly / Quarterly",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
        </svg>
      ),
      title: "Income Tax Refunds",
      description: "Rigorous tracking and quick resolution of pending tax refunds. We identify discrepancies and follow up with the IT Department.",
      tag: "Fast Processing",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 15l-4-4 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z" />
        </svg>
      ),
      title: "Statutory Compliances",
      description: "Ensuring your operations align with corporate laws. Assistance with labor laws, company filings, audit regulations, and statutory registers.",
      tag: "Legal & Corporate",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-2V7h2v2zm-5 0H8V7h2v2zm5 5h-2v-2h2v2zm-5 0H8v-2h2v2zm5 5h-2v-2h2v2zm-5 0H8v-2h2v2z" />
        </svg>
      ),
      title: "Accounting & Bookkeeping",
      description: "End-to-end bookkeeping, preparation of balance sheets, P&L statements, and finalization of accounts for audit readiness.",
      tag: "Accounting",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="service-icon">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      ),
      title: "Tax Advisory Services",
      description: "Strategic tax planning to maximize savings. Receive personalized financial advice on investments, capital gains, and business structures.",
      tag: "Consulting",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Comprehensive Tax & Financial Services</h2>
          <div className="title-divider"></div>
          <p className="section-lead">
            End-to-end support to ensure your business remains fully compliant and financially optimized.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-tag">{service.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
