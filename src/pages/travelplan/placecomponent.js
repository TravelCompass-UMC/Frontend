import React from "react";
import Styles from "../../styles/accommodationcomponent.css";

const Place = ({ name, address, imageUrl, onSelect, selected }) => {
  const selectedClass = selected ? "selected" : "";

  return (
    <div
      className={`accommodation-container ${selectedClass}`}
      onClick={onSelect}
    >
      <button>+</button>
      <img src={imageUrl} alt={name} className="accommodation-image" />
      <div className="accommodation-info">
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Place;
