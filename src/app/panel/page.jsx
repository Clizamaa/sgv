import React from 'react';
import { StatGrid } from '@/components/organisms/StatGrid';
import { Text } from '@/components/atoms/Text';
import { CardBase } from '@/components/atoms/CardBase';
import { Button } from '@/components/atoms/Button';
import { Plus } from 'lucide-react';

export const metadata = {
  title: 'Dashboard | SGV Panel',
  description: 'Panel de administración de vehículos',
};

export default function PanelPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <Text variant="h1">Panel de Control</Text>
          <Text variant="muted" className="mt-1">
            Resumen del estado operativo de la flota
          </Text>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="w-4 h-4" />
          Nueva Reserva
        </Button>
      </div>

      <StatGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CardBase className="lg:col-span-2">
          <div className="mb-4">
            <Text variant="h3">Actividad Reciente</Text>
            <Text variant="muted">Reservas y movimientos de hoy</Text>
          </div>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-corporate-border rounded-lg bg-slate-50">
            <Text variant="muted">El gráfico de actividad se integrará aquí</Text>
          </div>
        </CardBase>

        <CardBase>
          <div className="mb-4">
            <Text variant="h3">Últimas Solicitudes</Text>
          </div>
          <div className="flex flex-col gap-4 border-t border-corporate-border pt-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 py-2 hover:bg-slate-50 transition-colors cursor-pointer rounded-md">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Text variant="caption" className="text-blue-600">NUE</Text>
                </div>
                <div>
                  <Text variant="body" className="font-medium">Juan Pérez - Depto. IT</Text>
                  <Text variant="muted">Camioneta 4x4 - Mañana 08:00</Text>
                </div>
              </div>
            ))}
            <Button variant="ghost" className="w-full mt-2">Ver todas</Button>
          </div>
        </CardBase>
      </div>
    </div>
  );
}