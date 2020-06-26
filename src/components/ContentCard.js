import React from 'react'
import CardInfo from '../components/ContentCardInfo'
function Card (props) {
    return (
        <div className="d-inline-block lcc-card" onClick={(event) => props.click(props.item)}>
            <img className="lcc-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/> }
        </div>
    );
}

export default Card
