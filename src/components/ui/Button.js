import React from 'react';

const Button = ({ children, href, variant = 'primary', className }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm';

  const variants = {
    primary: 'text-white bg-indigo-600 hover:bg-indigo-700',
    secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className || ''}`;

  return (
    <a href={href} className={buttonClasses}>
      {children}
    </a>
  );
};

export default Button;