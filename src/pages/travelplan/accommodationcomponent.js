import React from "react";
import Styles from "../../styles/accommodationcomponent.css";

const Accommodation = ({ name, address, imageUrl, onSelect, selected }) => {
  // 선택된 숙소일 경우 추가할 클래스 이름
  const selectedClass = selected ? "selected" : "";

  return (
    <div
      className={`accommodation-container ${selectedClass}`}
      onClick={onSelect}
    >
      <img src={imageUrl} alt={name} className="accommodation-image" />
      <div className="accommodation-info">
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Accommodation;
