import React, { useState } from "react";
import styles from "../../styles/diaryContent.module.css";
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
    <div style={{ display: "flex", marginLeft: "50px" }}>
      <div style={{ width: "250px" }}>
        <LeftBar onCustomChange={handleAllScheduleClick} />
      </div>

      <div style={{ width: "100%", marginTop: "30px" }}>
        {num === 0 && <AllList />}
        {num > 0 && <DetailList />}
      </div>
    </div>




  );
}

export default Diarycontent;
