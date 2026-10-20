import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faBullhorn, faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Oct 2025 – Jan 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Chatbot Developer — Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Dinas Komunikasi dan Informatika DIY (DISKOMINFO DIY) · Yogyakarta</h4>
            <p>
              Developed an AI-powered chatbot using Dual-Ingest RAG pipeline integrated with OCR and
              Nanonets DocString for document processing. Built backend services with Python &amp; FastAPI
              to manage ingestion, embeddings, and retrieval for structured document querying.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 – Sep 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Fullstack Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">SMAN 1 Pomalaa · Yogyakarta</h4>
            <p>
              Developed and maintained the official school website (sman1pomalaa.sch.id). Designed responsive
              frontend, built backend systems for content management, implemented features for announcements
              and academic content. Optimized performance, speed, and accessibility.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 – present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBullhorn} />}
          >
            <h3 className="vertical-timeline-element-title">Digital Marketing Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">tiketcitumang.com · Pangandaran, West Java</h4>
            <p>
              Developing and optimizing Google Ads campaigns, analyzing performance metrics,
              and implementing strategies to maximize reach and engagement. Drove higher traffic
              and visibility for Citumang as an eco-tourism destination.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Web Developer & Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">tiketcitumang.com · Pangandaran, West Java</h4>
            <p>
              Created a website to promote Citumang's natural tourism, including detailed information about
              attractions, activities, and facilities. Designed the layout, managed content, and ensured the
              website was user-friendly and visually appealing.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: '#7c3aed', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            date="2022 – Sep 2026"
          >
            <h3 className="vertical-timeline-element-title">S1 Teknik Informatika — Lulus</h3>
            <h4 className="vertical-timeline-element-subtitle">Universitas Ahmad Dahlan, Yogyakarta</h4>
            <p>
              Lulus September 2026. Mempelajari rekayasa perangkat lunak, basis data, kecerdasan buatan,
              dan pengembangan web. Aktif mengerjakan proyek akademis dan mandiri di bidang fullstack web dan AI/ML.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;