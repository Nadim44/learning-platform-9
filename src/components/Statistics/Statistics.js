import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Name from '../Name/Name';

const Statistics = () => {
    const topics = useLoaderData()
    return (
        <div>
            {
                topics.data.map(topic => <Name key={topic.id} topic={topic}></Name>)
            }
        </div>
    );
};

export default Statistics;