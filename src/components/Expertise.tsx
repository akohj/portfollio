import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import adobeLogo from '../assets/images/Adobe.png'; // Adobe image
import kaliImg from '../assets/images/kali-linux-wsallpaper-v7.png'; // adjust extension as needed


const labelsFirst = [
    "Premiere Pro",
    "Photoshop",
    "After Effects",
    "Illustrator",
    "Adobe Audition",
    "CapCut",
    "Canva"
];

const labelsSecond = [
    "Git",
    "Docker",
    "AWS",
    "Linux",
    "Pandas",
];

const labelsThird = [
    "OpenAI",
    "Python",
    "Python ML libraries",
    "Hugging Face",
    "Streamlit"
];

const labelsFourth = [
    "Wireshark",
    "Nmap",
    "Kali Linux",
    "Snort",
    "Metasploit",
    "Firewall Configuration",
    "Splunk"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    {/* Adobe Suite */}
                    <div className="skill">
                        <img src={adobeLogo} alt="Adobe Suite" style={{ height: '48px', marginBottom: '10px' }} />
                        <h3>Adobe Suite</h3>
                        <p>
                            I'm highly skilled in video editing and design. I mainly utilize Adobe Premiere Pro and After Effects for complex compositing, and Photoshop as my main design tool. I also use CapCut and Canva when needed to create polished, engaging visual content.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Creative stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* DevOps */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Automation</h3>
                        <p>
                            As a Junior DevOps Engineer, I assist in setting up CI/CD pipelines, configuring infrastructure, and automating deployment processes using tools like Docker and GitHub Actions. I’m continuously building hands-on experience in cloud environments and DevOps best practices.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* GenAI */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>GenAI & LLM</h3>
                        <p>
                            I build practical ML and AI models tailored to real-world problems. From predictive analytics to GenAI-enabled solutions, I apply modern techniques to deliver intelligent, enterprise-ready systems that support smarter decision-making.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    {/* Network Security Analyst */}
                    <div className="skill">
                        <img
                            src={kaliImg}
                            alt="Network Security"
                            style={{ height: '48px', marginBottom: '10px', objectFit: 'cover' }}
                        />
                        <h3>Network Security Analyst</h3>
                        <p>
                            I analyze network traffic, monitor security systems, and identify vulnerabilities using tools like Wireshark and Snort. With hands-on experience in penetration testing and firewall management, I support organizations in maintaining secure infrastructure.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Security stack:</span>
                            {labelsFourth.map((label, index) => (
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
