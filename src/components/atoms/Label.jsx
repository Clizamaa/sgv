import React from 'react';

export const Label = ({ children, className = '', required = false, ...props }) => {
  return (
    <label className={`block text-sm font-medium text-corporate-text mb-1.5 ${className}`} {...props}>
      {children}
      {required && <span className="text-corporate-accent ml-1">*</span>}
    </label>
  );
};
