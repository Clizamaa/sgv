import React from 'react';

export const Text = ({
  as: Component = 'p',
  variant = 'body',
  className = '',
  children,
  ...props
}) => {
  const variants = {
    h1: "text-3xl font-semibold tracking-tight text-corporate-text",
    h2: "text-2xl font-semibold tracking-tight text-corporate-text",
    h3: "text-xl font-medium tracking-tight text-corporate-text",
    body: "text-base text-corporate-text",
    muted: "text-sm text-corporate-text-muted",
    caption: "text-xs text-corporate-text-muted font-medium uppercase tracking-wider",
  };

  return (
    <Component className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};
