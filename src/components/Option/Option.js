import React from 'react';
import './Option.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {
    const handleCorrect = opt => {
        if (opt === correctAnswer) {
            toast('Correct Answer')
        }
        else {
            toast('Wrong Answer')
        }
    }

    return (
        <div className='options'>
            <input onClick={() => handleCorrect(option)} type="radio" value="" name="radio-6" className='radio' />
            <label>{option}</label>
        </div>
    );
};

export default Option;
