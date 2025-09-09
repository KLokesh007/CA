import React from "react"
import "./homesection.css"

export default function HomeSection() {
  return (
    <div className="home-section">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Meena Venkatesh</h1>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#home" className="nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#AboutSection" className="nav-link">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="connect-btn">Connect With Me</button>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="profile-section">
            <div className="profile-image">
              <img src="/meena.jpeg" alt="Meena" />
            </div>
            <h1 className="main-title">
              
              <span className="gradient-text"> {"I'm "} Meena Venkatesh </span>
              {", Chartered Accountant based in India."}
            </h1>
            <p className="description">
              I’m a Chartered Accountant with 7+ years of experience helping startups and fast-growing companies achieve financial transparency, compliance, and growth. 
              </p>
            <div className="cta-buttons">
              <button className="primary-btn">Connect with me</button>
              <button className="secondary-btn">My resume</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
