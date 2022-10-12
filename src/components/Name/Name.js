import React from 'react';
import './Name.css'

const Name = ({ topic }) => {
    const { name, total } = topic
    return (
        <div className='quiz'>
            <h1>Total Quiz of {name} : {total}</h1>
        </div>
    );
};

export default Name;