import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setFormStatus('success');
        formRef.current.reset();
        setTimeout(() => setFormStatus(null), 5000);
      }, (error) => {
        console.error('Error:', error);
        setFormStatus('error');
        alert('Failed to send message. Please check your EmailJS configuration.');
        setTimeout(() => setFormStatus(null), 3000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm currently open to freelance opportunities and interesting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <a href="mailto:roohithbala@outlook.com">roohithbala@outlook.com</a>
              </div>
              <div className="contact-item">
                <FaLinkedin className="icon" />
                <a href="https://linkedin.com/in/roohithbala" target="_blank" rel="noopener noreferrer">linkedin.com/in/roohithbala</a>
              </div>
              <div className="contact-item">
                <FaGithub className="icon" />
                <a href="https://github.com/roohithbala" target="_blank" rel="noopener noreferrer">github.com/roohithbala</a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            ref={formRef}
            className="contact-form glass"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={formStatus === 'sending' || formStatus === 'success'}>
              {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : (
                <>Send Message <FaPaperPlane className="ms-2" /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
