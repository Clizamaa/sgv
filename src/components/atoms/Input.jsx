import React, { forwardRef } from 'react';

export const Input = forwardRef(({ className = '', error, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full px-3 py-2 bg-white border rounded-md text-sm text-corporate-text transition-colors focus:outline-none focus:ring-2 focus:ring-corporate-primary/20
        ${error ? 'border-corporate-accent focus:border-corporate-accent' : 'border-corporate-border focus:border-corporate-primary'}
        ${className}
      `}
      {...props}
    />
  );
});

Input.displayName = 'Input';
