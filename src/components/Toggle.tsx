import React from 'react';
import '../styles/components/toggle.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    onChange?: any;
}

const Toggle: React.FC<Props> = (props: Props) => {
    return (
        <div className=''>
            <label className="switch">
                <input type="checkbox" {...props} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Toggle;
