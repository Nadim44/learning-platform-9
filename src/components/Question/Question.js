import React from 'react';
import Option from '../Option/Option';

const Question = ({ questionDetails }) => {
    const { question, options } = questionDetails
    // console.log(question)
    let quizDetails = `${question}`
    let quiz = quizDetails.split('<p>')

    // console.log(myArray)

    return (
        <div>
            <h5>* {quiz}</h5>
            {
                options.map(option => <Option option={option}></Option>)
            }

        </div>
    );
};

export default Question;