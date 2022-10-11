import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topics = useLoaderData()
    return (
        <div>
            <Header></Header>
            {/* <h1>loader: {topics.length}</h1> */}
            <Topics topics={topics}></Topics>
        </div>
    );
};

export default Home;