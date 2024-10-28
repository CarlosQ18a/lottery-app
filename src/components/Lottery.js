import React, { useState } from 'react';
import WinningNumbers from './WinningNumbers';
import { Container, Box, Typography, Button } from '@mui/material';

const Lottery = () => {
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [isDrawn, setIsDrawn] = useState(false);

    const generateWinningNumbers = () => {
        const drawnNumbers = [];
        while (drawnNumbers.length < 5) {
            const randomNum = Math.floor(Math.random() * 50) + 1;
            if (!drawnNumbers.includes(randomNum)) {
                drawnNumbers.push(randomNum);
            }
        }
        setWinningNumbers(drawnNumbers);
        setIsDrawn(true);
    };

    const resetGame = () => {
        setWinningNumbers([]);
        setIsDrawn(false);
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" gutterBottom>Lottery</Typography>
                <Button variant="contained" color="primary" onClick={generateWinningNumbers}>Generate Winning Numbers</Button>
                <Button variant="contained" color="secondary" onClick={resetGame} style={{ marginLeft: 8 }}>Reset</Button>
                {isDrawn && <WinningNumbers numbers={winningNumbers} />}
            </Box>
        </Container>
    );
};

export default Lottery;




