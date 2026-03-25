'use client';

import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Plus } from 'lucide-react';
import { AddDriverModal } from '../organisms/AddDriverModal';

export const AddDriverButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button variant="primary" className="gap-2 shrink-0" onClick={() => setIsModalOpen(true)}>
        <Plus className="w-4 h-4" />
        Agregar Conductor
      </Button>
      
      <AddDriverModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
