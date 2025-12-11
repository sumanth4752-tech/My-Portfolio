import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiGooglechrome,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import "../styles/skills.css";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps Tools & Platforms",
      skills: [
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
        { name: "Terraform (Learning)", icon: SiTerraform, color: "#844FBA" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" },
        { name: "Nginx (Learning)", icon: SiNginx, color: "#009639" },
      ],
    },
    {
      title: "Cloud & AWS Services",
      skills: [
       { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
       { name: "EC2", icon: SiAmazonaws, color: "#FF9900" },
       { name: "S3", icon: SiAmazonaws, color: "#FF9900" },
       { name: "VPC", icon: SiAmazonaws, color: "#FF9900" },
       { name: "IAM", icon: SiAmazonaws, color: "#FF9900" },
       { name: "API Gateway", icon: SiAmazonaws, color: "#FF9900" },
       { name: "Lambda", icon: SiAmazonaws, color: "#FF9900" },
       { name: "DynamoDB", icon: SiAmazonaws, color: "#FF9900" },
       { name: "CloudWatch", icon: SiAmazonaws, color: "#FF9900" },
      ],
    },
    {
      title: "Operating Systems & Scripting",
      skills: [
        { name: "Linux", icon: FaLinux, color: "#FCC624" },
        { name: "RedHat", icon: FaRedhat, color: "#EE0000" },
        { name: "Shell Scripting", icon: FaTerminal, color: "#4EAA25" },
        { name: "Python Scripting", icon: FaPython, color: "#3776AB" },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <skill.icon
                        className="skill-icon"
                        style={{ color: skill.color }}
                      />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       {/* <div className="leetcode-stats">
          <div className="stats-card">
            <h3>🏆 LeetCode Achievement</h3>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Problems Solved</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Active</span>
                <span className="stat-label">Problem Solver</span>
              </div>
            </div>
            <p className="stats-description">
              Consistent practice on LeetCode, solving algorithmic problems and
              improving problem-solving skills across data structures and
              algorithms.
            </p>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Skills;
