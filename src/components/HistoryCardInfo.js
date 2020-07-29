import React, { Component } from "react";

function HistoryCardInfo(props) {
  return (
    <div className="d-inline-block lcc-card">
      <div className="l-card-info">
        <p className="l-card-title">{props.title}</p>
        <p className="l-card-body">{props.body}</p>
      </div>
    </div>
  );
}

export default HistoryCardInfo;
