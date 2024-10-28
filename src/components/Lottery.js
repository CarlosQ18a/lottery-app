import React, { useState } from 'react';
import WinningNumbers from './WinningNumbers';
import { Container, Box, Typography, Button } from '@mui/material';

const Lottery = () => {
    const [allNumbers, setAllNumbers] = useState([]);
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [isDrawn, setIsDrawn] = useState(false);

    // Genera el grupo completo de números del 1 al 50
    const generateAllNumbers = () => {
        const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
        setAllNumbers(numbers);
    };

    // Genera un grupo de 5 números ganadores a partir del grupo completo
    const generateWinningNumbers = () => {
        const drawnNumbers = [];
        while (drawnNumbers.length < 5) {
            const randomIndex = Math.floor(Math.random() * allNumbers.length);
            const number = allNumbers[randomIndex];
            if (!drawnNumbers.includes(number)) {
                drawnNumbers.push(number);
            }
        }
        setWinningNumbers(drawnNumbers);
        setIsDrawn(true);
    };

    const resetGame = () => {
        setAllNumbers([]);
        setWinningNumbers([]);
        setIsDrawn(false);
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" gutterBottom>Lottery Draw</Typography>
                
                {/* Botón para generar el grupo completo de números */}
                <Button variant="contained" color="primary" onClick={generateAllNumbers}>
                    Generate All Numbers
                </Button>
                
                {/* Botón para generar números ganadores */}
                <Button variant="contained" color="secondary" onClick={generateWinningNumbers} style={{ marginLeft: 8 }}>
                    Draw Winning Numbers
                </Button>
                
                {/* Botón para reiniciar el juego */}
                <Button variant="contained" color="default" onClick={resetGame} style={{ marginLeft: 8 }}>
                    Reset
                </Button>

                {/* Muestra el grupo completo de números */}
                <Box my={2}>
                    <Typography variant="h6" color="textSecondary">All Numbers:</Typography>
                    <div>
                        {allNumbers.map((number, index) => (
                            <span key={index} style={{ color: 'gray', marginRight: '5px' }}>{number}</span>
                        ))}
                    </div>
                </Box>

                {/* Muestra los números ganadores si se han generado */}
                {isDrawn && <WinningNumbers numbers={winningNumbers} />}
            </Box>
        </Container>
    );
};

export default Lottery;





