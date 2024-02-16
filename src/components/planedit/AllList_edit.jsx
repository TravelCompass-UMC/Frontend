import React, { useState } from "react";
import "../../styles/planedit/diaryContent_edit.css";
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

    const handleDetailBoxClick = (data) => {//클릭한 세부요소 데이터 저장
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
                <><div className="dayContainer">
                    <div>
                        <a className="detailnum">{`${i}일차`}</a>&nbsp;&nbsp;<a className="detailcal">2024.02.15(목)</a>
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
                                    <div style={{ background: "#EBEDF8", borderRadius: "50%", width: "32px", height: "32px", display: "inline-block", marginTop: "14px", marginLeft: "14px" }}>
                                        <div style={{ textAlign: "center"}}>
                                            <span style={{ fontSize: "16px", fontWeight: "700", color: "#626682" }}>{index + 1}</span>
                                        </div>
                                    </div>
                                        <td className="detailTime">
                                            09:30~11:20
                                        </td>
                                        <td className="placeimage" rowSpan={4}></td>
                                </tr>
                                <tr className="detailplace">
                                    <td className="detailplace" style={{ paddingLeft: "60px" }}>
                                        명소
                                    </td>
                                </tr>
                                <tr className="detailplacename">
                                    <td className="detailplacename" style={{ paddingLeft: "60px" }}>
                                        장소이름
                                    </td>
                                </tr>
                                <tr className="detailtime">
                                    <td className="detailtime" style={{ paddingLeft: "60px" }}>
                                        소요시간(기본 2시간)
                                    </td>
                                </tr>
                                </div>        
                                <button className="place-plus" onClick={handlePlusBtnClick}><div className="plus-font">
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
            {
                showPlusBtn && (
                    <PlusBtn onClose={() => setShowPlusBtn(false)} /> // PlusBtn 컴포넌트를 조건부로 렌더링하고, 닫기 핸들러를 추가합니다.
                )
            }
        </div >

    );
};

export default AllList;
