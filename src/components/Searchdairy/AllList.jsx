import React, { useState } from "react";
import styles from "../../styles/diaryContent.module.css";
import numImage1 from "../../assets/images/Pages/Ellipse 10.png"
import heart from "../../assets/images/Pages/Group 2236.png"; // 이미지를 import
import heartFilled from "../../assets/images/Pages/Group 2236_filled.png"; // 채워진 하트 이미지를 import

//전체일정
const AllList = () => {
    const [travelDays, setTravelDays] = useState(4);
    const [travelnum, setTravelnum] = useState([3, 4, 2, 1]);

    const [heartState, setHeartState] = useState(0); // 0: 빈 하트, 1: 채워진 하트

    const handleHeartClick = () => {
        setHeartState(heartState === 0 ? 1 : 0); // 클릭할 때마다 상태 변경
    };
    const generateDay = () => {
        const day = [];
        for (let i = 1; i <= travelDays; i++) {
            // <h6>{`${i}일차`}</h6>
            day.push(
                <><div className={styles.dayContainer}>
                    <div>
                        <a className={styles.detailnum}>{`${i}일차`}</a>&nbsp;&nbsp;<a className={styles.detailcal}>2024.02.07(수)</a>
                    </div>
                    {Array.from({ length: travelnum[i - 1] }).map((_, index) => (
                        <div className={styles.detailBox}>
                            <table>
                                <tr>
                                    <td style={{ width: "50px" }} rowSpan={4} >
                                        <img className={styles.detailnum1} src={numImage1} />
                                    </td>
                                    <td className={styles.detailtime}>
                                        09:30~11:20
                                    </td>
                                    <td className={styles.detailimage} rowSpan={4}>

                                    </td>
                                </tr>
                                <tr className={styles.detailplace}>
                                    명소
                                </tr>
                                <tr className={styles.detailplacename}>
                                    장소이름
                                </tr>
                                <tr className={styles.detailmoney}>
                                    00,000원
                                </tr>
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
        <div>
            {/* Heart 이미지 클릭 이벤트 처리 */}
            <img
                className={styles.heartImage}
                src={heartState === 1 ? heartFilled : heart}
                alt="Heart"
                onClick={handleHeartClick}
            />
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
        </div>

    );
};

export default AllList;