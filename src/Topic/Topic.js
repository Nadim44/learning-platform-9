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
                {/* <button>Start Practise</button> */}
                <p><Link to={`/home/${id}`}>start Practise</Link></p>
            </div>
        </div >
    );
};

export default Topic;