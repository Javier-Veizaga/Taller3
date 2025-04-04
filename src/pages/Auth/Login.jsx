import Boton from '../../components/ui/Boton'
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de autenticación
        console.log('Username:', username);
        console.log('Password:', password);
        // Por ejemplo, enviar los datos a un backend para verificar las credenciales
    };

    return (
        <Container maxWidth="xs" sx={{ mt: 8 }} >
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
            Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Usuario"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Iniciar Sesión
            </Button>
            </Box>
        </Box>
        </Container>

    );
}

export default Login;