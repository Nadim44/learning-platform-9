import React from 'react';
import Topic from '../../Topic/Topic';
import './Topics.css'

const Topics = ({ topics }) => {
    return (
        <div className='all-topic'>
            {/* <h1>hellow: {topics.length}</h1> */}
            {
                topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;