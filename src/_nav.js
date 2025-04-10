import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibCcMastercard, // Ejemplo de icono de marca (podrías no usarlos)
  cibCcVisa,     // Ejemplo de icono de marca (podrías no usarlos)
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilEnvelopeOpen, // Probable para Correo
  cilLockLocked,   // Para Login
  cilNotes,
  cilPencil,
  cilPeople,       // Para Personal
  cilPlus,         // Genérico para Registrar/Agregar
  cilList,         // Para Lista
  cilClock,        // Para Turnos
  cilChart,        // Genérico para Reportes/Gráficos
  cilFolderOpen,   // Genérico para Almacén/Carpetas
  cilMoney,        // Para Ventas
  cilSettings,     // Para Operaciones/Configuración
  cilTruck,        // Para Proveedores
  cilBuilding,     // Para Administrativo
  cilCalendar,     // Para Calendario/Turnos
  cilGraph,        // Genérico para Movimiento/Gráficos
  cilWarning,      // Para Error
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  /* ---------------------------------------------------------------------------------------------- */
  {
    component: CNavTitle,
    name: 'Acciones',
  },
  /* Registrar */
  {
    component: CNavGroup,
    name: 'Registrar',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
        icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Registrar Usuario',
        to: '/registerUser',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Registrar Proveedor',
        to: '/registerproveedor',/* Nombre del archivo a abrir */
        icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',/* Nombre del archivo a abrir */
        icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',/* Nombre del archivo a abrir */
        icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
      },
    ],
  },
  /* Personal */
  {
    component: CNavGroup,
    name: 'Personal',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Lista Personal',
        to: '/Personal',/* Nombre del archivo a abrir */
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Lista Turnos',
        to: '/turnosLaborales',/* Nombre del archivo a abrir */
        icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
      },

    ],
  },
  /* Reportes */
  {
    component: CNavGroup,
    name: 'Reportes',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Almacen',
        to: '/login',
        icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Ventas',
        to: '/registerUser',
        icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Operaciones',
        to: '/registerproveedor',/* Nombre del archivo a abrir */
        icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Proveedores',
        to: '/404',
        icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Administrativo',
        to: '/404',
        icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
      },
    ],
  },
  /* Reporte */
  {
    component: CNavGroup,
    name: 'Reporte',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Turnos',
        to: '/login',
        icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Movimiento',
        to: '/registerUser',
        icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Ejemplo',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    /* Ojo en los iconos. */
  },
/*
  {
    component: CNavItem,
    name: 'por verse',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'por verse',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'por verse',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  }, */
]

export default _nav