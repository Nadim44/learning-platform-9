import React from 'react';
import CorrectAnswer from '../CorrectAnswer/CorrectAnswer';
import Option from '../Option/Option';

const Question = ({ questionDetails }) => {
    const { question, options, correctAnswer } = questionDetails
    // console.log(question)
    let quizDetails = `${question}`
    let quizQuestion = quizDetails.split('<p>')

    // console.log(myArray)
    let answer = { correctAnswer }
    return (
        <div>
            <div>
                <h5>* {quizQuestion}</h5>
                {/* <p>{correctAnswer}</p> */}
                <CorrectAnswer answer={answer}></CorrectAnswer>
            </div>

            {
                options.map(option => <Option key={option} option={option}></Option>)
            }

        </div>
    );
};

export default Question;