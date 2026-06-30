"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({
    type: "",
    text: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    // Map id e.g. "form-name" to name
    const fieldName = id.replace("form-", "");
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      setFormStatus({
        type: "error",
        text: "Please fill in all required fields (*).",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", text: "" });

    // Mock API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: "success",
        text: `Thank you, ${formData.name}! Your consultation request for "${formData.service.toUpperCase()}" has been received. Hemanth Kumar will contact you shortly.`,
      });
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-info-panel">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="contact-title">Connect for a Free Initial Consultation</h2>
          <p className="contact-lead-text">
            Get answers to your tax, GST, and accounting queries. Connect directly through our channels below.
          </p>

          <div className="contact-channels">
            {/* Phone 1 (WhatsApp) */}
            <div className="channel-card">
              <div className="channel-icon call-whatsapp">
                <svg viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" />
                </svg>
              </div>
              <div className="channel-details">
                <h5>Call / WhatsApp</h5>
                <a href="tel:+919849760371" className="channel-link">
                  +91 98497 60371
                </a>
                <span className="channel-sub">(WhatsApp Active)</span>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="channel-card">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="channel-details">
                <h5>Secondary Phone</h5>
                <a href="tel:+918309949403" className="channel-link">
                  +91 83099 49403
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="channel-card">
              <div className="channel-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="channel-details">
                <h5>Email Address</h5>
                <a href="mailto:mytax.ktc@gmail.com" className="channel-link">
                  mytax.ktc@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="quick-contact-actions">
            <a
              href="https://wa.me/919849760371?text=Hi%2C%20I%20would%20like%20to%20consult%20regarding%20tax%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-large"
            >
              <svg viewBox="0 0 24 24" className="icon-whatsapp">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.128.962 11.514.962c-5.442 0-9.866 4.372-9.87 9.802 0 1.772.487 3.498 1.411 5.013l-.995 3.634 3.738-.971c1.554.911 3.13 1.34 4.759 1.34zm8.397-6.427c-.244-.121-1.44-.703-1.662-.784-.222-.081-.383-.122-.544.121-.161.243-.624.784-.765.945-.141.161-.282.181-.526.06-1.523-.762-2.457-1.349-3.41-2.996-.252-.435.252-.404.721-1.34.079-.161.039-.302-.02-.423-.06-.121-.544-1.303-.746-1.789-.196-.473-.393-.409-.544-.417-.14-.007-.302-.008-.463-.008-.161 0-.423.06-.644.302-.222.242-.846.827-.846 2.016 0 1.189.866 2.336.986 2.498.121.162 1.705 2.576 4.13 3.617.577.247 1.028.395 1.38.507.579.183 1.107.157 1.524.095.465-.069 1.44-.587 1.642-1.153.202-.566.202-1.052.141-1.153-.06-.101-.222-.162-.465-.283z" />
              </svg>
              <span>Consult via WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="contact-form-panel">
          <h4>Send a Direct Message</h4>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="form-name">Full Name *</label>
              <input
                type="text"
                id="form-name"
                required
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-email">Email Address</label>
              <input
                type="email"
                id="form-email"
                placeholder="e.g. john@example.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-phone">Phone Number *</label>
              <input
                type="tel"
                id="form-phone"
                required
                placeholder="e.g. +91 99999 99999"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-service">Required Service *</label>
              <select
                id="form-service"
                required
                value={formData.service}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  -- Select a Service --
                </option>
                <option value="itr">Income Tax Return (ITR) Filing</option>
                <option value="gst">GST Registration / Filing</option>
                <option value="refund">Income Tax Refund Resolution</option>
                <option value="compliance">Statutory Compliances</option>
                <option value="accounting">Accounting & Bookkeeping</option>
                <option value="advisory">General Tax Advisory</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="form-message">Describe Your Query *</label>
              <textarea
                id="form-message"
                rows={4}
                required
                placeholder="Please write details about your requirement..."
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-gold btn-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
            {formStatus.type && (
              <div className={`form-status ${formStatus.type}`}>
                {formStatus.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
