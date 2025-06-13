import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import gojoImg from '../assets/images/satoru-gojo.webp';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        {/* Row layout for profile image and content */}
        <div className="profile-row">
          
          {/* Image */}
          <div
            className="image-wrapper"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              overflow: 'hidden',
              marginRight: '1.5rem',
              flexShrink: 0,
            }}
          >
            <img src={gojoImg} alt="Profile" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Name and Icons */}
          <div className="content">
            <h1 className="name">Ike Kalu</h1>
            <div className="social_icons">
              {/* <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a> */}
              <a href="https://www.linkedin.com/in/ikechukwu-kalu-5a767a318/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            </div>
            
          </div>
        </div>

        {/* Optional marquee (if you still want it) */}
        <div className="scroll-full-wrapper">
          <div className="scroll-track">
            <div className="scroll-text">
              Network Security Analyst · Video Editor · DevOps Engr &nbsp; • &nbsp;
              Network Security Analyst · Video Editor · DevOps Engr &nbsp; • &nbsp;
              Network Security Analyst · Video Editor · DevOps Engr &nbsp; • &nbsp;
              Network Security Analyst · Video Editor · DevOps Engr
            </div>
            <div className="scroll-text">
              Network Security Analyst · Video Editor · DevOps Engr &nbsp; • &nbsp;
              Network Security Analyst · Video Editor · DevOps Engr &nbsp; • &nbsp;
              Network Security Analyst · Video Editor · DevOps Engr &nbsp; • &nbsp;
              Network Security Analyst · Video Editor · DevOps Engr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
