"use client";
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle, FaTrophy, FaMedal } from 'react-icons/fa';
import { SiOracle, SiMongodb } from 'react-icons/si';

const Certifications = () => {
  const achievements = [
    {
      type: "certification",
      title: "Oracle APEX Cloud Certified Developer Professional",
      issuer: "Oracle",
      date: "Issued May 16, 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C33F91EB37D7E464335019E1D7EA2D85E1730F586D98C06E976A563ECD811BFF",
      icon: <SiOracle />,
      color: "#F80000",
      verified: true
    },
    {
      type: "certification",
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "Expires Sep 15, 2027",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E7246A1B86FC08E30EF5CA41622B9D50FA22B49316046280C313B02D2F0E7DEE",
      icon: <SiOracle />,
      color: "#F80000",
      verified: true
    },
    {
      type: "certification",
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "Expires Sep 7, 2027",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=376E4D3770DB99223AA56C4B960858D2CE48495EDB59CEA925DFFE8C34A9F120",
      icon: <SiOracle />,
      color: "#F80000",
      verified: true
    },
    {
      type: "certification",
      title: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
      issuer: "Oracle",
      date: "Issued Sep 7, 2025",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B0B4506454C29A6CD2A53AEB3E37BAF16D627C7D0434FB2DF0E0068FB1B4C5F0",
      icon: <SiOracle />,
      color: "#F80000",
      verified: true
    },
    {
      type: "certification",
      title: "Oracle Certified Professional: Java SE 17 Developer",
      issuer: "Oracle",
      date: "Issued Apr 22, 2026",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=19022490856343A346C8A78A4A1AB2455BDA1352F516B7A8BE42AA4B96FA4BCB",
      icon: <SiOracle />,
      color: "#F80000",
      verified: true
    },
    {
      type: "certification",
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      date: "Issued May 1, 2025",
      link: "https://www.credly.com/badges/5e9ad4c3-74bd-40db-b0f8-1d1d6b922fa8",
      icon: <SiMongodb />,
      color: "#47A248",
      verified: true
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="subtitle">Recognition</span>
          <h2 className="section-title">Certifications & Awards</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="certifications-grid">
          {achievements.map((item, index) => (
            <motion.div 
              className={`cert-card ${item.type === 'award' ? 'award-card' : ''}`}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {item.verified && (
                <div className="cert-badge">
                  <FaCheckCircle className="verified-icon" /> Verified
                </div>
              )}
              
              {!item.verified && item.type === 'award' && (
                <div className="cert-badge award-badge">
                  <FaMedal className="verified-icon" /> Winner
                </div>
              )}
              
              <div className="cert-card-content">
                <div className="cert-header">
                  <div className="cert-logo" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="cert-meta">
                    <span className="cert-issuer-name">{item.issuer}</span>
                    <span className="cert-date-text">{item.date}</span>
                  </div>
                </div>

                <h3 className="cert-display-title">{item.title}</h3>
                
                {item.desc && <p className="cert-desc">{item.desc}</p>}
                
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-action-btn"
                  >
                    <span>Verify Credential</span>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              
              <div className="cert-glow" style={{ background: `radial-gradient(circle at center, ${item.color}20 0%, transparent 70%)` }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
