import React, { useState } from "react";
import "../../styles/diaryContent.module.css";
import LeftBar from "./LeftBar";
import AllList from "./AllList";
import DetailList from "./detailList";

function Diarycontent() {
  const [num, setNum] = useState(0);

  const handleAllScheduleClick = (value) => {
    // 사용하고자 하는 로직을 수행
    setNum(value);
    console.log("customDuration changed:", value);
  };

  return (
    //부모 컴포넌트에서 onCustomDurationChange 함수를 전달 */}
    //<SearchComponent onCustomDurationChange={handleCustomDurationChange} />
    //diarycontent.jsx 내용
    <div style={{ display: "flex" }}>
      <div style={{ width: "270px", height: "980px" }}>
        <LeftBar onCustomChange={handleAllScheduleClick} />
      </div>

      <div style={{ width: "85vw", marginTop: "20px" }}>
        {num === 0 && <AllList />}
        {console.log("diarycontent에서의 num", num)}
        {num > 0 && <DetailList num={num} />} {/* Pass num to DetailList */}
      </div>
    </div>
  );
}

export default Diarycontent;
