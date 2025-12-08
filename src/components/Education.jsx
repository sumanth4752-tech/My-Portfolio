import React, { useState } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaUniversity,
  FaCalendar,
  FaMicrosoft,
} from "react-icons/fa";
import { SiCisco, SiCoursera } from "react-icons/si";
import "../styles/education.css";
import az900 from "../assets/AZ-900_Iamge.jpg";
import courseraCert from "../assets/CourseraCertificate_Image.jpg";

const Education = () => {
  const [previewSrc, setPreviewSrc] = useState(null);

  const education = {
    degree: "BE in Electronics and Communication Engineering",
    institution: "JSS Academy Of Technical Education Bengaluru",
    cgpa: "7.58",
    duration: "2022 - 2025",
    location: "Bengaluru, India",
  };

  const certifications = [
    {/*
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      icon: FaMicrosoft,
      color: "#0078d4",
      description:
        "Cloud computing fundamentals, Azure services, and cloud security",
      certificateImage: az900,
    },
    {
      title: "Java Object-Oriented Programming",
      issuer: "Oracle/Coursera",
      icon: SiCoursera,
      color: "#0057d1",
      description:
        "Advanced Java concepts, OOP principles, and design patterns",
      certificateImage: courseraCert,
    */},
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="education-content">
          <div className="education-main">
            <div className="degree-card">
              <div className="degree-header">
                <FaGraduationCap className="degree-icon" />
                <div className="degree-info">
                  <h3 className="degree-title">{education.degree}</h3>
                  <div className="institution-info">
                    <FaUniversity className="institution-icon" />
                    <span>{education.institution}</span>
                  </div>
                </div>
              </div>

              <div className="degree-details">
                <div className="detail-item">
                  <span className="detail-label">CGPA:</span>
                  <span className="detail-value">{education.cgpa}</span>
                </div>
                <div className="detail-item">
                  <FaCalendar className="detail-icon" />
                  <span className="detail-value">{education.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">{education.location}</span>
                </div>
              </div>

              <div className="degree-highlights">
                <h4>Academic Highlights</h4>
                <ul>
                  <li>
                    Strong foundation in Electronics and Communication Engineering (ECE)
                    </li>
                  <li>
                    Hands-on experience with digital electronics, communication systems, and embedded technologies
                  </li>
                  <li>
                    Currently specializing in Cloud Computing and AWS services
                  </li>
                  <li>
                    Building skills in DevOps tools, automation, and cloud deployment
                  </li>
                   <li>
                    Practical exposure through projects, labs, and continuous learning
                   </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="certifications-section">
            <h3 className="certifications-title">
              <FaCertificate className="cert-title-icon" />
              Professional Certifications
            </h3>

            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="certification-card"
                  onClick={() => setPreviewSrc(cert.certificateImage)}
                >
                  <div className="cert-header">
                    <cert.icon
                      className="cert-icon"
                      style={{ color: cert.color }}
                    />
                    <div className="cert-info">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="cert-description">{cert.description}</p>
                  <br />
                  <p className="cert-description">Tap to see</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {previewSrc && (
        <div className="certificate-modal" onClick={() => setPreviewSrc(null)}>
          <div
            className="certificate-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={previewSrc} alt="Certificate Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
