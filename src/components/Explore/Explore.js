import React, { useEffect, useState } from 'react';
import {  Card } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import './Explore.css'
const Explore = (props) => {
    const { idLeague } = props.league;

    const [card, setCard] = useState({});
    // console.log(card);
    const { strLeague, strBadge, strSport } = card;


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setCard(data.leagues[0]))
    }, [idLeague])

    const history = useHistory();
    const handleClick = (idLeague) => {
        history.push(`/explore/${idLeague}`)
    }
    return (
        <div className='explore-container'>
            <Card className="">
                <Card.Img variant="top" className='image' src={strBadge} />
                <Card.Body>
                    <Card.Title><h3>{strLeague}</h3></Card.Title>
                    <p>Sports Type: {strSport}</p>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => handleClick(idLeague)} size="large" className="button" variant="contained" color="primary">Explore  <FontAwesomeIcon className="icon" icon={faArrowRight} /></Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Explore;