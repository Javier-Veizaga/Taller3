// frontend/src/components/GruposPersonalTabla.js
import React from 'react';
import {
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CListGroup,
    CListGroupItem,
} from '@coreui/react';

const GruposPersonalTabla = () => {
    const gruposPersonal = [
        {
            cargo: 'Supervisores',

            personal: [
                { id: 1, turno: 'Mañana', horarioInicio: '08:00', horarioFinal: '16:00' },
                { id: 2, turno: 'Tarde', horarioInicio: '16:00', horarioFinal: '00:00' },
                { id: 3, turno: 'Noche', horarioInicio: '00:00', horarioFinal: '08:00' },
            ],
        },
        {
            cargo: 'Almaceneros',

            personal: [
                { id: 4, turno: 'Mañana', horarioInicio: '08:00', horarioFinal: '16:00' },
                { id: 5, turno: 'Tarde', horarioInicio: '16:00', horarioFinal: '00:00' },
                { id: 6, turno: 'Noche', horarioInicio: '00:00', horarioFinal: '08:00' },
                { id: 7, turno: 'Mañana', horarioInicio: '08:00', horarioFinal: '16:00' },
                { id: 8, turno: 'Tarde', horarioInicio: '16:00', horarioFinal: '00:00' },
                { id: 9, turno: 'Noche', horarioInicio: '00:00', horarioFinal: '08:00' },
                { id: 10, turno: 'Mañana', horarioInicio: '08:00', horarioFinal: '16:00' },
            ],
        },
        {
            cargo: 'Montacarguistas',

            personal: [
                { id: 11, turno: 'Tarde', horarioInicio: '16:00', horarioFinal: '00:00' },
                { id: 12, turno: 'Noche', horarioInicio: '00:00', horarioFinal: '08:00' },
                { id: 13, turno: 'Mañana', horarioInicio: '08:00', horarioFinal: '16:00' },
                { id: 14, turno: 'Tarde', horarioInicio: '16:00', horarioFinal: '00:00' },
                { id: 15, turno: 'Noche', horarioInicio: '00:00', horarioFinal: '08:00' },
                { id: 16, turno: 'Mañana', horarioInicio: '08:00', horarioFinal: '16:00' },
                { id: 17, turno: 'Tarde', horarioInicio: '16:00', horarioFinal: '00:00' },
            ],
        },
    ];

    return (
        <div>
        {gruposPersonal.map((grupo, index) => (
            <div key={index} className="mb-4">
                <h3 style={{ textAlign: 'center' }}>{grupo.cargo}</h3>
                <CTable striped bordered style={{ maxWidth: '800px', margin: '0 auto' }}> {/* Añadido estilo en línea */}
                    <CTableHead color="info">
                        <CTableRow>
                            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Turno</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Horario Inicio</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Horario Final</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                        <CTableBody>
                            {grupo.personal.map((persona) => (
                                <CTableRow key={persona.id}>
                                    <CTableDataCell>{persona.id}</CTableDataCell>
                                    <CTableDataCell>{persona.turno}</CTableDataCell>
                                    <CTableDataCell>{persona.horarioInicio}</CTableDataCell>
                                    <CTableDataCell>{persona.horarioFinal}</CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </div>
            ))}
        </div>
    );
};

export default GruposPersonalTabla;