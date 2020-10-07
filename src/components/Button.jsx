import React from 'react';

function Button({onClick, className, children}) {
    return (
        <button 
            className={`button ${className}`}
                onClick={onClick}
            >
                {children}
        </button>
    );

}

export default Button;
