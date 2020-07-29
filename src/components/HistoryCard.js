import React, { Component } from 'react'
import CardInfo from '../components/HistoryCardInfo'

function HistoryCard (props){
    return (
        <div >
            <img className="lcc-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {<CardInfo title={props.item.title} body={props.item.body}/> }
        </div>
    )
}

export default HistoryCard
