import React from "react";

export default function Journals(props) {
  return (
    <div className="journals-elt">
      <div className="each-journal">
        <img
          src={props.properties.img}
          alt="This is a representation of the location"
          className="scenary"
        />
        <div className="words-elt">
          <img
            src={require("../images/icon-location.png")}
            alt="location icon"
            id="location-icon"
          />
          <span className="location-elt">{props.properties.location}</span>
          <a href={props.properties.link} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
          <p id="title-elt">{props.properties.title}</p>
          <p className="date-elt">{`${props.properties.startDate} - ${props.properties.endDate}`}</p>
          <p className="description-elt">{props.properties.description}</p>
        </div>
      </div>
    </div>
  );
}
