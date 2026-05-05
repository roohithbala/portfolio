import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaUsers, FaAward } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: "education",
      icon: <FaGraduationCap />,
      title: "Kongu Engineering College",
      period: "2023 - 2027",
      subtitle: "B.E in Computer Science and Design",
      desc: "CGPA: 8.5/10 | Specialized in Data Structures, Algorithms, and Database Systems"
    },
    {
      type: "position",
      icon: <FaUsers />,
      title: "Executive Member, CSD Coding Club",
      period: "2024 - Present",
      subtitle: "College Technical Organization",
      desc: "Organizing coding competitions, hackathons, and technical workshops. Building strong coding culture and facilitating peer knowledge sharing."
    },
    {
      type: "award",
      icon: <FaTrophy />,
      title: "Hawk Eyes Coding Championship",
      period: "2024",
      subtitle: "1st Prize Winner",
      desc: "Outstanding performance in competitive programming and algorithm optimization"
    },
    {
      type: "award",
      icon: <FaTrophy />,
      title: "Codefest 2025",
      period: "2025",
      subtitle: "2nd Prize Winner",
      desc: "Exceptional problem-solving skills and coding efficiency"
    },
    {
      type: "award",
      icon: <FaAward />,
      title: "Envistas Coding Competition",
      period: "2025",
      subtitle: "3rd Prize Winner",
      desc: "Strong algorithm design and competitive programming abilities"
    },
    {
      type: "award",
      icon: <FaUsers />,
      title: "Zeal Quest Competition",
      period: "2024",
      subtitle: "Prize Winner",
      desc: "Demonstrated critical thinking and excellent teamwork"
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content glass">
                <span className="timeline-date">{exp.period}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-subtitle">{exp.subtitle}</h4>
                <p className="timeline-desc">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
