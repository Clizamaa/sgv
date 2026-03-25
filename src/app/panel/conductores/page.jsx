import React from 'react';
import { Text } from '@/components/atoms/Text';
import { CardBase } from '@/components/atoms/CardBase';
import { Button } from '@/components/atoms/Button';
import { AddDriverButton } from '@/components/molecules/AddDriverButton';
import { Search, Filter, Pencil, Trash2, Eye } from 'lucide-react';

export const metadata = {
  title: 'Conductores | SGV Panel',
  description: 'Gestión y mantenedor de conductores',
};

// Mock data based on SKILL.md requirements (CRUD conductores y licencias)
const mockDrivers = [
  { id: 1, rut: '15.234.567-8', nombre: 'Juan Pérez Silva', licencia: 'Clase A2', vencimiento: '2025-10-15', estado: 'Activo' },
  { id: 2, rut: '18.765.432-1', nombre: 'María González López', licencia: 'Clase B', vencimiento: '2024-05-20', estado: 'Activo' },
  { id: 3, rut: '12.345.678-9', nombre: 'Carlos Soto Ramírez', licencia: 'Clase A4', vencimiento: '2023-11-05', estado: 'Licencia Vencida' },
  { id: 4, rut: '19.876.543-K', nombre: 'Ana Torres Vega', licencia: 'Clase B', vencimiento: '2026-02-14', estado: 'Inactivo' },
  { id: 5, rut: '14.567.890-2', nombre: 'Pedro Rojas Díaz', licencia: 'Clase A3', vencimiento: '2025-08-30', estado: 'Activo' },
];

const getStatusBadge = (estado) => {
  switch (estado) {
    case 'Activo':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">Activo</span>;
    case 'Inactivo':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">Inactivo</span>;
    case 'Licencia Vencida':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">Licencia Vencida</span>;
    default:
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">{estado}</span>;
  }
};

export default function ConductoresPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Text variant="h1">Mantenedor de Conductores</Text>
          <Text variant="muted" className="mt-1">
            Gestión de personal autorizado y control de licencias
          </Text>
        </div>
        
        <AddDriverButton />
      </div>

      <CardBase noPadding>
        {/* Toolbar */}
        <div className="p-4 border-b border-corporate-border flex flex-col sm:flex-row gap-4 justify-between bg-slate-50">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-corporate-text-muted" />
            <input 
              type="text" 
              placeholder="Buscar por RUT o nombre..." 
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
                <th scope="col" className="px-6 py-3 font-semibold">RUT</th>
                <th scope="col" className="px-6 py-3 font-semibold">Nombre Completo</th>
                <th scope="col" className="px-6 py-3 font-semibold">Licencia</th>
                <th scope="col" className="px-6 py-3 font-semibold">Vencimiento</th>
                <th scope="col" className="px-6 py-3 font-semibold">Estado</th>
                <th scope="col" className="px-6 py-3 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-corporate-border bg-white">
              {mockDrivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-corporate-text">{driver.rut}</td>
                  <td className="px-6 py-4 text-corporate-text-muted">{driver.nombre}</td>
                  <td className="px-6 py-4 text-corporate-text-muted">{driver.licencia}</td>
                  <td className={`px-6 py-4 ${driver.estado === 'Licencia Vencida' ? 'text-corporate-accent font-medium' : 'text-corporate-text-muted'}`}>
                    {driver.vencimiento}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(driver.estado)}
                  </td>
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
            Mostrando <span className="font-medium text-corporate-text">1</span> a <span className="font-medium text-corporate-text">5</span> de <span className="font-medium text-corporate-text">18</span> conductores
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
