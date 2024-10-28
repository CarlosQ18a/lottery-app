// src/components/DrawButton.js
import React from 'react';
import { Button } from '@mui/material';

const DrawButton = ({ drawNumbers }) => {
    return (
        <div>
            <Button
                onClick={drawNumbers}
                variant="contained"
                color="primary"
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                }}
            >
                Sortear Números
            </Button>
        </div>
    );
};

export default DrawButton;
