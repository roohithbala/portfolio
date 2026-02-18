import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "AI Bug Tracker",
      desc: "Built a full-stack AI-based system to analyze error logs securely and identify issues with suggested fixes.",
      tags: ["Python", "Flask", "React.js", "Gemini AI", "SQLite"],
      links: { github: "https://github.com/roohithbala/ai-bug-tracker" },
      img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=80" // Code/AI related
    },
    {
      title: "PlaceHub",
      desc: "Anonymous placement preparation platform connecting students with mentors and experiences.",
      tags: ["React JS", "MongoDB", "Express.js"],
      links: { github: "https://github.com/roohithbala/ai-bug-tracker" }, // Keeping user provided link despite duplicate suspicion
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80" // Students/Mentorship
    },
    {
      title: "Finance Management App",
      desc: "Built a chat-based personal finance mobile application using React Native with Express and MongoDB backend.",
      tags: ["React Native", "MongoDB", "Express.js"],
      links: { github: "https://github.com/roohithbala/finance-app" },
      img: "https://images.unsplash.com/photo-1554224155-98406858d0ade?w=600&auto=format&fit=crop&q=80" // Finance
    },
    {
      title: "Library Management System",
      desc: "A comprehensive library management solution with AI-powered smart search capabilities, inventory tracking, and user management.",
      tags: ["Python", "Flask", "SQL", "AI", "REST API"],
      links: { github: "https://github.com/roohithbala/libmanagement" },
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600"
    },
    {
      title: "Movie Ticket Management",
      desc: "A web application for booking and managing movie tickets, featuring seat selection, payment integration, and user authentication.",
      tags: ["Python", "Flask", "Bootstrap"],
      links: { github: "https://github.com/Ponkanimozhi-Sakthivel/movieticketbooking" },
      img: "https://media.istockphoto.com/id/1392208349/photo/conceptual-photo-of-going-to-a-movie-theater.webp?b=1&s=170667a&w=0&k=20&c=wdmb9d99c4h-eU9PbdWqpj4YFDn_g7wR0cCLUEcTXRc="
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card glass"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-img-wrapper">
                <img src={project.img} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="view-more">
          <a href="https://github.com/roohithbala" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View More on GitHub <FaGithub className="ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
