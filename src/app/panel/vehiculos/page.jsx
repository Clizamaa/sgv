import React from 'react';
import { Text } from '@/components/atoms/Text';
import { CardBase } from '@/components/atoms/CardBase';
import { Button } from '@/components/atoms/Button';
import { AddVehicleButton } from '@/components/molecules/AddVehicleButton';
import { Search, Filter, Pencil, Trash2, Eye } from 'lucide-react';

export const metadata = {
  title: 'Vehículos | SGV Panel',
  description: 'Gestión de inventario de vehículos',
};

// Mock data based on SKILL.md requirements
const mockVehicles = [
  { id: 1, placa: 'AB-CD-12', marca: 'Toyota Hilux', anio: 2022, combustible: 'Diésel', kilometraje: '45,000 km' },
  { id: 2, placa: 'EF-GH-34', marca: 'Nissan Versa', anio: 2021, combustible: 'Gasolina', kilometraje: '62,300 km' },
  { id: 3, placa: 'IJ-KL-56', marca: 'Chevrolet Silverado', anio: 2023, combustible: 'Diésel', kilometraje: '12,500 km' },
  { id: 4, placa: 'MN-OP-78', marca: 'Hyundai Tucson', anio: 2020, combustible: 'Gasolina', kilometraje: '85,000 km' },
  { id: 5, placa: 'QR-ST-90', marca: 'Ford Transit', anio: 2022, combustible: 'Diésel', kilometraje: '38,200 km' },
];

export default function VehiculosPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Text variant="h1">Inventario de Vehículos</Text>
          <Text variant="muted" className="mt-1">
            Gestión y control de la flota institucional
          </Text>
        </div>
        <AddVehicleButton />
      </div>

      <CardBase noPadding>
        {/* Toolbar */}
        <div className="p-4 border-b border-corporate-border flex flex-col sm:flex-row gap-4 justify-between bg-slate-50">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-corporate-text-muted" />
            <input 
              type="text" 
              placeholder="Buscar por placa o marca..." 
              className="w-full pl-9 pr-4 py-2 border border-corporate-border rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary text-sm bg-white text-corporate-text"
            />
          </div>
          <Button variant="secondary" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="bg-slate-50 text-corporate-text border-b border-corporate-border">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">Placa</th>
                <th scope="col" className="px-6 py-3 font-semibold">Marca / Modelo</th>
                <th scope="col" className="px-6 py-3 font-semibold">Año</th>
                <th scope="col" className="px-6 py-3 font-semibold">Combustible</th>
                <th scope="col" className="px-6 py-3 font-semibold">Kilometraje</th>
                <th scope="col" className="px-6 py-3 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-corporate-border bg-white">
              {mockVehicles.map((vehiculo) => (
                <tr key={vehiculo.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-corporate-text">{vehiculo.placa}</td>
                  <td className="px-6 py-4 text-corporate-text-muted">{vehiculo.marca}</td>
                  <td className="px-6 py-4 text-corporate-text-muted">{vehiculo.anio}</td>
                  <td className="px-6 py-4 text-corporate-text-muted">{vehiculo.combustible}</td>
                  <td className="px-6 py-4 text-corporate-text">{vehiculo.kilometraje}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 text-corporate-text-muted hover:text-corporate-primary hover:bg-slate-100 rounded-full transition-colors" title="Editar">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-corporate-text-muted hover:text-corporate-primary hover:bg-slate-100 rounded-full transition-colors" title="Ver Detalles">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-corporate-text-muted hover:text-corporate-accent hover:bg-red-50 rounded-full transition-colors" title="Eliminar">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-corporate-border flex items-center justify-between bg-slate-50">
          <Text variant="muted" className="text-sm">
            Mostrando <span className="font-medium text-corporate-text">1</span> a <span className="font-medium text-corporate-text">5</span> de <span className="font-medium text-corporate-text">42</span> vehículos
          </Text>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" disabled>Anterior</Button>
            <Button variant="secondary" size="sm">Siguiente</Button>
          </div>
        </div>
      </CardBase>
    </div>
  );
}
