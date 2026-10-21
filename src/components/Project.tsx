import React from "react";
import mock01 from '../assets/images/citumang.png';
import mock02 from '../assets/images/pomalaa.jpeg';
import mock03 from '../assets/images/chatbot.png';
import mock04 from '../assets/images/invesment.jpeg';
import mock05 from '../assets/images/raganything.jpg';
import mock06 from '../assets/images/porto.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://tiketcitumang.com" target="_blank" rel="noreferrer">
                        <div className="img-wrapper">
                            <img src={mock01} alt="TiketCitumang.com" width="100%" />
                        </div>
                    </a>
                    <a href="https://tiketcitumang.com" target="_blank" rel="noreferrer"><h2>TiketCitumang.com</h2></a>
                    <div className="project-tags">
                        <span>HTML</span><span>CSS</span><span>JavaScript</span>
                    </div>
                    <p>Tourism website for Citumang providing information and online ticket booking. Fully deployed and live.</p>
                    <div className="project-links">
                        <a href="https://tiketcitumang.com" target="_blank" rel="noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://sman1pomalaa.sch.id" target="_blank" rel="noreferrer">
                        <div className="img-wrapper">
                            <img src={mock02} alt="SMAN 1 Pomalaa Website" width="100%" />
                        </div>
                    </a>
                    <a href="https://sman1pomalaa.sch.id" target="_blank" rel="noreferrer"><h2>SMAN 1 Pomalaa Website</h2></a>
                    <div className="project-tags">
                        <span>HTML</span><span>CSS</span><span>Bootstrap</span>
                    </div>
                    <p>Official school website with content management, gallery, and announcements. Live and maintained.</p>
                    <div className="project-links">
                        <a href="https://github.com/frhnnrj/Website-SMAN1-Pomalaa" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://sman1pomalaa.sch.id" target="_blank" rel="noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://github.com/frhnnrj/chatbot_magang_RAG" target="_blank" rel="noreferrer">
                        <div className="img-wrapper">
                            <img src={mock03} alt="AI Chatbot Dual-Ingestion RAG" width="100%" />
                        </div>
                    </a>
                    <a href="https://github.com/frhnnrj/chatbot_magang_RAG" target="_blank" rel="noreferrer"><h2>AI Chatbot Dual-Ingestion RAG</h2></a>
                    <div className="project-tags">
                        <span>Python</span><span>FastAPI</span><span>Dual-Ingest RAG</span><span>Nanonets DocString</span><span>Qdrant</span><span>PostgreSQL</span>
                    </div>
                    <p>Dual-Ingestion RAG chatbot for DISKOMINFO DIY integrating Tesseract OCR and Nanonets DocString for document processing, with Qdrant vector DB and OpenRouter API.</p>
                    <div className="project-links">
                        <a href="https://github.com/frhnnrj/chatbot_magang_RAG" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://saddlebrown-lapwing-813077.hostingersite.com/" target="_blank" rel="noreferrer">
                        <div className="img-wrapper">
                            <img src={mock04} alt="Investment Decision Support System" width="100%" />
                        </div>
                    </a>
                    <a href="https://saddlebrown-lapwing-813077.hostingersite.com/" target="_blank" rel="noreferrer"><h2>Investment Decision Support System</h2></a>
                    <div className="project-tags">
                        <span>PHP</span><span>AHP</span><span>TOPSIS</span><span>MySQL</span>
                    </div>
                    <p>Web-based decision support system recommending the best digital investment type for Gen Z using a hybrid AHP-TOPSIS method.</p>
                    <div className="project-links">
                        <a href="https://github.com/frhnnrj/Investment-Decision-Support-System-for-Generation-Z" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://saddlebrown-lapwing-813077.hostingersite.com/" target="_blank" rel="noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://github.com/frhnnrj/rag_anything" target="_blank" rel="noreferrer">
                        <div className="img-wrapper">
                            <img src={mock05} alt="RAG Anything (Graph RAG)" width="100%" />
                        </div>
                    </a>
                    <a href="https://github.com/frhnnrj/rag_anything" target="_blank" rel="noreferrer"><h2>RAG Anything (Graph RAG)</h2></a>
                    <div className="project-tags">
                        <span>Python</span><span>LightRAG</span><span>MinerU</span><span>Graph RAG</span><span>Qwen Embeddings</span>
                    </div>
                    <p>Multimodal GraphRAG system utilizing LightRAG knowledge graph extraction, MinerU document parsing, and Qwen embeddings for intelligent multi-format Q&A.</p>
                    <div className="project-links">
                        <a href="https://github.com/frhnnrj/rag_anything" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>

                <div className="project">
                    <a href="https://muhamadfarhan.netlify.app/" target="_blank" rel="noreferrer">
                        <div className="img-wrapper">
                            <img src={mock06} alt="Personal Portfolio Website" width="100%" />
                        </div>
                    </a>
                    <a href="https://muhamadfarhan.netlify.app/" target="_blank" rel="noreferrer"><h2>Personal Portfolio Website</h2></a>
                    <div className="project-tags">
                        <span>HTML</span><span>CSS</span><span>JavaScript</span>
                    </div>
                    <p>Fully responsive personal portfolio showcasing projects, services, and contact info with modern clean layout. Deployed on Netlify.</p>
                    <div className="project-links">
                        <a href="https://github.com/frhnnrj/portofolio-farhann" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://muhamadfarhan.netlify.app/" target="_blank" rel="noreferrer">🌐 Live Demo</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;