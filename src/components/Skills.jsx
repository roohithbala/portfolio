"use client";
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaLinux, FaLock, FaTools, FaBrain, FaServer, FaCode, FaGlobe, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { title: "Languages", icon: <FaCode />, items: "Python, SQL, HTML, CSS, JavaScript, C, C++", desc: "Proficient in building efficient algorithms and managing complex data structures." },
    { title: "Frameworks", icon: <FaServer />, items: "Flask, Express.js, Bootstrap, React.js", desc: "Experienced in building scalable backend services and responsive frontend applications." },
    { title: "Databases", icon: <FaDatabase />, items: "MongoDB, MySQL, SQLite, PostgreSQL", desc: "Expertise in database design, optimization, and complex query development." },
    { title: "Frontend", icon: <FaGlobe />, items: "React, HTML5, CSS3, Framer Motion", desc: "Creating interactive, responsive, and accessible user interfaces with modern frameworks." },
    { title: "Cloud & DevOps", icon: <FaCloud />, items: "Git, GitHub, Vercel, Netlify", desc: "Proficient in version control, CI/CD pipelines, and cloud deployment strategies." },
    { title: "Security", icon: <FaLock />, items: "JWT, OAuth2, HTTPS, Data Encryption", desc: "Implementing industry-standard security protocols and authentication mechanisms." },
    { title: "Tools & Platforms", icon: <FaTools />, items: "VS Code, Postman, Figma, Linux, Docker", desc: "Proficient with development tools for efficient workflow and collaboration." }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Tech Stack
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              className="skill-card glass"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 212, 255, 0.2)" }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p className="skill-items">{skill.items}</p>
              <p className="skill-desc">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
