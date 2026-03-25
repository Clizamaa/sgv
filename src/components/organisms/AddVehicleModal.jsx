'use client';

import React, { useState } from 'react';
import { ModalBase } from '../atoms/ModalBase';
import { FormField } from '../molecules/FormField';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const AddVehicleModal = ({ isOpen, onClose }) => {
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
      // Simulate form submission
      handleClose();
    } else {
      handleNext();
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={handleClose} title="Agregar Nuevo Vehículo" maxWidth="max-w-3xl">
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
        
        {/* Sección 1: Información Básica e Identificación */}
        {step === 1 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">1. Información Básica e Identificación</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Placa / Matrícula" required>
                <Input placeholder="Ej: AB-CD-12" required />
              </FormField>
              
              <FormField label="Tipo de Vehículo" required>
                <Select required>
                  <option value="">Seleccione un tipo</option>
                  <option value="sedan">Sedán</option>
                  <option value="pickup">Pickup</option>
                  <option value="camion">Camión</option>
                  <option value="suv">SUV / Camioneta</option>
                  <option value="montacargas">Montacargas</option>
                </Select>
              </FormField>
              
              <FormField label="Marca" required>
                <Input placeholder="Ej: Toyota" required />
              </FormField>
  
              <FormField label="Modelo" required>
                <Input placeholder="Ej: Hilux" required />
              </FormField>
              
              <FormField label="Año de fabricación" required>
                <Input type="number" min="1990" max={new Date().getFullYear() + 1} placeholder="Ej: 2024" required />
              </FormField>
              
              <FormField label="Color" required>
                <Input placeholder="Ej: Blanco" required />
              </FormField>
              
              <FormField label="VIN (Número de Chasis)">
                <Input placeholder="Opcional" />
              </FormField>
              
              <FormField label="Número de Motor">
                <Input placeholder="Opcional" />
              </FormField>
            </div>
          </section>
        )}

        {/* Sección 2: Especificaciones Técnicas */}
        {step === 2 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">2. Especificaciones Técnicas</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Tipo de Combustible" required>
                <Select required>
                  <option value="">Seleccione combustible</option>
                  <option value="gasolina">Gasolina</option>
                  <option value="diesel">Diésel</option>
                  <option value="electrico">Eléctrico</option>
                  <option value="hibrido">Híbrido</option>
                </Select>
              </FormField>
              
              <FormField label="Kilometraje Inicial" required>
                <Input type="number" placeholder="Ej: 15000" min="0" required />
              </FormField>

              <FormField label="Capacidad del Tanque">
                <Input type="number" placeholder="Litros o Galones (Opcional)" min="0" />
              </FormField>
              
              <FormField label="Capacidad de Carga">
                <Input placeholder="Peso máximo (Opcional)" />
              </FormField>
              
              <FormField label="Tipo de Neumáticos">
                <Input placeholder="Medidas recomendadas (Opcional)" />
              </FormField>
              
              <FormField label="Rendimiento Estimado">
                <Input placeholder="Km/L (Opcional)" />
              </FormField>
            </div>
          </section>
        )}

        {/* Sección 3: Documentación y Legalidad */}
        {step === 3 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">3. Documentación y Legalidad</Text>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField label="Vencimiento Revisión Técnica" required>
                <Input type="date" required />
              </FormField>
              
              <FormField label="Vencimiento SOAP / Seguro" required>
                <Input type="date" required />
              </FormField>
              
              <FormField label="Vencimiento Permiso Circulación" required>
                <Input type="date" required />
              </FormField>
              
              <FormField label="Subida de Archivos (Padrón/Factura)">
                <Input type="file" multiple className="file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-corporate-primary/10 file:text-corporate-primary hover:file:bg-corporate-primary/20" />
              </FormField>
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
