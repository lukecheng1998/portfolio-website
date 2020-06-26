import React from "react";
import {useSpring, animated} from 'react-spring';
function ContentCardInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}}) 
  return (
      <animated.div className="lcc-card-info" style={style}>
          <p className="lcc-card-title">{props.title}</p>
          <p className="lcc-card-sub-title">{props.subTitle}</p>
          <a href={props.link} target="blank" rel="noopener noreferrer">View</a>
      </animated.div>
  );
}

export default ContentCardInfo;
