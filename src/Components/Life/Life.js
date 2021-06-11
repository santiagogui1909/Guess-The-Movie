import React from 'react';

const Life = ({life}) => {
    return (
        <div>
            <p>you have <span className="life">{life}</span> lives left</p>
        </div>
    );
};

export default Life;