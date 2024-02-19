import React, { useState } from "react";
import styles from "../../styles/planedit/editDetailList.module.css";
import Modal from "./Modal_edit"; // 모달 컴포넌트를 임포트합니다.

//세부일정
const DetailList = ({ num }) => {
    //일차 수
    const [travelDays, setTravelDays] = useState(4);
    //1일차, 2일차.. 세부 일정 데이터 수
    const [travelnum, setTravelnum] = useState([3, 4, 2, 1]);
    //즐겨찾기 여부
    // 클릭한 detailBox의 데이터를 저장하기 위한 상태
    const [selectedBox, setSelectedBox] = useState(null);

    const handleDetailBoxClick = (data) => {//클릭한 세부요소 데이터 저장
        setSelectedBox(data);
    };


    const generateDay = () => {
        const day = [];

        day.push(
            <div className={styles.dayContainer} key={num}>
                <div>
                    {console.log("detailList에서의 num", num)}
                    <a className={styles.detailnum}>{`${num}일차`}</a>&nbsp;&nbsp;
                    <a className={styles.detailcal}>2024.02.15(목)</a>
                </div>
                {Array.from({ length: travelnum[num - 1] }).map((_, index) => (
                    <div
                        className={styles.detailBox}
                        key={index}
                        onClick={() => handleDetailBoxClick(1)}
                    >                        
                    <table>
                            <tr>
                                <td style={{ width: "50px" }} rowSpan={4}>
                                </td>
                                <td className={styles.detailTime}>09:30~11:20</td>
                                <td className={styles.placeimage} rowSpan={4}></td>
                            </tr>
                            <tr className={styles.detailplace}>명소</tr>
                            <tr className={styles.detailplacename}>장소이름</tr>
                            <tr className={styles.detailmoney}>00,000원</tr>
                            <tr className={styles.detailtime}>소요시간(기본 2시간)</tr>
                        </table>
                    </div>
                ))}
            </div>
        );

        return day;
    };
    return (
        <div>
            <div className={styles.nickname}>여행 설계자의 닉네임</div>
            <h4 className={styles.title}>여행 계획서의 제목</h4>
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
            {/* JSX 내용 작성 */}
            {generateDay()}

            {selectedBox && (
                <Modal
                    data={selectedBox}
                    onClose={() => setSelectedBox(null)} // 닫기 핸들러를 추가합니다.
                />
            )}
        </div>

    );
};

export default DetailList;