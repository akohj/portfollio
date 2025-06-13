import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import gojoImg from '../assets/images/satoru-gojo.webp';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div 
          className="image-wrapper"
          style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}
        >
          <img
            src={gojoImg}
            alt="Satoru Gojo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <h1>Ike Kalu</h1>
          <p>Network Security Analyst · Video Editor · DevOps Engr</p>
          

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





          <div className="mobile_social_icons">
            <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
