import React from 'react';
import './WinningNumbers.css';

const WinningNumbers = ({ numbers }) => {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return <p className="no-numbers-message">No se han generado números ganadores.</p>;
    }

    return (
        <div>
            <h2 className="winning-numbers-title">Números ganadores:</h2>
            {numbers.map((number, index) => (
                <span key={index} className="winning-number">{number}</span>
            ))}
        </div>
    );
};

export default WinningNumbers;

