'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { PanelLayout } from '@/components/templates/PanelLayout';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <PanelLayout currentPath={pathname}>
      {children}
    </PanelLayout>
  );
}
