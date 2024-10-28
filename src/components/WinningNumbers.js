import React from 'react';

const WinningNumbers = ({ numbers }) => {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return <p>No se han generado números ganadores.</p>;
    }

    return (
        <div>
            <h2>Números ganadores:</h2>
            {numbers.map((number, index) => (
                <span key={index} style={{ marginRight: '5px' }}>{number}</span>
            ))}
        </div>
    );
};

export default WinningNumbers;
