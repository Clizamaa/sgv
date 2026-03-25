'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Text } from './Text';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

export const ModalBase = ({ isOpen, onClose, title, children, maxWidth = 'max-w-md' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal Panel */}
      <div className={`relative w-full ${maxWidth} bg-white rounded-xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]`}>
        <div className="flex items-center justify-between p-4 border-b border-corporate-border shrink-0">
          <Text variant="h3">{title}</Text>
          <button 
            onClick={onClose}
            className="p-1.5 text-corporate-text-muted hover:text-corporate-text hover:bg-slate-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
