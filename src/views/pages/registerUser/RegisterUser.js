import React,{useState} from 'react';
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

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    nombreUsuario: '',
    correo: '',
    contraseña: '',
    repetirContraseña: '',
    rol: '',
  });
  
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1 style={{ textAlign: 'center' }}>Nuevo Usuario</h1>
                  {/* -------------------------------NOMBRE DE USUARIO------------------------------------------ */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Nombre" 
                      autoComplete="name" 
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    />
                  </CInputGroup>
                  {/* -------------------------------NOMBRE DE APELLIDO------------------------------------------ */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Apellido" 
                      autoComplete="lastname" 
                      value={formData.apellido}
                      onChange={(e) => setFormData({...formData, apellido: e.target.value})}
                    />
                  </CInputGroup>
                  {/* -------------------------------NOMBRE DE USUARIO------------------------------------------ */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Nombre Usuario" 
                      autoComplete="username" 
                      value={(formData.username)}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                    />
                  </CInputGroup>
                  {/* -----------------------------CORREO-------------------------------------------- */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput 
                      type='email'
                      placeholder="Correo" 
                      autoComplete="email" 
                      value={(formData.correo)}
                      onChange={(e) => setFormData({...formData, correo: e.target.value})}
                    />
                  </CInputGroup>
                  {/* -----------------------------CONTRASEÑA-------------------------------------------- */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Contraseña"
                      autoComplete="new-password"
                      value={(formData.contraseña)}
                      onChange={(e) => setFormData({...formData, contraseña: e.target.value})}
                    />
                  </CInputGroup>
                  {/* -----------------------------REPITE CONTRASEÑA---------------------------------*/}
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repetir contraseña"
                      autoComplete="new-password"
                      /* Ojo, realizar la revicion */
                    />
                  </CInputGroup>
                  {/* -----------------------------------ROL-------------------------------------- */}
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilBriefcase} />
                    </CInputGroupText>
                    <CFormSelect>
                    <option disabled selected>Selecciona un Rol</option> {/* Opción deshabilitada */}
                      <option value={1}>Coordinador</option>
                      <option value={2}>Supervisor</option>
                      <option value={3}>Almacenero</option>
                      <option value={4}>Montacarguista</option>
                    </CFormSelect>
                  </CInputGroup>
                  {/* -----------------------------------BOTON-------------------------------------- */}
                  <div className="d-grid">
                    <CButton color="success" >Crear Usuario</CButton>
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

export default Register;