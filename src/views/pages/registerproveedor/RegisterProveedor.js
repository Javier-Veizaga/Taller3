import React from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormSelect,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser, cilBriefcase } from '@coreui/icons'; // Importa el icono cilBriefcase

const RegisterProveedor = () => {
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
            <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
                <CCard className="mx-4">
                <CCardBody className="p-4">
                    <CForm>
                    <h1 style={{ textAlign: 'center' }}>Nuevo Proveedor</h1>
                    {/* -------------------------------NOMBRE DE USUARIO------------------------------------------ */}
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                        <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Nombre" autoComplete="name" />
                    </CInputGroup>
                    {/* -----------------------------------ROL-------------------------------------- */}
                    <CInputGroup className="mb-4">
                        <CInputGroupText>
                        <CIcon icon={cilBriefcase} />
                        </CInputGroupText>
                        <CFormSelect>
                        <option disabled selected>Seleccione un Material</option> {/* Opción deshabilitada */}
                        <option value={1}>Plasticos</option>
                        <option value={2}>Quimicos</option>
                        </CFormSelect>
                    </CInputGroup>
                    {/* -----------------------------------Contacto-------------------------------------- */}
                    <CInputGroup className="mb-3">
                        <CInputGroupText>
                        <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Informacion de contacto" autoComplete="name" />
                    </CInputGroup>
                    {/* -----------------------------------BOTON-------------------------------------- */}
                    <div className="d-grid">
                        <CButton color="success" >Crear Usuario</CButton> {/* Eliminado el atributo href */}
                    </div>
                    </CForm>
                </CCardBody>
                </CCard>
            </CCol>
            </CRow>
        </CContainer>
        </div>
    );
};

export default RegisterProveedor;