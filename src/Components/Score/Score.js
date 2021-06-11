import React from 'react';

const Score = ({score}) => {
    return (
        <div>
            <p>your score is: <span className="score">{score}</span></p>
        </div>
    );
};

export default Score;