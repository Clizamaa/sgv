import React from 'react';

export const CardBase = ({
  children,
  className = '',
  noPadding = false,
  ...props
}) => {
  return (
    <div
      className={`bg-corporate-surface border border-corporate-border rounded-xl shadow-sm overflow-hidden ${noPadding ? '' : 'p-6'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
