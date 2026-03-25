import React from 'react';
import { Label } from '../atoms/Label';

export const FormField = ({ label, required, children, className = '' }) => {
  return (
    <div className={className}>
      <Label required={required}>{label}</Label>
      {children}
    </div>
  );
};
