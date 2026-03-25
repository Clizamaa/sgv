import React from 'react';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Bell, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-16 border-b border-corporate-border border-t-4 border-t-corporate-accent bg-corporate-surface flex items-center justify-between px-6 shrink-0">
      <div>
        <Text variant="h3">Bienvenido, Admin</Text>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-corporate-text-muted hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-corporate-accent rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-px bg-corporate-border mx-2"></div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-corporate-primary/10 flex items-center justify-center text-corporate-primary font-medium">
            <User className="w-4 h-4" />
          </div>
          <Text variant="body" className="font-medium hidden sm:block">Admin. Principal</Text>
        </div>
      </div>
    </header>
  );
};
