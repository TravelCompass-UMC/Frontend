import React, { useState } from "react";
import styles from "../../styles/planedit/editLeftBar.module.css";

function LeftBar({ onCustomChange }) {
  const [custom, setCustom] = useState(0);
  const [travelDays, setTravelDays] = useState(4);
  const [editComplete, setEditComplete] = useState(false); // New state for 편집 완료하기 button
  const [save, setSave] = useState(false); // New state for 저장하기 button

  const handleAllScheduleClick = (e) => {
    setCustom(e);
    onCustomChange(e);
    if (e === 0) {
      console.log("전체 일정을 보여줍니다.");
    }
    else if (e > 0) {
      console.log("디테일 일정을 보여줍니다.");
    }
  };

  const handleEditCompleteClick = () => {
    setEditComplete(!editComplete); // Toggle the editComplete state
    if (!editComplete) {
      console.log("편집 완료");
    }
  };

  const handleSaveClick = () => {
    setSave(!save); // Toggle the save state
    if (!save) {
      console.log("저장 완료");
    }
  };

  const generateDayButtons = () => {
    const buttons = [];
    for (let i = 1; i <= travelDays; i++) {
      buttons.push(
        <div key={i}>
          <button
            className={styles.dayBtn}
            value={i}
            onClick={() => handleAllScheduleClick(i)}
            style={{
              background: custom === i ? "#484a64" : "var(--grayscale-White, #FFF)",
              color: custom === i ? "#FFF" : "#000", 
            }}
          >
            {`${i}일차`}
          </button>
        </div>
      );
    }
    return buttons;
  };

  return (
    <div>
      {/* 전체 일정 버튼 */}
      <button
        className={styles.Schedule}
        style={{
          background: custom === 0 ? "#484a64" : "var(--grayscale-White, #FFF)",
          color: custom === 0 ? "#FFF" : "#000", 
        }}
        value={0} onClick={() => handleAllScheduleClick(0)}
      >
        전체일정
      </button>
      
      {/* 여행 일차 버튼들 */}
      {generateDayButtons()}

      {/* 편집 완료 및 저장 버튼 */}
      <button
        className={styles.editBtn}
        style={{
          background: editComplete ? "#cfcfcf" : "var(--grayscale-White, #FFF)",
        }}
        onClick={handleEditCompleteClick}
      >
        편집 완료하기
      </button>
      <button
        className={styles.saveBtn}
        style={{
          background: save ? "var(--grayscale-White, #6e59f9)" : "#8270FF",
        }}
        onClick={handleSaveClick}
      >
        저장하기
      </button>
    </div>
  );
}

export default LeftBar;
