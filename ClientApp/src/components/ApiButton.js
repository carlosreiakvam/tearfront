import React, { useState } from 'react';

const ApiButton = () => {
    const [text, setText] = useState('');

    const handleClick = async () => {
        try {
            const response = await fetch('YOUR_API_ENDPOINT');
            const data = await response.json();
            setText(data.text);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Go</button>
            {text && <p>{text}</p>}
        </div>
    );
};

export default ApiButton;