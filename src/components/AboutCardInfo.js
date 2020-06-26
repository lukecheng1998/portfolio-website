import React from "react";
function AboutCardInfo(props) {
    return (
        <div className="l-card-info" style={style}>
          <p className="l-card-title">{props.title}</p>
          <p className="l-card-sub-title">{props.subTitle}</p>
          <a href={props.link} target="blank" rel="noopener noreferrer">View</a>
      </div>
    )
}
export default AboutCardInfo;