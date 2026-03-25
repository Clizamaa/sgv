import React, { forwardRef } from 'react';

export const Select = forwardRef(({ className = '', children, error, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`w-full px-3 py-2 bg-white border rounded-md text-sm text-corporate-text transition-colors focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 appearance-none
        ${error ? 'border-corporate-accent focus:border-corporate-accent' : 'border-corporate-border focus:border-corporate-primary'}
        ${className}
      `}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundPosition: 'right 0.5rem center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem'
      }}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';
