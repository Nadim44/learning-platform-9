import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, name, logo } = topic
    return (
        <div className='topic-details'>
            <img src={logo} alt=""></img>
            <div className='details'>
                <h1>{name}</h1>
                <Link to={`/home/${id}`}>
                    <button>Start Practise</button>
                </Link>
            </div>
        </div >
    );
};

export default Topic;