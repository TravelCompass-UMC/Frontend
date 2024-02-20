// AllList_edit.jsx
import React, { useState } from "react";
import styles from "../../styles/planedit/editAllList.module.css";
import Modal from "./Modal_edit";
import PlusBtn from "./placePlus_edit";
import plusIcon from "../../assets/images/edit/+.svg";

const AllList = () => {
    const [title, setTitle] = useState('여행 계획서의 제목');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    //일차 수
    const [travelDays, setTravelDays] = useState(4);
    //1일차, 2일차.. 세부 일정 데이터 수
    const [travelnum, setTravelnum] = useState([3, 4, 2, 1]);
    // 클릭한 detailBox의 데이터를 저장하기 위한 상태
    const [selectedBox, setSelectedBox] = useState(null);
    // PlusBtn 컴포넌트 표시 여부
    const [showPlusBtn, setShowPlusBtn] = useState(false);
      
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
    
    const toggleEditTitle = () => {
        setIsEditingTitle(!isEditingTitle);
      };

    const handleDetailBoxClick = (e, data) => {//클릭한 세부요소 데이터 저장
        if (e.target.closest('select[name="duration"]')) {
            e.stopPropagation();
            return;
          }
          setSelectedBox(data);
        };

    // PlusBtn 컴포넌트를 열기 위한 핸들러
    const handlePlusBtnClick = (e) => {
        e.stopPropagation(); // 이벤트 버블링 방지
        setShowPlusBtn(true); // PlusBtn 컴포넌트를 보이게 설정
    };

  const generateDay = () => {
    const dayElements = [];
    for (let i = 1; i <= travelDays; i++) {
      const dayPlans = Array.from({ length: travelnum[i - 1] }, (_, index) => (
        <div key={index} className={styles.detailBox} onClick={(e) => handleDetailBoxClick(e, index + 1)}>
                  <div className={styles.timeContainer}>
                    <div className={styles.numberIndex}>{index + 1}</div>
                    <div className={styles.detailTime}>09:30~11:20</div>
                  </div>
                  <div className={styles.placeContainer}>
                    <div className={styles.detailPlace}>명소</div>
                    <div className={styles.detailPlaceName}>장소이름</div>
                    <div className={styles.placeImage}></div>
                  </div>
                  <div className={styles.durationSelectContainer}>
                                        <select
                                            name="duration"
                                            defaultValue="2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i + 1}>소요시간: {i + 1}시간</option>
                                            ))}
                                        </select>
                                        <div className={styles.customArrow}></div>
                  </div>
                  <button className={styles.placeAdd} onClick={handlePlusBtnClick}><div className={styles.plusFont}>
                    <img src={plusIcon} alt="Plus Icon" /> 여기에 장소 추가</div>
                  </button>
        </div>
      ));

      dayElements.push(
        <div key={i} className={styles.dayContainer}>
          <div className={styles.dayHeader}>
            <span className={styles.detailNum}>{`${i}일차`}</span>
            <span className={styles.detailCal}>2024.02.19(월)</span>
          </div>
          {dayPlans}
        </div>
      );
    }
    return dayElements;
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
                title
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
            <div></div>
      <div className={styles.divscroll}>
        {generateDay()}
      </div>
      {
                selectedBox && (
                    <Modal
                        data={selectedBox}
                        onClose={() => setSelectedBox(null)} // 닫기 핸들러를 추가합니다.
                    />
                )
            }
            {
                showPlusBtn && (
                    <PlusBtn onClose={() => setShowPlusBtn(false)} /> // PlusBtn 컴포넌트를 조건부로 렌더링하고, 닫기 핸들러를 추가합니다.
                )
            }
    </div>
  );
};

export default AllList;

