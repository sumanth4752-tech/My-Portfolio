import React from "react";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiRedux } from "react-icons/si";
import "../styles/project.css";

const Projects = () => {
  const projects = [
    {
      title: "Advanced Vehicle Headlight Automation with Environmental Sensing",
      description:
        "As part of my Bachelor of Engineering final year project, I developed an Advanced Vehicle Headlight Automation System focused on improving road safety through intelligent and automatic light control. The system automatically activates headlights in low-light conditions and dynamically switches between high and low beams to reduce glare for oncoming vehicles. By using environmental sensing, the project enhances driver visibility, minimizes human error, and contributes to safer driving conditions.",
      technologies: [
        { name: "Embedded Systems", icon: FaMicrochip, color: "#4caf50" },
        { name: "Microcontrollers", icon: SiArduino, color: "#00979D" },
        { name: "Sensors", icon: GiElectric, color: "#ff9800" },
        { name: "IoT Concepts", icon: SiIot, color: "#0a66c2" },
        { name: "Automation", icon: FaTools, color: "#607d8b" },
      ],
      features: [
        "Switches between high and low beams to avoid glare for other drivers",
        "Automatically adjusts headlights based on surrounding light conditions",
        "Detects nearby vehicles using environmental sensing",
        "Improves visibility and safety during night driving",
        "Reduces driver effort by automating headlight control"
      ],
      liveLink: "https://snapnest-phi.vercel.app/",
      githubLink: "https://github.com/SrikanthKamalla/SnapNest",
      category: "Academic Project",
    },
    {
      title: "IoT-Based Automated Syringe Infusion System",
      description:
        "As part of my internship, I developed an IoT-based automated syringe infusion system designed to deliver medication accurately and safely. The system enables automated control of infusion flow along with remote monitoring, helping ensure precise dosing and improved patient care. This project provided practical experience in IoT, embedded systems, and healthcare automation.",
      technologies: [
        { name: "Embedded Systems", icon: FaMicrochip, color: "#4caf50" },
        { name: "Microcontrollers", icon: SiArduino, color: "#00979D" },
        { name: "Sensors", icon: GiElectric, color: "#ff9800" },
        { name: "IoT", icon: SiIot, color: "#0a66c2" },
        { name: "Healthcare Automation", icon: FaTools, color: "#607d8b" },
      ],
      features: [
        "Delivers medication automatically with accurate dosage control",
        "Allows remote monitoring of infusion status in real time",
        "Uses sensors to ensure safe and precise medication delivery",
        "Improves patient safety through controlled and automated infusion",
        "Provides hands-on experience with IoT-based healthcare systems",
      ],
      liveLink: "https://myhealthcheckpro.onrender.com/",
      githubLink:
        "https://github.com/springboardmentor-104/HealthCheckPro_Infosys_Internship_Mar2025/tree/milestone-4",
      category: "Internship Project",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <tech.icon style={{ color: tech.color }} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaGithub />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a
            href="https://github.com/srikanthkamalla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
