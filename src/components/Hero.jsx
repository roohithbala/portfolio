import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import profileImg from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Hello,</span>
          <h1 className="hero-title">
            I'm <span className="gradient-text">ROOHITH BALA</span>
          </h1>
          <h2 className="hero-subtitle">
            <Typewriter
              options={{
                strings: ["Software Engineer", "Full Stack Developer", "AI Enthusiast"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </h2>
          <p className="hero-description">
            I am a dedicated and curious Computer Science student with a strong interest in
            full-stack web development and artificial intelligence. I enjoy creating
            real-world applications that combine clean design with smart functionality.
          </p>
          <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="/portfolio/Resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <FaFileDownload /> Resume
              </a>
          </div>
          
          <div className="social-links-minimal">
             <a href="https://github.com/roohithbala" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
             <a href="https://linkedin.com/in/roohithbala" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
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
