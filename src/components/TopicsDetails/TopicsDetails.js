import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicsDetails = () => {
    const topic = useLoaderData()
    console.log(topic.data.questions)
    return (
        <div>
            <h1>Quiz</h1>
            <div>
                {
                    topic.data.questions.map(questionDetails => <Question
                        key={questionDetails.id}
                        questionDetails={questionDetails}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default TopicsDetails;