import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "Python",
    "Bootstrap",
    "MySQL",
    "FastAPI",
    "C++",
    "Vue.js",
    "React",
];

const labelsSecond = [
    "RAG",
    "OCR",
    "Nanonets DocString",
    "Vector Database",
    "FastAPI",
    "Python",
    "OpenAI API",
    "LangChain",
    "Docker",
    "Postgre",
];

const labelsThird = [
    "Google Ads",
    "Campaign Optimization",
    "SEO",
    "Copywriting",
    "Analytics",
    "Content Management",
    "Social Media",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>Building responsive, fast-loading websites from scratch — from tourism platforms (tiketcitumang.com) to school portals (sman1pomalaa.sch.id). Experienced in both frontend design and backend content management systems.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>AI Chatbot & RAG Systems</h3>
                        <p>Developed AI chatbot at DISKOMINFO DIY using Dual-Ingest RAG pipeline integrated with OCR and Nanonets DocString for intelligent document processing and structured querying. Built backend services for ingestion, embeddings, and retrieval.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faBullhorn} size="3x" />
                        <h3>Digital Marketing & Copywriting</h3>
                        <p>Managing Google Ads campaigns for tiketcitumang.com since 2023 — developing and optimizing advertising strategies, analyzing performance metrics, and implementing approaches to maximize reach, engagement, and tourism visibility.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;