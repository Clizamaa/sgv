'use client';

import React, { useState } from 'react';
import { ModalBase } from '../atoms/ModalBase';
import { FormField } from '../molecules/FormField';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Checkbox } from '../atoms/Checkbox';
import { Select } from '../atoms/Select';
import { SearchableSelect } from '../atoms/SearchableSelect';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

const BIOBIO_COMMUNES = [
  "Concepción", "Talcahuano", "Hualpén", "San Pedro de la Paz", "Chiguayante", 
  "Coronel", "Lota", "Penco", "Tomé", "Florida", "Hualqui", "Santa Juana", 
  "Los Ángeles", "Cabrero", "Tucapel", "Antuco", "Quilleco", "Santa Bárbara", 
  "Quilaco", "Mulchén", "Negrete", "Nacimiento", "Laja", "San Rosendo", "Yumbel", 
  "Alto Biobío", "Lebu", "Arauco", "Curanilahue", "Los Álamos", "Cañete", 
  "Contulmo", "Tirúa"
].map(c => ({ value: c, label: c })).sort((a,b) => a.label.localeCompare(b.label));

export const AddReservationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isRecurrent, setIsRecurrent] = useState(false);
  const [comunaSelected, setComunaSelected] = useState('');
  const totalSteps = 2;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1);
    setIsRecurrent(false);
    setComunaSelected('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === totalSteps) {
      // Simulate submission of reservation
      handleClose();
    } else {
      handleNext();
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={handleClose} title="Solicitar Vehículo" maxWidth="max-w-2xl">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-6">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center w-full">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm transition-colors shrink-0 ${step >= s ? 'bg-corporate-primary text-white' : 'bg-slate-100 text-corporate-text-muted'
              }`}>
              {s}
            </div>
            {s < totalSteps && (
              <div className={`flex-1 h-1 mx-4 transition-colors ${step > s ? 'bg-corporate-primary' : 'bg-slate-100'
                }`} />
            )}
          </div>
        ))}
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Etapa 1: Detalles del Viaje */}
        {step === 1 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">1. Detalles del Viaje y Logística</Text>
            </div>

            <div className="space-y-4">
              <FormField label="Motivo de la Reserva" required>
                <Textarea
                  placeholder="Explique brevemente el propósito institucional de este viaje..."
                  required
                />
              </FormField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Dirección" required>
                  <Input placeholder="Ej: Av. Principal 1234, Planta Sur..." required />
                </FormField>

                <FormField label="Comuna (Región del Biobío)" required>
                  <SearchableSelect 
                    options={BIOBIO_COMMUNES}
                    placeholder="Seleccione comuna"
                    value={comunaSelected}
                    onChange={setComunaSelected}
                    required
                  />
                </FormField>

                <FormField label="Cantidad de Pasajeros" required>
                  <Input type="number" min="1" max="50" placeholder="Ej: 4" required />
                </FormField>
              </div>
            </div>
          </section>
        )}

        {/* Etapa 2: Horarios */}
        {step === 2 && (
          <section className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-4 pb-2 border-b border-corporate-border">
              <Text variant="h3" className="text-corporate-primary">2. Selección de Horarios</Text>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField label="Fecha y Hora de Inicio" required>
                  <Input type="datetime-local" required />
                </FormField>

                <FormField label="Fecha y Hora de Regreso (aprox.)" required>
                  <Input type="datetime-local" required />
                </FormField>
              </div>

              <div className="p-4 bg-slate-50 border border-corporate-border rounded-lg space-y-4">
                <Checkbox
                  id="recurrent-check"
                  label="¿Es un viaje recurrente?"
                  description="Marque esta opción si necesita programar este viaje de forma periódica."
                  checked={isRecurrent}
                  onChange={(e) => setIsRecurrent(e.target.checked)}
                />

                {isRecurrent && (
                  <div className="pt-4 border-t border-corporate-border grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                    <FormField label="Frecuencia" required>
                      <Select required>
                        <option value="">Seleccionar frecuencia</option>
                        <option value="diario">Todos los días</option>
                        <option value="semanal">Semanalmente (ej. todos los lunes)</option>
                        <option value="quincenal">Quincenalmente</option>
                        <option value="mensual">Mensualmente</option>
                      </Select>
                    </FormField>

                    <FormField label="Hasta la fecha" required>
                      <Input type="date" required />
                    </FormField>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Footer actions */}
        <div className="pt-6 border-t border-corporate-border flex flex-col-reverse sm:flex-row justify-between gap-3 bottom-0 sticky bg-white py-4 mt-8">
          <Button type="button" variant="ghost" onClick={handleClose} className="sm:mr-auto">
            Cancelar Reserva
          </Button>

          <div className="flex justify-end gap-3 w-full sm:w-auto">
            {step > 1 && (
              <Button type="button" variant="secondary" onClick={handlePrev}>
                Anterior
              </Button>
            )}

            {step < totalSteps ? (
              <Button type="submit" variant="primary">
                Elegir Horarios
              </Button>
            ) : (
              <Button type="submit" variant="primary" className="bg-corporate-primary">
                Enviar Solicitud
              </Button>
            )}
          </div>
        </div>
      </form>
    </ModalBase>
  );
};
