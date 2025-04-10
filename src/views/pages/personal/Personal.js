// frontend/src/views/pages/personal/personal.js
import React from 'react';
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CContainer,
  CRow,
  CCol,
} from '@coreui/react';
import { Link } from 'react-router-dom';

const Personal = () => {
  const empleadosEstaticos = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', nombreUsuario: 'juan.perez', correo: 'juan.perez@example.com', rol: 'Supervisor' },
    { id: 2, nombre: 'María', apellido: 'González', nombreUsuario: 'maria.g', correo: 'maria.gonzalez@example.com', rol: 'Almacenero' },
    { id: 3, nombre: 'Carlos', apellido: 'López', nombreUsuario: 'carlos.l', correo: 'carlos.lopez@example.com', rol: 'Montacarguista' },
  ];

  return (
    <CContainer>
      <CRow>
        <CCol>
        <h2 style={{ textAlign: 'center' }}>Lista de Empleados</h2>
          <Link to="/registerUser">
            <CButton color="primary" className="mb-3">
              Agregar Nuevo Empleado
            </CButton>
          </Link>
          <CTable striped bordered>
            <CTableHead color="primary">
              <CTableRow>
                <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                <CTableHeaderCell scope="col">Apellido</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nombre de Usuario</CTableHeaderCell>
                <CTableHeaderCell scope="col">Correo</CTableHeaderCell>
                <CTableHeaderCell scope="col">Rol</CTableHeaderCell>
                <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {empleadosEstaticos.map((empleado) => (
                <CTableRow key={empleado.id}>
                  <CTableDataCell>{empleado.id}</CTableDataCell>
                  <CTableDataCell>{empleado.nombre}</CTableDataCell>
                  <CTableDataCell>{empleado.apellido}</CTableDataCell>
                  <CTableDataCell>{empleado.nombreUsuario}</CTableDataCell>
                  <CTableDataCell>{empleado.correo}</CTableDataCell>
                  <CTableDataCell>{empleado.rol}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="info" size="sm" className="me-2">
                      Editar
                    </CButton>
                    <CButton color="danger" size="sm">
                      Eliminar
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </CContainer>
    
  );
};

export default Personal;