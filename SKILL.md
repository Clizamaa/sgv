---
name: Sistema de Administración de Vehículos Institucionales
description: Requisitos técnicos y funcionales para el desarrollo del sistema de gestión, control y optimización de la flota de vehículos de la institución.
---

# Requisitos Técnicos: Sistema de Administración de Vehículos Institucionales

## 1. Resumen del Proyecto

Este documento detalla las especificaciones técnicas para el desarrollo de una plataforma web destinada a la gestión, control y optimización de la flota de vehículos de la institución.

## 2. Requerimientos Funcionales (RF)

### 2.1 Gestión de Inventario de Vehículos
- **Registro de activos:** Alta, baja y modificación de vehículos (marca, modelo, placa, año, tipo de combustible).
- **Estado en tiempo real:** Indicador de disponibilidad (Disponible, En Uso, En Taller, Fuera de Servicio).
- **Documentación digital:** Almacenamiento de tarjetas de circulación, pólizas de seguro y verificaciones.

### 2.2 Control de Mantenimiento
- **Calendario preventivo:** Alertas automáticas por kilometraje o fecha para cambios de aceite, llantas, etc.
- **Registro correctivo:** Bitácora de reparaciones con costos y proveedores asociados.

### 2.3 Gestión de Conductores y Viajes (Bitácora)
- **Asignación de vehículos:** Vinculación de conductores autorizados a vehículos específicos.
- **Registro de viajes:** Captura de kilometraje inicial/final, destino, motivo del viaje y nivel de combustible.
- **Gestión de vales de combustible:** Control de carga de combustible y presupuesto asignado.
- **Mantenedor de Conductor:** CRUD para conductores (incluyendo vencimiento de licencias).

### 2.4 Módulo de Reservas
- Calendario interactivo para que los departamentos soliciten vehículos.
- Flujo de aprobación por parte del administrador de transportes.

### 2.5 Detalle del Formulario de Solicitud de Vehículo
Para garantizar un control estricto, el formulario de solicitud debe capturar los siguientes campos:

- **Datos del Solicitante:** 
  - Departamento/Unidad (autocompletado por perfil).
  - Nombre del Solicitante del viaje.
- **Información del Destino:**
  - Lugar de origen y destino exacto.
  - Itinerario previsto (si incluye múltiples paradas).
- **Cronograma:**
  - Fecha y hora de salida.
  - Fecha y hora estimada de retorno.
- **Logística de Pasajeros y Carga:**
  - Número de pasajeros (para determinar el tipo de vehículo: sedán, van, pickup).
  - También poder elegir entre vehículos.
  - Descripción de carga o equipo especial a transportar.
- **Justificación:**
  - Motivo de la comisión o servicio (campo de texto obligatorio).
  - ¿Existe locomoción en el destino?
- **Validaciones del Sistema:**
  - **Disponibilidad:** El sistema debe cruzar las fechas contra el calendario de vehículos existentes.
  - **Anticipación:** Impedir solicitudes con menos de $X$ horas de antelación (configurable).
  - **Cruce de Horarios:** Alertar si el conductor asignado ya tiene otra comisión en el mismo bloque horario.

## 3. Requerimientos No Funcionales (RNF)

| Atributo | Especificación |
| :--- | :--- |
| **Seguridad** | Autenticación mediante JWT y roles de usuario (Admin, Conductor, Solicitante). |
| **Disponibilidad** | El sistema debe garantizar un uptime del 99.5%. |
| **Responsividad** | Interfaz optimizada para su uso en tablets y smartphones (operadores de patio). |

## 4. Stack Tecnológico Sugerido

- **Frontend:** Next.js con Tailwind CSS para una interfaz moderna y rápida.
- **Backend:** Node.js con API Routes (Next.js) y PRISMA ORM.
- **Base de Datos:** MySQL.

## 5. Arquitectura Lógica

- **Capa de Presentación:** Interfaz de usuario web desarrollada en React/Next.js.
- **Capa de API:** Controladores que gestionan la lógica de validación de reservas.
- **Capa de Servicios:** Lógica de negocio (cálculo de mantenimientos, alertas de seguros).
- **Capa de Datos:** Persistencia mediante Prisma sobre MySQL.
