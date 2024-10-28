// src/components/Results.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Results = ({ selectedNumbers, winningNumbers }) => {
    const matches = selectedNumbers.filter(number => winningNumbers.includes(number));

    return (
        <Box mt={4} 
             p={2} 
             border={5}  // Ajusta el grosor del borde aquí
             borderColor="primary.main" // Cambia el color del borde aquí
             borderRadius={2} // Opcional: redondea las esquinas
             display="flex"
             flexDirection="column"
             alignItems="center"
             justifyContent="center"
             width="100%" // Mantiene el mismo tamaño que el contenedor padre
             maxWidth="400px" // Ajusta el ancho máximo si es necesario
        >
            <Typography variant="h6">Números Ganadores: {winningNumbers.join(', ')}</Typography>
            <Typography variant="h6">Tus Números: {selectedNumbers.join(', ')}</Typography>
            <Typography variant="h5" color={matches.length > 0 ? 'green' : 'red'}>
                {matches.length > 0 ? `¡Has acertado ${matches.length} número(s)!` : 'No has acertado ningún número.'}
            </Typography>
        </Box>
    );
};

export default Results;

