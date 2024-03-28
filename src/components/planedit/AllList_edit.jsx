// AllList_edit.jsx
import React, { useState } from "react";
import styles from "../../styles/planedit/editAllList.module.css";
import Modal from "./Modal_edit";
import eclose from "../../assets/images/Pages/close.png";
import PlusBtn from "./placePlus_edit";
import plusIcon from "../../assets/images/edit/+.svg";

const AllList = () => {
    const [title, setTitle] = useState('여행 계획서의 제목');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [travelDays, setTravelDays] = useState(4);
    const [travelnum, setTravelnum] = useState([3, 4, 2, 1]);
    const [selectedBox, setSelectedBox] = useState(null);
    const [showPlusBtn, setShowPlusBtn] = useState(false);
    const [detailBoxes, setDetailBoxes] = useState([]);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const toggleEditTitle = () => setIsEditingTitle(!isEditingTitle);
    const handleDetailBoxClick = (e, data) => {
        if (!e.target.closest('select[name="duration"]')) setSelectedBox(data);
    };
    const addDetailBox = (placeData) => setDetailBoxes(prev => [...prev, placeData]);
    const handlePlusBtnClick = (e) => {
        e.stopPropagation();
        setShowPlusBtn(true);
    };

    // 장소 카드를 삭제하는 함수
    const removeDetailBox = (dayIndex, boxIndex) => {
        setDetailBoxes(prev => prev.map((day, idx) => {
            if (idx === dayIndex) {
                // 특정 일자에서 선택된 장소 카드를 제거
                return day.filter((_, index) => index !== boxIndex);
            }
            return day;
        }));
    };

    const generateDay = () => (
      Array.from({ length: travelDays }, (_, dayIndex) => (
          <div key={dayIndex} className={styles.dayContainer}>
              <div className={styles.dayHeader}>
                  <span className={styles.detailNum}>{`${dayIndex + 1}일차`}</span>
                  <span className={styles.detailCal}>2024.02.19(월)</span>
              </div>
              {Array.from({ length: travelnum[dayIndex] }, (_, index) => (
                  <div key={index} className={styles.detailBox} onClick={(e) => handleDetailBoxClick(e, index + 1)}>
                      <div className={styles.timeContainer}>
                          <div className={styles.numberIndex}>{index + 1}</div>
                          <div className={styles.detailTime}>09:30~11:20</div>
                      </div>
                        <button
                            className={styles.removeButton}
                            onClick={() => removeDetailBox(dayIndex, index)}
                        >
                            <img src={eclose} alt="Close" />
                        </button>
                      <div className={styles.placeContainer}>
                          <div className={styles.detailPlace}>명소</div>
                          <div className={styles.detailPlaceName}>장소이름</div>
                          <div className={styles.placeImage}></div>
                      </div>
                      <div className={styles.durationSelectContainer}>
                          <select name="duration" defaultValue="2" onClick={(e) => e.stopPropagation()}>
                              {Array.from({ length: 12 }, (_, i) => (
                                  <option key={i} value={i + 1}>소요시간: {i + 1}시간</option>
                              ))}
                          </select>
                      </div>
                        <button className={styles.placeAdd} onClick={handlePlusBtnClick}><div className={styles.plusFont}>
                            <img src={plusIcon} alt="Plus Icon" />    여기에 장소 추가</div>
                        </button>
                  </div>
              ))}
              {detailBoxes.map((box, index) => (
              <div key={`detail-${index}`} className={styles.detailBox}>
                  <div className={styles.timeContainer}>
                      <div className={styles.numberIndex}>{index + 1}</div>
                      <div className={styles.detailTime}>시간 정보</div>
                  </div>
                  <div className={styles.placeContainer}>
                      <div className={styles.detailPlace}>식당</div>
                      <div className={styles.detailPlaceName}>{box.name}</div>
                      {box.photoReference && (
                          <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${box.photoReference}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`} alt={box.name} className={styles.placeImage} />
                      )}
                  </div>
                  <div className={styles.durationSelectContainer}>
                      <select name="duration" defaultValue="2" onClick={(e) => e.stopPropagation()}>
                          {Array.from({ length: 12 }, (_, i) => (
                              <option key={i} value={i + 1}>소요시간: {i + 1}시간</option>
                          ))}
                      </select>
                  </div>
                    <button className={styles.placeAdd} onClick={handlePlusBtnClick}><div className={styles.plusFont}>
                        <img src={plusIcon} alt="Plus Icon" />    여기에 장소 추가</div>
                    </button>
                  </div>
              ))}
          </div>
      ))
  );

    return (
        <div className={styles.pageContainer}>
            <div className={styles.nickname}>여행 설계자의 닉네임</div>
            <div className={styles.title}>
                {isEditingTitle ? (
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        onBlur={() => setIsEditingTitle(false)}
                        onKeyPress={(e) => e.key === 'Enter' && setIsEditingTitle(false)}
                        autoFocus
                    />
                ) : (
                    <span>{title}</span>
                )}
                <button className={styles.editSmallBtn} onClick={toggleEditTitle}>
                    <div className={styles.editFont}>수정</div>
                </button>
            </div>  
            <div className={styles.inform}>
                <span>2024.02.09 ~ 2024.02.12 (3박 4일)</span>
                <span> | </span>
                <span>자가용</span>
                <span> | </span>
                <span>성인 2명</span>
            </div>  
            <div className={styles.hashtags}>
                #힐링 #가족여행 #맛집탐방
            </div>
            <hr className={styles.line}></hr>
            <div className={styles.divscroll}>
                {generateDay()}
            </div>
            {selectedBox && (
                <Modal
                    data={selectedBox}
                    onClose={() => setSelectedBox(null)} // Close handler added here.
                />
            )}
            {showPlusBtn && (
                <PlusBtn onClose={() => setShowPlusBtn(false)} onAddDetailBox={addDetailBox} />
            )}
        </div>
    );
};

export default AllList;