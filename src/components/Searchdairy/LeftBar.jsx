import React, { useState } from "react";
import styles from "../../styles/diaryContent.css";

function LeftBar() {
  // 여행 기간에 따른 버튼을 생성하기 위한 state
  const [travelDays, setTravelDays] = useState(4);

  // 전체 일정 버튼을 클릭할 때 호출되는 함수
  const handleAllScheduleClick = () => {
    // 전체 일정을 보여주는 로직을 추가할 수 있습니다.
    console.log("전체 일정을 보여줍니다.");
  };

  // 특정 일차 버튼을 클릭할 때 호출되는 함수
  const handleDayButtonClick = (day) => {
    // 특정 일차의 일정을 보여주는 로직을 추가할 수 있습니다.
    console.log(`여행 ${day}일차 일정을 보여줍니다.`);
  };

  // 여행 기간이 변경될 때 호출되는 함수
  const handleTravelDaysChange = (days) => {
    // 여행 기간을 변경하고 해당 일수에 맞게 버튼을 생성합니다.
    setTravelDays(days);
  };

  // 여행 기간에 따라 버튼을 생성하는 함수
  const generateDayButtons = () => {
    const buttons = [];
    for (let i = 1; i <= travelDays; i++) {
      buttons.push(
        <div>
          <button key={i} onClick={() => handleDayButtonClick(i)}>
            {`${i}일차`}
          </button>
        </div>
      );
    }
    return buttons;
  };

  return (
    <div>
      {/* LeftBarjsx 내용 */}
      <button onClick={handleAllScheduleClick}>전체일정</button>
      {/* 여행 기간 설정을 위한 예시 입력 */}
      {/* <input
        type="number"
        placeholder="여행 일수를 입력하세요"
        onChange={(e) => handleTravelDaysChange(Number(e.target.value))}
      /> */}
      {/* 여행 기간에 따른 일차 버튼들 */}
      {generateDayButtons()}
    </div>
  );
}

export default LeftBar;
