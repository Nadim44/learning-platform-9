import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    return (
        <div className='options'>
            <input type="radio" value="" name="gender" />{option}
        </div>
    );
};

export default Option;