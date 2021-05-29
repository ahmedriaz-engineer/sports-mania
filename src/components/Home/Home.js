import React, { useEffect, useState } from 'react';
import './Home.css'
import Explore from '../Explore/Explore';

const Home = () => {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(response => response.json())
            .then(data => setLeagues(data.leagues.slice(0, 90)))
    }, [])

    return (
        <div>
            <header>
                <img className="header-image" src="https://image.freepik.com/free-vector/vector-illustration-football-fiery-flame_1441-615.jpg" alt="" />
                <h1 className="heading">SPORTS MANIA</h1>
            </header>
            <div className="home-cart">
                {
                    leagues.map(league => <Explore league={league} key ={league.idLeague}></Explore>)
                }
            </div>
        </div>
    );
};

export default Home;