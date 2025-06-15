import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
       
        <a href="https://www.linkedin.com/in/ikechukwu-kalu-5a767a318/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>You can email me <a href="https://mail.google.com/mail/?view=cm&fs=1&to=davidkalu345@gmail.com" target="_blank" rel="noreferrer">Ike@hasob.ng or davidkalu345@gmail.com</a>... Stay frosty</p>
    </footer>
  );
}

export default Footer;