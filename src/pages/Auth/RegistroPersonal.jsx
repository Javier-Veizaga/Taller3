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

function RegistroPersonal() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        usuario: '',
        correo: '',
        contraseña: '',
        cargo: '',
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
                Registro de Personal
            </Typography>
            <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}> {/* Cambiado a direction="column" */}
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Usuario"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Correo"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Contraseña"
                    name="contraseña"
                    type="password"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                />
                </Grid>
                <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="cargo-label">Cargo</InputLabel>
                    <Select
                    labelId="cargo-label"
                    id="cargo"
                    name="cargo"
                    value={formData.cargo}
                    label="Cargo"
                    onChange={handleChange}
                    required
                    >
                    <MenuItem value={'cordinador'}>Coordinador</MenuItem>
                    <MenuItem value={'supervisor'}>Supervisor</MenuItem>
                    <MenuItem value={'almacenero'}>Almacenero</MenuItem>
                    <MenuItem value={'montacarguista'}>Montacarguista</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <Button type="submit" variant="contained" color="primary">
                    Registrar
                </Button>
                </Grid>
            </Grid>
            </form>
        </Box>
        </Container>
    );
}

export default RegistroPersonal;