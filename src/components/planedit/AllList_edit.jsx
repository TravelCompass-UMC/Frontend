//AllList_edit.jsx code
import React, { useState } from "react";
import "../../styles/planedit/diaryContent_edit.css";
import numImage1 from "../../assets/images/Pages/Ellipse 10 (1).png"
import heart from "../../assets/images/Pages/Group 2236.png"; // 이미지를 import
import heartFilled from "../../assets/images/Pages/Group 2236_filled.png"; // 채워진 하트 이미지를 import
import Modal from "./Modal_edit"; // 모달 컴포넌트를 임포트합니다.
import plusIcon from "../../assets/images/edit/+.svg"; // 채워진 하트 이미지를 import

//전체일정
const AllList = () => {
    //일차 수
    const [travelDays, setTravelDays] = useState(4);
    //1일차, 2일차.. 세부 일정 데이터 수
    const [travelnum, setTravelnum] = useState([3, 4, 2, 1]);
    //즐겨찾기 여부
    const [heartState, setHeartState] = useState(0); // 0: 빈 하트, 1: 채워진 하트
    // 클릭한 detailBox의 데이터를 저장하기 위한 상태
    const [selectedBox, setSelectedBox] = useState(null);


    const handleHeartClick = () => {
        setHeartState(heartState === 0 ? 1 : 0); // 클릭할 때마다 상태 변경
    };

    const handleDetailBoxClick = (data) => {//클릭한 세부요소 데이터 저장
        setSelectedBox(data);
    };


    const generateDay = () => {
        const day = [];
        for (let i = 1; i <= travelDays; i++) {
            day.push(
                <><div className="dayContainer">
                    <div>
                        <a className="detailnum">{`${i}일차`}</a>&nbsp;&nbsp;<a className="detailcal">2024.02.07(수)</a>
                    </div>
                    {Array.from({ length: travelnum[i - 1] }).map((_, index) => (
                        <div
                            className="detailBox"
                            key={index}
                            onClick={() => handleDetailBoxClick(1)}
                        >
                            <table>
                                <div>
                                <tr>
                                    <td rowSpan={4} >
                                        <img className="detailnumImg" src={numImage1} />
                                        <span className="detailnumber">{index + 1}</span>
                                    </td>
                                    <td className="detailtime">
                                        09:30~11:20
                                    </td>
                                    <td className="detailimage" rowSpan={4}>

                                    </td>
                                </tr>
                                <tr className="detailplace">
                                    명소
                                </tr>
                                <tr className="detailplacename">
                                    장소이름
                                </tr>
                                <tr className="detailmoney">
                                    00,000원
                                </tr>
                                </div>
                                <button className="place-plus"><div className="plus-font">
                                    <img className="plus-icon" src={plusIcon} />      여기에 장소 추가</div>
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
            <img
                className="heartImage"
                src={heartState === 1 ? heartFilled : heart}
                alt="Heart"
                onClick={handleHeartClick}
            />
            <div className="nickname">여행 설계자의 닉네임</div>
            <div className="title">여행 계획서의 제목
            <button className="edit_smallBtn"><div className="edit_font">수정</div></button>
            </div> 
            <div className="inform">
                <span>2023.11.11 ~ 2023.11.13 (3박 4일)</span>
                <span> | </span>
                <span>자가용</span>
                <span> | </span>
                <span>성인 2명</span>
            </div>
            <div className="hashtags">
                #힐링 #가족여행 #맛집탐방
            </div>
            <hr className="line"></hr>
            {/* JSX 내용 작성 */}
            <div>
                <div className="divscroll">
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
        </div >

    );
};

export default AllList;