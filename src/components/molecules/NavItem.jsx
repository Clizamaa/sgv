'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Text } from '../atoms/Text';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const NavItem = ({ icon: Icon, label, path, isActive = false, subItems = [] }) => {
  const hasSubItems = subItems && subItems.length > 0;
  
  // Auto-expand if a subitem is active
  const isAnySubItemActive = hasSubItems && subItems.some(sub => sub.isActive);
  const [isOpen, setIsOpen] = useState(isAnySubItemActive);

  if (hasSubItems) {
    return (
      <div className="w-full flex flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors
            ${isAnySubItemActive || isOpen
              ? 'bg-white/10 text-white'
              : 'text-white/70 hover:bg-white/10 hover:text-white'}
          `}
        >
          <div className="flex items-center gap-3">
            <Icon className={`w-5 h-5 ${(isAnySubItemActive || isOpen) ? 'text-white' : 'text-white/70'}`} />
            <Text variant="body" className={`font-medium ${(isAnySubItemActive || isOpen) ? 'text-white' : 'text-white/70'}`}>
              {label}
            </Text>
          </div>
          {isOpen ? (
            <ChevronDown className={`w-4 h-4 ${(isAnySubItemActive || isOpen) ? 'text-white' : 'text-white/70'}`} />
          ) : (
            <ChevronRight className={`w-4 h-4 ${(isAnySubItemActive || isOpen) ? 'text-white' : 'text-white/70'}`} />
          )}
        </button>

        {/* SubItems list */}
        {isOpen && (
          <div className="flex flex-col gap-1 mt-1 pl-11 animate-in slide-in-from-top-2 duration-200">
            {subItems.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.path}
                className={`w-full px-3 py-2 rounded-md transition-colors
                  ${sub.isActive
                    ? 'bg-white/20 text-white font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/10'}
                `}
              >
                <Text variant="caption" className={`font-medium ${sub.isActive ? 'text-white' : 'text-white/60'}`}>
                  {sub.label}
                </Text>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={path}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
        ${isActive
          ? 'bg-white/10 text-white'
          : 'text-white/70 hover:bg-white/10 hover:text-white'}
      `}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/70'}`} />
      <Text variant="body" className={`font-medium ${isActive ? 'text-white' : 'text-white/70'}`}>
        {label}
      </Text>
    </Link>
  );
};
