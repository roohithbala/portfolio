import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Roohith Bala</span>
          </h1>
          <h2 className="hero-subtitle">
            Building <span className="text-gradient">Professional-Grade</span> Web Applications
          </h2>
          <p className="hero-description">
            I'm a Full Stack Developer | Backend Engineer | AI Enthusiast specializing in building exceptional digital experiences with Python, Flask, and AI-powered solutions.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="https://drive.google.com/file/d/1ZoQrDe98DKjs2rI4LIjnCGnZHdwClM_b/view?usp=sharing" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="img-backdrop"></div>
          <img src={profileImg} alt="Roohith Bala" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
