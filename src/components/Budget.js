import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [cost, setCost] = useState('');

    return (
        
        <div className='alert alert-secondary'>
            <input
                required='required'
                type='number'
                id='cost'
                value={cost}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => setCost(event.target.value)}>

            </input>
            <span>Budget: £{budget}</span>
            <button className="btn btn-primary" onClick={budget} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
        </div>
    );
};

export default Budget;
