// detailList_edit.jsx
import React, { useState } from "react";
import styles from "../../styles/planedit/editDetailList.module.css";
import Modal from "./Modal_edit"; 

const DetailList = ({ num }) => {
    const [travelDays, setTravelDays] = useState(4);
    const [travelnum, setTravelnum] = useState([3, 4, 2, 1]);
    const [selectedBox, setSelectedBox] = useState(null);
    const [title, setTitle] = useState('여행 계획서의 제목');
    const [isEditingTitle, setIsEditingTitle] = useState(false);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const toggleEditTitle = () => setIsEditingTitle(!isEditingTitle);
    const handleDetailBoxClick = (data) => setSelectedBox(data);

    const generateDay = () => {
        return (
            <div className={styles.dayContainer} key={num}>
                <div className={styles.dayHeader}>
                    <span className={styles.detailNum}>{`${num}일차`}</span>
                    <span className={styles.detailCal}>2024.02.15(목)</span>
                </div>
                {Array.from({ length: travelnum[num - 1] }).map((_, index) => (
                    <div className={styles.detailBox} key={index} onClick={() => handleDetailBoxClick(index + 1)}>
                        <div className={styles.timeContainer}>
                            <div className={styles.numberIndex}>{index + 1}</div>
                            <div className={styles.detailTime}>{'09:30~11:20'}</div>
                        </div>
                        <div className={styles.placeContainer}>
                                <div className={styles.detailPlaceName}>장소이름</div>
                                <div className={styles.detailPlace}>명소</div>
                                <div className={styles.placeImage}></div>
                        </div>
                        <div className={styles.durationSelectContainer}>
                          <select name="duration" defaultValue="2" onClick={(e) => e.stopPropagation()}>
                              {Array.from({ length: 12 }, (_, i) => (
                                  <option key={i} value={i + 1}>소요시간: {i + 1}시간</option>
                              ))}
                          </select>
                      </div>
                    </div>
                ))}
            </div>
        );
    };

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
                    onClose={() => setSelectedBox(null)}
                />
            )}
        </div>
    );
};

export default DetailList;
