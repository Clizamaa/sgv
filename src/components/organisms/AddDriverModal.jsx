'use client';

import React, { useState } from 'react';
import { ModalBase } from '../atoms/ModalBase';
import { FormField } from '../molecules/FormField';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const AddDriverModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === totalSteps) {
      // Simulate API submission
      handleClose();
    } else {
      handleNext();
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={handleClose} title="Agregar Nuevo Conductor" maxWidth="max-w-3xl">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm transition-colors ${
              step >= s ? 'bg-corporate-primary text-white' : 'bg-slate-100 text-corporate-text-muted'
            }`}>
              {s}
            </div>
            {s < totalSteps && (
              <div className={`w-12 sm:w-24 h-1 mx-2 transition-colors ${
                step > s ? 'bg-corporate-primary' : 'bg-slate-100'
              }`} />
            )}
          </div>
        ))}
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Etapa 1: Información Personal */}
        {step === 1 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">1. Información Personal (Identificación)</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="RUT / DNI / Pasaporte" required>
                <Input placeholder="Ej: 12.345.678-9" required />
              </FormField>
              
              <FormField label="Nombre Completo" required>
                <Input placeholder="Primer nombre, apellidos" required />
              </FormField>
              
              <FormField label="Fecha de Nacimiento" required>
                <Input type="date" required />
              </FormField>
              
              <FormField label="Dirección de Domicilio" required>
                <Input placeholder="Ciudad y comuna" required />
              </FormField>
              
              {/* Ocupa dos columnas visualmente o una completa dependiendo del ancho */}
              <div className="sm:col-span-2">
                <FormField label="Foto de Perfil (Opcional)">
                  <Input type="file" accept="image/*" className="file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-corporate-primary/10 file:text-corporate-primary hover:file:bg-corporate-primary/20" />
                </FormField>
              </div>
            </div>
          </section>
        )}

        {/* Etapa 2: Contacto y Emergencias */}
        {step === 2 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">2. Contacto y Emergencias</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Teléfono Celular" required>
                <Input type="tel" placeholder="+56 9 1234 5678" required />
              </FormField>
              
              <FormField label="Correo Electrónico" required>
                <Input type="email" placeholder="correo@ejemplo.com" required />
              </FormField>

              <FormField label="Contacto de Emergencia" required>
                <Input placeholder="Nombre y celular familiar" required />
              </FormField>
              
              <FormField label="Grupo Sanguíneo (Opcional)">
                <Select>
                  <option value="">Seleccione grupo (Ej: O+)</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </Select>
              </FormField>
            </div>
          </section>
        )}

        {/* Etapa 3: Documentación y Licencias */}
        {step === 3 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">3. Documentación y Licencias (Crítico)</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Número de Licencia de Conducir" required>
                <Input placeholder="Ej: 12.345.678-9" required />
              </FormField>
              
              <FormField label="Clase de Licencia" required>
                <Select required>
                  <option value="">Seleccione clase</option>
                  <option value="B">Clase B (Autos, pick-ups)</option>
                  <option value="A1">Clase A1 (Taxis)</option>
                  <option value="A2">Clase A2 (Ambulancias, Minibuses)</option>
                  <option value="A3">Clase A3 (Buses)</option>
                  <option value="A4">Clase A4 (Carga simple)</option>
                  <option value="A5">Clase A5 (Carga articulada)</option>
                  <option value="C">Clase C (Motocicletas)</option>
                  <option value="D">Clase D (Maquinaria)</option>
                </Select>
              </FormField>
              
              <FormField label="Vencimiento Licencia" required>
                <Input type="date" required />
              </FormField>
              
              <div className="sm:col-span-2">
                <FormField label="Carga de Archivos (Foto Licencia / Hoja Vida)" required>
                  <Input type="file" multiple className="file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-corporate-primary/10 file:text-corporate-primary hover:file:bg-corporate-primary/20" required />
                  <Text variant="caption" className="text-corporate-text-muted mt-2 block">
                    Debes adjuntar licencia escaneada (ambos lados) y hoja de vida del conductor.
                  </Text>
                </FormField>
              </div>
            </div>
          </section>
        )}
        
        {/* Footer actions */}
        <div className="pt-6 border-t border-corporate-border flex flex-col-reverse sm:flex-row justify-between gap-3 bottom-0 sticky bg-white py-4 mt-8">
          <Button type="button" variant="ghost" onClick={handleClose} className="sm:mr-auto">
            Cancelar Operación
          </Button>
          
          <div className="flex justify-end gap-3 w-full sm:w-auto">
            {step > 1 && (
              <Button type="button" variant="secondary" onClick={handlePrev}>
                Anterior
              </Button>
            )}
            
            {step < totalSteps ? (
              <Button type="submit" variant="primary">
                Siguiente
              </Button>
            ) : (
              <Button type="submit" variant="primary" className="bg-corporate-accent hover:bg-red-700">
                Finalizar y Guardar
              </Button>
            )}
          </div>
        </div>
      </form>
    </ModalBase>
  );
};
