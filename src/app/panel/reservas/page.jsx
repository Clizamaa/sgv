import React from 'react';
import { Text } from '@/components/atoms/Text';
import { CardBase } from '@/components/atoms/CardBase';
import { Button } from '@/components/atoms/Button';
import { AddReservationButton } from '@/components/molecules/AddReservationButton';
import { Search, Filter, Pencil, Trash2, Eye, CalendarClock } from 'lucide-react';

export const metadata = {
  title: 'Reservas | SGV Panel',
  description: 'Gestión de solicitudes y reservas de vehículos',
};

// Mock data based on reservations
const mockReservations = [
  { id: 1, solicitante: 'Carlos Soto', destino: 'Planta Sur', pasajeros: 3, salida: '2026-03-26 09:00', regreso: '2026-03-26 14:00', estado: 'Pendiente' },
  { id: 2, solicitante: 'María González', destino: 'Reunión Directores, Sede Central', pasajeros: 5, salida: '2026-03-28 10:30', regreso: '2026-03-28 13:00', estado: 'Aprobada' },
  { id: 3, solicitante: 'Juan Pérez', destino: 'Supervisión Obras', pasajeros: 2, salida: '2026-03-25 08:00', regreso: '2026-03-25 18:00', estado: 'En Curso' },
  { id: 4, solicitante: 'Ana Torres', destino: 'Municipalidad', pasajeros: 1, salida: '2026-03-22 11:00', regreso: '2026-03-22 12:30', estado: 'Completada' },
];

const getStatusBadge = (estado) => {
  switch (estado) {
    case 'Aprobada':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">Aprobada</span>;
    case 'Pendiente':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">Pendiente</span>;
    case 'En Curso':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">En Curso</span>;
    case 'Completada':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">Completada</span>;
    default:
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">{estado}</span>;
  }
};

export default function ReservasPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Text variant="h1">Gestión de Reservas</Text>
          <Text variant="muted" className="mt-1">
            Solicitudes de vehículos, asignación y cronograma de salidas
          </Text>
        </div>
        
        <AddReservationButton />
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <CardBase className="bg-corporate-primary/5 border-corporate-primary/20 flex items-center justify-between">
            <div>
                <Text variant="caption" className="text-corporate-text-muted font-semibold uppercase tracking-wider">Pendientes</Text>
                <Text variant="h2" className="text-corporate-primary mt-1">12</Text>
            </div>
            <div className="p-3 bg-white rounded-full text-corporate-primary shadow-sm">
                <CalendarClock className="w-5 h-5" />
            </div>
        </CardBase>
        <CardBase className="bg-green-50/50 border-green-200 flex items-center justify-between">
            <div>
                <Text variant="caption" className="text-corporate-text-muted font-semibold uppercase tracking-wider">Aprobadas (Esta semana)</Text>
                <Text variant="h2" className="text-green-700 mt-1">28</Text>
            </div>
            <div className="p-3 bg-white rounded-full text-green-600 shadow-sm">
                <CalendarClock className="w-5 h-5" />
            </div>
        </CardBase>
        <CardBase className="bg-blue-50/50 border-blue-200 flex items-center justify-between">
            <div>
                <Text variant="caption" className="text-corporate-text-muted font-semibold uppercase tracking-wider">En Ruta Actualmente</Text>
                <Text variant="h2" className="text-blue-700 mt-1">4</Text>
            </div>
            <div className="p-3 bg-white rounded-full text-blue-600 shadow-sm">
                <CalendarClock className="w-5 h-5" />
            </div>
        </CardBase>
      </div>

      <CardBase noPadding>
        {/* Toolbar */}
        <div className="p-4 border-b border-corporate-border flex flex-col sm:flex-row gap-4 justify-between bg-slate-50">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-corporate-text-muted" />
            <input 
              type="text" 
              placeholder="Buscar por solicitante, destino..." 
              className="w-full pl-9 pr-4 py-2 border border-corporate-border rounded-md focus:outline-none focus:ring-2 focus:ring-corporate-primary/20 focus:border-corporate-primary text-sm bg-white text-corporate-text"
            />
          </div>
          <Button variant="secondary" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtrar Estado
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="bg-slate-50 text-corporate-text border-b border-corporate-border">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">Solicitante</th>
                <th scope="col" className="px-6 py-3 font-semibold">Destino</th>
                <th scope="col" className="px-6 py-3 font-semibold text-center">Pasajeros</th>
                <th scope="col" className="px-6 py-3 font-semibold">Salida Programada</th>
                <th scope="col" className="px-6 py-3 font-semibold">Estado</th>
                <th scope="col" className="px-6 py-3 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-corporate-border bg-white">
              {mockReservations.map((res) => (
                <tr key={res.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-corporate-text">{res.solicitante}</td>
                  <td className="px-6 py-4 text-corporate-text-muted max-w-[200px] truncate" title={res.destino}>{res.destino}</td>
                  <td className="px-6 py-4 text-corporate-text-muted text-center">{res.pasajeros}</td>
                  <td className="px-6 py-4 text-corporate-text-muted">
                    <div className="flex flex-col">
                        <span>{res.salida}</span>
                        <span className="text-xs text-corporate-text-muted/60 mt-0.5">Regreso: {res.regreso}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(res.estado)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 text-corporate-text-muted hover:text-corporate-primary hover:bg-slate-100 rounded-full transition-colors" title="Ver Detalles/Aprobar">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-corporate-text-muted hover:text-corporate-primary hover:bg-slate-100 rounded-full transition-colors" title="Editar Solicitud">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-corporate-text-muted hover:text-corporate-accent hover:bg-red-50 rounded-full transition-colors" title="Rechazar/Eliminar">
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
            Mostrando <span className="font-medium text-corporate-text">1</span> a <span className="font-medium text-corporate-text">4</span> de <span className="font-medium text-corporate-text">42</span> reservas
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
