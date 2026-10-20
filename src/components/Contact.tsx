import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p className="contact-intro">I'm always open to discuss exciting projects and new opportunities. Let's collaborate!</p>

          <div className="contact-grid">
            <div className="contact-card">
              <EmailIcon className="contact-icon" />
              <h3>Email</h3>
              <a href="mailto:muhamadfarhan171004@gmail.com">muhamadfarhan171004@gmail.com</a>
            </div>

            <div className="contact-card">
              <LocationOnIcon className="contact-icon" />
              <h3>Location</h3>
              <p>Yogyakarta, Indonesia</p>
            </div>

            <div className="contact-card">
              <LanguageIcon className="contact-icon" />
              <h3>Website</h3>
              <a href="https://muhamadfarhan.netlify.app/" target="_blank" rel="noreferrer">muhamadfarhan.netlify.app</a>
            </div>
          </div>

          <div className="social-section">
            <h3>Find me on</h3>
            <div className="social-links">
              <a href="https://github.com/frhnnrj" target="_blank" rel="noreferrer" className="social-link">
                <GitHubIcon /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/farhannrj/" target="_blank" rel="noreferrer" className="social-link">
                <LinkedInIcon /> <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/farhannrj/" target="_blank" rel="noreferrer" className="social-link">
                <InstagramIcon /> <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@frhnnrj" target="_blank" rel="noreferrer" className="social-link">
                <LanguageIcon /> <span>TikTok</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;