'use client';

import React from 'react';
import Link from 'next/link';
import { CardBase } from '@/components/atoms/CardBase';
import { Text } from '@/components/atoms/Text';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Checkbox } from '@/components/atoms/Checkbox';
import { Label } from '@/components/atoms/Label';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-corporate-bg">
      <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-500">
        {/* Logo or Branded Icon could go here */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-corporate-primary text-white mb-4 shadow-lg shadow-corporate-primary/20">
            <span className="text-2xl font-bold">SG</span>
          </div>
          <Text variant="h1" className="text-3xl font-bold tracking-tight">
            Gestión de Vehículos
          </Text>
          <Text variant="muted" className="mt-2">
            Inicia sesión para acceder al panel administrativo
          </Text>
        </div>

        <CardBase className="shadow-xl border-t-4 border-t-corporate-primary">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label htmlFor="email" required>
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="nombre@empresa.cl"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label htmlFor="password" required className="mb-0">
                  Contraseña
                </Label>
                <Link 
                  href="#" 
                  className="text-xs font-medium text-corporate-primary hover:text-corporate-primary-hover hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="pt-1">
              <Checkbox 
                id="remember" 
                label="Recordarme en este dispositivo"
              />
            </div>

            <Link href="/panel" className="block pt-2">
              <Button 
                variant="primary" 
                className="w-full h-11 text-base font-semibold shadow-md"
              >
                Iniciar Sesión
              </Button>
            </Link>
          </form>
        </CardBase>

        <div className="mt-8 text-center">
          <Text variant="muted" className="text-sm">
            © {new Date().getFullYear()} Sistema de Gestión de Vehículos.
            <br />
            Kit Digital - Gobierno de Chile
          </Text>
        </div>
      </div>
    </div>
  );
}
