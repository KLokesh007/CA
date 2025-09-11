"use client"

import type React from "react"
import { useState } from "react"
import "./contactsec.css"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", newsletterEmail)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            Get in <span className="highlight-pill">touch</span>
          </h2>
        </div>

        {/* Main Contact Content */}
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h3 className="contact-info-title">Let's talk</h3>
            <p className="contact-description">
              I'm currently available to take on new projects, so feel free to send me a message about anything that you
              want me to work on. You can contact anytime.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>services@cameenavenkatesh.co.in</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 16.92V19.92C22 20.52 21.39 21 20.77 21C9.39 21 0 11.61 0 0.23C0 -0.39 0.48 -1 1.08 -1H4.08C4.68 -1 5.08 -0.39 5.08 0.23C5.08 2.23 5.48 4.23 6.28 6.03C6.48 6.43 6.38 6.93 6.08 7.23L4.08 9.23C5.88 12.83 9.17 16.12 12.77 17.92L14.77 15.92C15.07 15.62 15.57 15.52 15.97 15.72C17.77 16.52 19.77 16.92 21.77 16.92C22.39 16.92 22 17.32 22 17.92V16.92Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span>+91 7975789916</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="10"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>Bengaluru , India</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Write your message here</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <div className="recaptcha-container">
                  <input type="checkbox" id="recaptcha" required />
                  <label htmlFor="recaptcha">I am human</label>
                  <div className="recaptcha-logo">reCAPTCHA</div>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit now
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <h3 className="newsletter-title">Meena Venkatesh</h3>
              <p className="newsletter-description">
                I'm a Chartered Accountant with 7+ years of experience helping startups and fast-growing companies
                achieve financial transparency, compliance, and growth.
              </p>
            </div>

            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="newsletter-input-container">
                <div className="newsletter-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="footer-section">
          <div className="footer-content">
            <p className="copyright">© 2025 Meena Venkatesh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
