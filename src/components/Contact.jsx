"use client";
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const lastSent=localStorage.getItem('last_sent');
    if(lastSent&&Date.now()-parseInt(lastSent,10)<180000){
      setFormStatus('rate-limited');
      setTimeout(()=>setFormStatus(null),5000);
      return;
    }
    setFormStatus('sending');
    const fd=new FormData(formRef.current);
    const payload={
      name:fd.get('name'),
      email:fd.get('email'),
      message:fd.get('message')
    };
    try{
      const res=await axios.post(process.env.NEXT_PUBLIC_CONTACT_API_URL||'/api/contact',payload);
      if(res.data&&res.data.success){
        setFormStatus('success');
        localStorage.setItem('last_sent',Date.now().toString());
        formRef.current.reset();
        setTimeout(()=>setFormStatus(null),5000);
      }else{
        console.error(res.data?.error||'API Error');
        setFormStatus(res.data?.error==='Rate limit reached'?'rate-limited':'error');
        setTimeout(()=>setFormStatus(null),5000);
      }
    }catch(err){
      console.error(err);
      if(err.response?.status===429||err.response?.data?.error==='Rate limit reached'){
        setFormStatus('rate-limited');
      }else{
        setFormStatus('error');
      }
      setTimeout(()=>setFormStatus(null),5000);
    }
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
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind? Let's collaborate and build something amazing together.
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Connect With Me</h3>
            <p>
              I'm open to new opportunities, collaborations, and interesting projects. Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.
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
            <button type="submit" className="btn btn-primary" disabled={formStatus === 'sending' || formStatus === 'success' || formStatus === 'rate-limited'}>
              {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : formStatus === 'rate-limited' ? 'Wait a bit' : (
                <>Send Message <FaPaperPlane className="ms-2" /></>
              )}
            </button>
            {formStatus === 'rate-limited' && <p className="status-msg error">Rate limit reached. Please wait a few minutes before sending another message.</p>}
            {formStatus === 'error' && <p className="status-msg error">Failed to send message. Please try again later.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
