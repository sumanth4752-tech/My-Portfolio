import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaCode,
  FaGithub,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import "../styles/hero.css";
import { TbBrandNpm } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { IoDocumentText } from "react-icons/io5";
import profileImage from "../assets/IMG_2985.jpg";

const Hero = () => {
  const heroRef = useRef(null);
  const iconsRef = useRef([]);

  const texts = useMemo(
    () => [
      "Cloud Computing Learner",
      "AWS Parctitioner Learner",
      "DevOps Engineer (Trainee)",
      "Future Cloud Engineer",
    ],
    []
  );
  const skillsIcons = [
    { Icon: FaFigma, color: "#f24e1e", name: "Figma" },
    { Icon: FaHtml5, color: "#e34c26", name: "HTML5" },
    { Icon: FaGithub, color: "#252525", name: "GitHub" },
    { Icon: SiTailwindcss, color: "#00bcff", name: "Tailwind" },
    { Icon: FaJava, color: "#007396", name: "Java" },
    { Icon: SiRedux, color: "#764abc", name: "Redux" },
    { Icon: TbBrandNpm, color: "#c70000", name: "NPM" },
    { Icon: FaJs, color: "#f7df1e", name: "JavaScript" },
    { Icon: FaNode, color: "#417e38", name: "Node.js" },
    { Icon: SiMysql, color: "#4479a1", name: "MySQL" },
    { Icon: FaGitAlt, color: "#f05032", name: "Git" },
    { Icon: VscVscode, color: "#017bbc", name: "VS Code" },
    { Icon: FaCss3Alt, color: "#1572b6", name: "CSS3" },
    { Icon: FaReact, color: "#61dafb", name: "React" },
    { Icon: FaCode, color: "#007acc", name: "Code" },
    { Icon: FaBootstrap, color: "#740ff8", name: "Bootstrap" },
    { Icon: SiMongodb, color: "#023430", name: "MongoDB" },
    { Icon: SiExpress, color: "#023430", name: "Express" },
    { Icon: SiLeetcode, color: "#3f4c57", name: "LeetCode" },
    { Icon: SiPostman, color: "#ff6c38", name: "Postman" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && typedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && typedText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        } else if (isDeleting) {
          setTypedText(currentText.substring(0, typedText.length - 1));
        } else {
          setTypedText(currentText.substring(0, typedText.length + 1));
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, texts]);

  const positionedIcons = useMemo(() => {
    return skillsIcons.map((item) => ({
      ...item,
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 90 + 5}%`,
      animationDelay: `${Math.random() * 2}s`,
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      iconsRef.current.forEach((icon) => {
        if (!icon) return;

        const iconRect = icon.getBoundingClientRect();
        const iconCenterX = iconRect.left + iconRect.width / 2 - rect.left;
        const iconCenterY = iconRect.top + iconRect.height / 2 - rect.top;

        const deltaX = mouseX - iconCenterX;
        const deltaY = mouseY - iconCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          const moveX = (deltaX / distance) * force * -20;
          const moveY = (deltaY / distance) * force * -20;

          icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          icon.style.transform = "translate(0px, 0px)";
        }
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background">
        {positionedIcons.map((item, index) => (
          <div
            key={`icon-${index}`}
            className="floating-icon"
            ref={(el) => (iconsRef.current[index] = el)}
            style={{
              left: item.left,
              top: item.top,
              animationDelay: item.animationDelay,
            }}
          >
            <item.Icon style={{ color: item.color, fontSize: "35px" }} />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="profile-image">
            <img
              src={profileImage}
              alt="Sumanth P"
              className="profile-photo"
            />
          </div>
        </div>

        <div className="hero-right">
          <p className="wish">Hi, I'm</p>
          <h1 className="hero-title">Sumanth P</h1>
          <div className="typing-container">
            <span className="typing-text">
              {typedText}
              <span className="cursor">|</span>
            </span>
          </div>
          <p className="hero-subtitle">
            Electronics and Communication Engineering graduate currently learning 
            Cloud Computing, AWS, DevOps, and Linux. I am developing a strong 
            understanding of cloud fundamentals, Linux system usage, and basic DevOps 
            tools through hands-on practice and continuous learning. As a fresher, I am 
            focused on building real-time skills, improving my technical foundations, 
            and preparing myself for opportunities in Cloud and DevOps roles.
          </p>
          <div>
            <a
              className="btn btn-primary"
              href="https://drive.google.com/file/d/1GmMhiQV9UoMgVD9bwXkDfSDZf1tGPudR/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoDocumentText style={{ marginRight: "8px" }} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
