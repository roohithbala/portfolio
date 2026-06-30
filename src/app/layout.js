import './globals.css';
import '../components/Navbar.css';
import '../components/Hero.css';
import '../components/About.css';
import '../components/Skills.css';
import '../components/Projects.css';
import '../components/Experience.css';
import '../components/Certifications.css';
import '../components/Contact.css';
import '../components/CustomCursor.css';
import '../components/Footer.css';

export const metadata={
  title:"Roohith Bala | Full Stack Developer",
  description:"Portfolio of Roohith Bala - Software Engineer and Full Stack Developer specialized in building scalable backend services and responsive frontend applications."
};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
