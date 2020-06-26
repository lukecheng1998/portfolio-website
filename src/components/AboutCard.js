import React from 'react'
import CardInfo from '../components/AboutCardInfo'
function AboutCard (props) {
    return (
        <div className="d-inline-block lcc-card ">
            <img className="lac-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {<CardInfo title={props.item.title} body={props.item.body}/> }
        </div>
    );
}

export default AboutCard
