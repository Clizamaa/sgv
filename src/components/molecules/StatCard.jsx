import React from 'react';
import { CardBase } from '../atoms/CardBase';
import { Text } from '../atoms/Text';

export const StatCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <CardBase className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Text variant="muted" className="font-medium">{title}</Text>
        {Icon && <Icon className="w-5 h-5 text-corporate-text-muted" />}
      </div>
      <div>
        <Text variant="h2">{value}</Text>
        {trend && (
          <Text
            variant="caption"
            className={`mt-1 ${trend > 0 ? 'text-green-600' : 'text-red-500'}`}
          >
            {trend > 0 ? '+' : ''}{trend}% en el último mes
          </Text>
        )}
      </div>
    </CardBase>
  );
};
