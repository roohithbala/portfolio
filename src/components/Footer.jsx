import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Roohith Bala. All rights reserved.
        </p>
        <p className="made-with">
          Made with <FaHeart className="heart-icon" /> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
