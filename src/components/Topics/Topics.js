import React from 'react';
import Topic from '../../Topic/Topic';
import './Topics.css'

const Topics = ({ topics }) => {
    return (
        <div className='courses'>
            <h1 className='all-course'>All Courses</h1>
            <div className='all-topic'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}></Topic>)
                }
            </div>
        </div>

    );
};

export default Topics;