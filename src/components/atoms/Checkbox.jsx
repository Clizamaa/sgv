import React, { forwardRef } from 'react';

export const Checkbox = forwardRef(({ className = '', label, description, ...props }, ref) => {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex h-5 items-center">
        <input
          type="checkbox"
          ref={ref}
          className="h-4 w-4 rounded border-corporate-border bg-white text-corporate-primary focus:ring-2 focus:ring-corporate-primary/20 accent-corporate-primary transition-colors cursor-pointer"
          {...props}
        />
      </div>
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label className="text-sm font-medium text-corporate-text cursor-pointer">
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-corporate-text-muted mt-0.5">{description}</p>
          )}
        </div>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
