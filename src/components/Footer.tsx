import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/frhnnrj" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/farhannrj/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2026 Muhamad Farhan Nurjamil. Built with 💜</p>
    </footer>
  );
}

export default Footer;