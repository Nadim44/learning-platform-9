import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, logo } = topic
    return (
        <div className='topic-details'>
            <img src={logo} alt=""></img>
            <div className='details'>
                <h1>{name}</h1>
                <button>Start Practise</button>
            </div>
        </div>
    );
};

export default Topic;