import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              My journey into web development began with a fascination for building systems that solve real-world problems. I've developed a strong focus on <span className="highlight">full-stack applications</span> with particular expertise in backend development.
            </p>
            <p>
              I specialize in creating <span className="highlight">professional-grade platforms</span> that are secure, scalable, and efficient. My experience spans across various domains including <span className="highlight">database design</span>, <span className="highlight">API development</span>, and <span className="highlight">cloud deployment</span>.
            </p>
            <p>
              Recently, I've been exploring <span className="highlight">AI-powered systems</span> and integrating them into web applications to create smarter, more intuitive user experiences. I'm passionate about building solutions that not only work reliably but also evolve with changing needs.
            </p>
            <p className="achievement-highlight">
              🏆 1st Prize Winner at Hawk Eye's Coding Event
            </p>
          </motion.div>

          <motion.div 
            className="quick-facts"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="h3-title">Quick Facts</h3>
            <ul className="fact-list">
              <li><span>▹</span> Full-Stack Developer with backend focus</li>
              <li><span>▹</span> Experienced in Python, Flask, React</li>
              <li><span>▹</span> Database design specialist (SQL, MongoDB)</li>
              <li><span>▹</span> AI Integration Enthusiast</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
