import React from 'react';
import '../styles/components/button.css';

export interface buttonProps {
    text?: string;
    addClass?: string;
    type?: 'submit' | 'button';
    disabled?: boolean;
    onClick?: (e: any) => void
}

const Button: React.FC<buttonProps> = ({ text, addClass, ...props }) => {
    return (
        <button {...props} className={`btn ${addClass}`} onClick={props.onClick} disabled={props.disabled}>{text}</button>
    );
};

export default Button;