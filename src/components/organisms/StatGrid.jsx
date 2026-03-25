import React from 'react';
import { StatCard } from '../molecules/StatCard';
import { Car, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export const StatGrid = () => {
  const stats = [
    { title: 'Vehículos Totales', value: '42', icon: Car, trend: 5 },
    { title: 'En Uso', value: '18', icon: Clock, trend: 12 },
    { title: 'En Mantenimiento', value: '3', icon: AlertTriangle, trend: -2 },
    { title: 'Disponibles', value: '21', icon: CheckCircle, trend: 0 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <StatCard
          key={i}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          trend={stat.trend}
        />
      ))}
    </div>
  );
};
