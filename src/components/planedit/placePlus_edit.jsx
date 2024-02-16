import React, { useState } from "react";
import styles from "../../styles/planedit/plusModal.module.css";
import eclose from "../../assets/images/Pages/close.png";
import SearchModal from "./Search"; 

const PlusBtn = ({ onClose }) => {
    const [placeInfo, setPlaceInfo] = useState(null);

    const handleSearch = (place) => {
        setPlaceInfo(place);
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <img src={eclose} alt="Close" className={styles.closeImage} onClick={onClose} />
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <SearchModal onSearch={handleSearch}/>
                {placeInfo && (
                    <div className={styles.placeCard}>
                        <h3>{placeInfo.name}</h3>
                        {placeInfo.photoReference && (
                            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeInfo.photoReference}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`} alt={placeInfo.name}
                            style={{width:"60%"}}
                            />
                        )}
                        <p>위도: {placeInfo.location.lat}, 경도: {placeInfo.location.lng}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlusBtn;
