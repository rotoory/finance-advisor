import React from 'react';
import Container from '../ui/Container';

const Header = ({ navItems }) => {
  return (
    <header className="sticky top-0 bg-white shadow-md">
      <Container className="flex items-center justify-between h-16">
        {/* Logo Placeholder */}
        <div className="text-xl font-bold">Logo</div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-gray-600 hover:text-gray-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;