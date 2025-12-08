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
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "SQL", icon: SiMysql, color: "#4479a1" },
        { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "ReactJS", icon: FaReact, color: "#61dafb" },
        { name: "Redux", icon: SiRedux, color: "#764abc" },
        { name: "ExpressJS", icon: SiExpress, color: "#000000" },
        { name: "NodeJS", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
        { name: "REST APIs", icon: SiPostman, color: "#ff6c37" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Postman", icon: SiPostman, color: "#ff6c38" },
        { name: "Git", icon: FaGitAlt, color: "#f05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "VS Code", icon: VscVscode, color: "#007acc" },
        { name: "Figma", icon: FaFigma, color: "#f24e1e" },
        { name: "Chrome DevTools", icon: SiGooglechrome, color: "#4285f4" },
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

        <div className="leetcode-stats">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
