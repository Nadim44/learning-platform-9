import React from 'react';
import CorrectAnswer from '../CorrectAnswer/CorrectAnswer';
import Option from '../Option/Option';
import './Question.css'

const Question = ({ questionDetails }) => {
    const { question, options, correctAnswer } = questionDetails
    // console.log(question)
    let quizDetails = `${question}`
    let quizQuestion = quizDetails.split('<p>')

    return (
        <div className='question-container'>
            <div>
                <h5>Q:- {quizQuestion}</h5>
                <CorrectAnswer ></CorrectAnswer>
            </div>

            {
                options.map(option => <Option key={option} option={option}></Option>)
            }

        </div>
    );
};

export default Question;