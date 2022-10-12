import React from 'react';
import Option from '../Option/Option';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ questionDetails }) => {
    const { question, options, correctAnswer } = questionDetails

    let quizDetails = `${question}`
    let quizQuestion = quizDetails.split('<p>')
    const handleEyeCorrect = () => {
        toast.success(correctAnswer)
    }

    return (
        <div className='question-container'>
            <div className='question'>
                <h5>QUESTION:-  {quizQuestion}</h5>
                <button onClick={() => handleEyeCorrect()}><ToastContainer /> <EyeIcon className="icon" /></button>
            </div>

            <div className='options'>
                {
                    options.map(option => <Option key={option} option={option} correctAnswer={correctAnswer}></Option>)
                }
            </div>

        </div>
    );
};

export default Question;


