'use client';

import React from 'react';
import { NavItem } from '../molecules/NavItem';
import { LayoutDashboard, Calendar, Settings, Database } from 'lucide-react';
import { Text } from '../atoms/Text';

export const Sidebar = ({ currentPath = '/panel' }) => {
  const navLinks = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/panel' },
    {
      label: 'Mantenedor',
      icon: Database,
      subItems: [
        { label: 'Vehículos', path: '/panel/vehiculos', isActive: currentPath === '/panel/vehiculos' },
        { label: 'Conductores', path: '/panel/conductores', isActive: currentPath === '/panel/conductores' }
      ]
    },
    { label: 'Reservas', icon: Calendar, path: '/panel/reservas' },
    { label: 'Configuración', icon: Settings, path: '/panel/configuracion' },
  ];

  return (
    <aside className="w-64 border-r border-[#152763] bg-corporate-primary text-white flex flex-col h-full">
      <div className="p-6 border-b border-white/20">
        <Text variant="h2" className="text-white tracking-tighter">SGV Panel</Text>
      </div>
      <nav className="flex-1 p-4 flex flex-col gap-2">
        {navLinks.map((link) => (
          <NavItem
            key={link.label}
            icon={link.icon}
            label={link.label}
            path={link.path}
            isActive={currentPath === link.path}
            subItems={link.subItems}
          />
        ))}
      </nav>
      <div className="p-4 border-t border-white/20">
        <Text variant="caption" className="text-white/60">Versión 0.0.1</Text>
      </div>
    </aside>
  );
};
