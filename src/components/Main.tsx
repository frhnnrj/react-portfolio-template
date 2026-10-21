import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WebIcon from '@mui/icons-material/Web';
import CampaignIcon from '@mui/icons-material/Campaign';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/114143290?v=4" alt="Muhamad Farhan Nurjamil" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/frhnnrj" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/farhannrj/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/farhannrj/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
          <h1>Muhamad Farhan Nurjamil</h1>
          <p className="tagline">AI Chatbot Developer, Fullstack Developer & Digital Marketing Specialist</p>
          <div className="meta-info">
            <span className="meta-item"><LocationOnIcon fontSize="small" /> Yogyakarta, Indonesia</span>
            <span className="meta-item available"><WorkIcon fontSize="small" /> Available for Work</span>
          </div>
          <p className="bio">
            AI Chatbot Developer & Fullstack Developer
          </p>
          <div className="hero-buttons">
            <a href="mailto:muhamadfarhan171004@gmail.com" className="btn-primary">Hire Me</a>
            <a href="https://github.com/frhnnrj" target="_blank" rel="noreferrer" className="btn-secondary">View GitHub</a>
          </div>
          <div className="resume-buttons">
            <a href="/CV_Muhamad_Farhan_Nurjamil_EN.pdf" download className="btn-resume">
              <DownloadIcon fontSize="small" /> Resume (EN)
            </a>
            <a href="/CV_Muhamad_Farhan_Nurjamil_ID.pdf" download className="btn-resume">
              <DownloadIcon fontSize="small" /> Resume (ID)
            </a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/frhnnrj" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/farhannrj/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/farhannrj/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      <div className="about-detail-section">
        <h2 className="section-subtitle">About Me</h2>
        <p className="about-paragraph">
          I am an AI Chatbot Developer and Digital Marketing Specialist with experience in building data-driven
          and technology-based solutions. I have worked on website development and managed digital marketing campaigns,
          using analytical approaches to improve performance, reach, and business visibility.
        </p>
        <p className="about-paragraph">
          I have developed AI chatbot projects using Retrieval-Augmented Generation (RAG) integrated with OCR and
          Nanonets DocString to process and analyze documents intelligently. In addition, I am experienced in creating
          user-friendly websites and crafting effective copywriting strategies to support business and marketing goals.
        </p>

        <div className="about-detail-grid">
          <div className="about-detail-card">
            <SchoolIcon className="card-icon" />
            <h3>Education</h3>
            <p>S1 Teknik Informatika<br /><strong>Universitas Ahmad Dahlan</strong><br />Lulus September 2026</p>
          </div>
          <div className="about-detail-card">
            <SmartToyIcon className="card-icon" />
            <h3>AI & Intelligent Systems</h3>
            <p>RAG · OCR · Nanonets DocString · Vector Database · FastAPI · Python · OpenAI API · LangChain</p>
          </div>
          <div className="about-detail-card">
            <WebIcon className="card-icon" />
            <h3>Web Development</h3>
            <p>HTML · CSS · JavaScript · PHP · Bootstrap · Vue.js · React · FastAPI · MySQL · Fullstack Development</p>
          </div>
          <div className="about-detail-card">
            <CampaignIcon className="card-icon" />
            <h3>Digital Marketing</h3>
            <p>Google Ads · Campaign Optimization · SEO · Copywriting · Analytics</p>
          </div>
          <div className="about-detail-card">
            <BuildIcon className="card-icon" />
            <h3>Top Skills</h3>
            <p>Product Development · IT Infrastructure · Computer Information Systems</p>
          </div>
          <div className="about-detail-card">
            <FolderIcon className="card-icon" />
            <h3>Projects</h3>
            <p><strong>12</strong> public repos on GitHub<br />Fullstack, AI/ML, Decision Support Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;