import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle APEX Cloud Certified Developer Professional",
      issuer: "Oracle",
      date: "Issued May 16, 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C33F91EB37D7E464335019E1D7EA2D85E1730F586D98C06E976A563ECD811BFF"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "Expires Sep 15, 2027",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E7246A1B86FC08E30EF5CA41622B9D50FA22B49316046280C313B02D2F0E7DEE"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "Expires Sep 7, 2027",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=376E4D3770DB99223AA56C4B960858D2CE48495EDB59CEA925DFFE8C34A9F120"
    },
    {
      title: "Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1",
      issuer: "Oracle",
      date: "Issued Sep 7, 2025",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B0B4506454C29A6CD2A53AEB3E37BAF16D627C7D0434FB2DF0E0068FB1B4C5F0"
    },
    {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      issuer: "Oracle",
      date: "Issued Apr 22, 2026",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=19022490856343A346C8A78A4A1AB2455BDA1352F516B7A8BE42AA4B96FA4BCB"
    },
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      date: "Issued May 1, 2025",
      link: "https://www.credly.com/badges/5e9ad4c3-74bd-40db-b0f8-1d1d6b922fa8"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Certifications
        </motion.h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div 
              className="cert-card glass"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="cert-icon-wrapper">
                <FaCertificate className="cert-icon" />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-info">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link-btn"
                >
                  Verify Credential <FaExternalLinkAlt className="ms-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
