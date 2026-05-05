import { motion } from 'framer-motion';
import { FaCode, FaGamepad, FaCompass, FaBook, FaMusic, FaCamera } from 'react-icons/fa';
import './About.css';

const About = () => {
  const interests = [
    { icon: <FaCode />, label: "Developer" },
    { icon: <FaGamepad />, label: "Gamer" },
    { icon: <FaCompass />, label: "Explorer" },
    { icon: <FaBook />, label: "Reader" },
    { icon: <FaMusic />, label: "Music Lover" },
    { icon: <FaCamera />, label: "Photographer" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm a passionate Computer Science student currently pursuing my engineering degree, 
              driven by curiosity and a love for solving complex problems through code.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, gaming, or listening to music. 
              I specialize in backend architecture and AI integration, and my passion lies in building scalable, 
              secure applications that solve real-world problems.
            </p>
          </motion.div>

          <div className="interests-marquee">
            <div className="marquee-content">
              {interests.map((item, index) => (
                <div key={index} className="interest-item">
                  <span className="interest-icon">{item.icon}</span>
                  <span className="interest-label">{item.label}</span>
                </div>
              ))}
              {interests.map((item, index) => (
                <div key={`clone-${index}`} className="interest-item">
                  <span className="interest-icon">{item.icon}</span>
                  <span className="interest-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
