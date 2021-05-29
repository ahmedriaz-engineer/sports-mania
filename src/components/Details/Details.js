import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faFutbol, faFlag, faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const { strDescriptionEN, strLeague, intFormedYear, strCountry, strSport, strGender, strBadge } = details;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, [id])



    let src;
    if (strGender === "Female") {
        src = female;
    }
    else if (strGender === "Male") {
        src = male;

    }


    return (
        <div>
            <header>
                <img className="header-image" src="https://image.freepik.com/free-vector/vector-illustration-football-fiery-flame_1441-615.jpg" alt="" />
                <img className="headingImg" src={strBadge} alt="" />
            </header>
            <div className='details-container'>

                <div className="details-info">
                    <div className="details">
                        <div className="details-body">
                            <h1>{strLeague}</h1>
                            <h3><FontAwesomeIcon className="icon d-icon" icon={faSearchLocation} /> Founded: {intFormedYear}</h3>
                            <h3><FontAwesomeIcon className="icon d-icon" icon={faFlag} /> Country: {strCountry}</h3>
                            <h3><FontAwesomeIcon className="icon d-icon" icon={faFutbol} /> Sport Type: {strSport}</h3>
                            <h3><FontAwesomeIcon className="icon d-icon" icon={faMars} /> Gender: {strGender}</h3>
                        </div>


                        <div className="details-image">
                            <img className='d-image' src={src} alt="" />

                        </div>
                    </div>
                </div>
                <div className="description">
                    <p >{strDescriptionEN}</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, doloremque quaerat excepturi facere fugiat nam quas corporis modi eligendi eos quidem illum! Perferendis laudantium architecto vero blanditiis quae rem recusandae eaque quasi quaerat natus sunt officiis numquam, saepe nam repudiandae veniam aliquam harum eius officia reiciendis amet. Obcaecati, aliquam. Dolorum voluptas alias possimus itaque eveniet enim fugit iure. Dignissimos repellat dolorum natus facilis aliquam esse cum quidem, deserunt reiciendis alias pariatur, illum unde veniam quam. Molestias debitis reprehenderit beatae eum? Sit, mollitia id repudiandae reiciendis eos animi numquam tempora voluptatum quaerat vel adipisci esse. Consequuntur velit eos assumenda fugiat magni.</p>
                    <div className='footer-icon'>
                        <a ><FontAwesomeIcon className="icon f-icon" icon={faTwitter} /></a>
                        <a ><FontAwesomeIcon className="icon f-icon" icon={faFacebook} /></a>
                        <a ><FontAwesomeIcon className="icon f-icon" icon={faYoutube} /> </a>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Details;