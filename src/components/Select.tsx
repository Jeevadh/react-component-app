import React from 'react';
import '../style/components/select.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string
}

const Selectoption: React.FC<Props> = () => {
    const options = ['Show all', 'Most recent actions', 'Show only uploaded files',
        'Show only downloaded files', 'Show only approval requests'];

    return (
        <div className='select-blk'>
            <form>
                <label>Sort by:</label>
                <select id='action'>
                    {options.map((item: any, id: number) => (
                        <option key={id}>{item}</option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Selectoption;
