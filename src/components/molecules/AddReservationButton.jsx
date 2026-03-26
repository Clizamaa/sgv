'use client';

import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Plus } from 'lucide-react';
import { AddReservationModal } from '../organisms/AddReservationModal';

export const AddReservationButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button variant="primary" className="gap-2 shrink-0" onClick={() => setIsModalOpen(true)}>
        <Plus className="w-4 h-4" />
        Nueva Reserva
      </Button>
      
      <AddReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};
