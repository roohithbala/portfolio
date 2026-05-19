import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects=()=>{
  const projects=[
    {
      title:"Consultancy Project",
      desc:"Developed a professional business website for Zain Fabrics to showcase their products, services, and brand identity, improving their online presence and customer reach.",
      tags:["Web Development","UI/UX","Business Website"],
      links:{github:"https://github.com/roohithbala/consultancy",site:"https://consultancy-orpin-seven.vercel.app"},
      img:"https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=80"
    },
    {
      title:"AI Bug Tracker",
      desc:"Engineered a full-stack AI-powered system that analyzes error logs and provides intelligent diagnostics with suggested fixes using Gemini AI. Implements secure authentication and efficient data storage.",
      tags:["Python","Flask","React.js","Gemini AI","SQLite"],
      links:{github:"https://github.com/roohithbala/ai-bug-tracker",site:"https://roohithbala.github.io/ai-bug-tracker/"},
      img:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=80"
    },
    {
      title:"PlaceHub",
      desc:"Developed an anonymous placement preparation platform that facilitates meaningful connections between students and experienced mentors. Features secure user management and experience sharing.",
      tags:["React JS","MongoDB","Express.js"],
      links:{github:"https://github.com/roohithbala/placement",site:"https://placement-8rwv.vercel.app/login"},
      img:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80"
    },
    {
      title:"Finance Management App",
      desc:"Built a sophisticated chat-based personal finance application with React Native frontend and Node.js backend. Provides intuitive financial tracking and management capabilities.",
      tags:["React Native","MongoDB","Express.js"],
      links:{github:"https://github.com/roohithbala/finance-app",site:"/portfolio/SecureFinance.aab"},
      img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
    },
    {
      title:"AI Project Idea Generator",
      desc:"Developed an AI-powered system that generates innovative and tailored project ideas using Gemini AI. Helps developers overcome creative blocks by providing detailed project roadmaps and tech stack recommendations.",
      tags:["AI","Gemini API","React.js","Node.js"],
      links:{github:"https://github.com/roohithbala/freelancers_hackathon",site:"https://roohithbala.github.io/freelancers_hackathon/"},
      img:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&auto=format&fit=crop&q=80"
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
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub Repository">
                      <FaGithub />
                    </a>
                    {project.links.site&&(
                      <a 
                        href={project.links.site} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link" 
                        title={project.links.site.endsWith('.aab')?"Download App Bundle":"Live Demo"}
                        download={project.links.site.endsWith('.aab')?true:undefined}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
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
