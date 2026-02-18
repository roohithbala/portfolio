import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaLinux, FaLock, FaTools, FaBrain, FaServer, FaCode, FaGlobe, FaCloud } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { title: "Languages", icon: <FaCode />, items: "Python, SQL, HTML, CSS, JavaScript, C, C++", desc: "Built Payroll Management System using Python & SQL." },
    { title: "Frameworks", icon: <FaServer />, items: "Flask, Bootstrap, jQuery", desc: "Developed Library Management System with Flask." },
    { title: "Databases", icon: <FaDatabase />, items: "MongoDB, MySQL, SQLite, PostgreSQL", desc: "Implemented robust data storage for Movie Ticket Management." },
    { title: "Frontend", icon: <FaGlobe />, items: "HTML5, CSS3, Bootstrap, React", desc: "Designed responsive UIs for various platforms." },
    { title: "Cloud & DevOps", icon: <FaCloud />, items: "Git, GitHub, Heroku, Vercel", desc: "Deployed apps using GitHub and Heroku CI/CD." },
    { title: "AI & Data Science", icon: <FaBrain />, items: "NumPy, Pandas, scikit-learn", desc: "Integrated AI features in Library Management System." },
    { title: "Security", icon: <FaLock />, items: "JWT, OAuth, HTTPS", desc: "Implemented secure auth in multiple projects." },
    { title: "Tools", icon: <FaTools />, items: "VS Code, Postman, Figma, Linux", desc: "Used Postman for API testing and Figma for prototyping." }
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
