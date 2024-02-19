// placePlus_edit.jsx
import React, { useState } from "react";
import styles from "../../styles/planedit/plusModal.module.css";
import eclose from "../../assets/images/Pages/close.png";
import SearchModal from "./Search"; 
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PlusBtn = ({ onClose }) => {
    const [placeInfo, setPlaceInfo] = useState(null);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleSearch = (placeData) => {
        setPlaceInfo({
            name: placeData.name,
            photoReference: placeData.photoReference,
            address: placeData.address,
        });
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <img src={eclose} alt="Close" className={styles.closeImage} onClick={onClose} />
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.searchModal}><SearchModal onSearch={handleSearch}/></div>
                {placeInfo && (
                    <div className={styles.placeCard}>
                        <div className={styles.checkBox}>
                        <Checkbox
                                {...label}
                                icon={<BookmarkBorderIcon />}
                                checkedIcon={<BookmarkIcon />}
                            />
                        </div>
                        <div className={styles.placeName}>{placeInfo.name}</div>
                        {placeInfo.photoReference && (
                            <img 
                                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${placeInfo.photoReference}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`} 
                                alt={placeInfo.name}
                                className={styles.placeImage}
                            />
                        )}
                        <p className={styles.placeLocation}>위치: {placeInfo.address || '제공되지 않는 정보입니다.'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlusBtn;
