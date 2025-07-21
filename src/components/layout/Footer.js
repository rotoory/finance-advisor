import React from 'react';
import Container from '../ui/Container';

const Footer = ({ socialLinks, footerText }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-gray-400 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-gray-400 text-sm">
          {footerText}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;