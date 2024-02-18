import React, { useState } from "react";
import styles from "../../styles/planedit/editAllList.module.css";
import Modal from "./Modal_edit"; // 모달 컴포넌트를 임포트합니다.
import PlusBtn from "./placePlus_edit"; // PlusBtn 컴포넌트를 임포트합니다.
import plusIcon from "../../assets/images/edit/+.svg"; // 플러스 아이콘 이미지를 import

//전체일정
const AllList = () => {
    //일차 수
    const [travelDays, setTravelDays] = useState(4);
    //1일차, 2일차.. 세부 일정 데이터 수
    const [travelnum, setTravelnum] = useState([3, 4, 2, 1]);
    // 클릭한 detailBox의 데이터를 저장하기 위한 상태
    const [selectedBox, setSelectedBox] = useState(null);
    // PlusBtn 컴포넌트 표시 여부
    const [showPlusBtn, setShowPlusBtn] = useState(false);

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
        const day = [];
        for (let i = 1; i <= travelDays; i++) {
            day.push(   
                <><div className={styles.dayContainer}>
                    <div>
                        <a className={styles.detailNum}>{`${i}일차`}</a>&nbsp;&nbsp;<a className={styles.detailCal}>2024.02.19(월)</a>
                    </div>
                    {Array.from({ length: travelnum[i - 1] }).map((_, index) => (
                        <div
                            className={styles.detailBox}
                            key={index}
                            onClick={(e) => handleDetailBoxClick(e, 1)}
                        >
                            <table>
                                <div>
                                <tr>
                                    <div style={{ background: "#EBEDF8", borderRadius: "50%", width: "32px", height: "32px", display: "inline-block", marginTop: "14px", marginLeft: "14px" }}>
                                        <div style={{ textAlign: "center", marginTop: "3px"}}>
                                            <div style={{ fontSize: "16px", fontWeight: "700", color: "#626682" }}>{index + 1}</div>
                                        </div>
                                    </div>  
                                        <td className={styles.detailTime}>
                                            09:30~11:20
                                        </td>  
                                        <td className={styles.placeImage} rowSpan={4}></td>
                                </tr>  
                                <tr className={styles.detailPlace}>
                                    <td className={styles.detailPlace} style={{ paddingLeft: "60px" }}>
                                        명소
                                    </td>
                                </tr>  
                                <tr className={styles.detailPlaceName}>
                                    <td className={styles.detailPlaceName} style={{ paddingLeft: "60px" }}>
                                        장소이름
                                    </td>
                                </tr>  
                                <tr className={styles.placeTime}>
                                    <td className={styles.placeTime} style={{ paddingLeft: "50px" }}>
                                        <div className={styles.selectContainer}>
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
                                    </td>
                                    </tr>

                                </div>        
                                <button className={styles.placeAdd} onClick={handlePlusBtnClick}><div className={styles.plusFont}>
                                    <img src={plusIcon} alt="Plus Icon" /> 여기에 장소 추가</div>
                                </button>
                            </table>
                        </div >
                    ))}
                </div>
                </>
            );
        }
        return day;
    };
    return (    
        <div style={{ marginLeft: "100px" }}>
            <div className={styles.nickname}>여행 설계자의 닉네임</div>
            <div className={styles.title}>여행 계획서의 제목
            <button className={styles.editSmallBtn}><div className={styles.editFont}>수정</div></button>
            </div>   
            <div className={styles.inform}>
                <span>2023.11.11 ~ 2023.11.13 (3박 4일)</span>
                <span> | </span>
                <span>자가용</span>
                <span> | </span>
                <span>성인 2명</span>
            </div>  
            <div className={styles.hashtags}>
                #힐링 #가족여행 #맛집탐방
            </div>
            <hr className={styles.line}></hr>
            <div>
                <div className={styles.divscroll}>
                    {generateDay()}
                </div>
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
        </div >

    );
};

export default AllList;
