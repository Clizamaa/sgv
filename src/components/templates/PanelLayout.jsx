import React from 'react';
import { Sidebar } from '../organisms/Sidebar';
import { Header } from '../organisms/Header';


export const PanelLayout = ({ children, currentPath }) => {
  return (
    <div className="flex h-screen w-full bg-corporate-bg overflow-hidden">
      <Sidebar currentPath={currentPath} />
      <div className="flex flex-col flex-1 min-w-0">
        <Header />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
