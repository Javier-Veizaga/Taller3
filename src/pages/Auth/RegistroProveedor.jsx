import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function RegistroProveedores() {
    const [formData, setFormData] = useState({
        nombre: '',
        tipo: '',
        telefono: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Aquí puedes enviar los datos a tu API
    };

    return (
        <Container maxWidth="xs">
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
            Registro de Proveedores
            </Typography>
            <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Nombre"
                    name="nombre"
                    placeholder="Nombre proveedor"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="tipo-label">Tipo</InputLabel>
                    <Select
                    labelId="tipo-label"
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    label="Tipo"
                    onChange={handleChange}
                    required
                    >
                    <MenuItem value={'quimicos'}>Químicos</MenuItem>
                    <MenuItem value={'plasticos'}>Plásticos</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Teléfono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                />
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <Button type="submit" variant="contained" color="primary">
                    Registrar Perfil
                </Button>
                </Grid>
            </Grid>
            </form>
        </Box>
        </Container>
    );
}

export default RegistroProveedores;