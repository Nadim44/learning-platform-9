import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topics = useLoaderData()
    // console.log(topics.data)
    return (
        <div>
            <Header></Header>
            <Topics topics={topics.data}></Topics>
        </div>
    );
};

export default Home;