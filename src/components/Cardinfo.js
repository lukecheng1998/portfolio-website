import React from "react";
import ReactDom from 'react-dom';
import {useSpring, animated} from 'react-spring';


function Cardinfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}}) 
    
  return (
      <animated.div className=" l-card-info" style={style}>
          <p className="l-card-title">{props.title}</p>
          <p className="l-card-sub-title">{props.subTitle}</p>
          
          <a href={props.link} target="blank" rel="noopener noreferrer">View</a>
      </animated.div>
  );
}

export default Cardinfo;
