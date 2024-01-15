import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SidebarL from "../../components/SidebarL";
import Map from "../../components/Map";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { eachDayOfInterval, format } from "date-fns";
import "../../styles/travelplan_detail.css";

const renderSidebarContent = (
  sidebarContent,
  dates,
  times,
  handleTimeChange,
  hashtag,
  hashArr,
  onChangeHashtag,
  onKeyUp,
  transportation, // transportation 변수 추가
  handleTransportationChange // handleTransportationChange 변수 추가
) => {
  const renderTransportationButtons = () => {
    return (
      <div className="transportation-buttons">
        <button
          className={transportation === "자가용" ? "selected" : ""}
          onClick={() => handleTransportationChange("자가용")}
        >
          자가용
        </button>
        <button
          className={transportation === "대중교통" ? "selected" : ""}
          onClick={() => handleTransportationChange("대중교통")}
        >
          대중교통
        </button>
      </div>
    );
  };

  switch (sidebarContent) {
    case "일정":
      return dates.map((date) => {
        const formattedDate = format(date, "yyyy-MM-dd");
        const { startTime, endTime } = times[formattedDate] || {};
        return (
          <div key={formattedDate}>
            <h3>{format(date, "yyyy년 MM월 dd일")}</h3>
            <div>
              <label>시작 시간: </label>
              <DatePicker
                selected={startTime}
                onChange={(date) => handleTimeChange(date, formattedDate, true)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
            <div>
              <label>종료 시간: </label>
              <DatePicker
                selected={endTime}
                onChange={(date) =>
                  handleTimeChange(date, formattedDate, false)
                }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
            {renderTransportationButtons()}
            <div className="HashWrap">
              <div className="HashWrapOuter">
                {hashArr.map((tag, index) => (
                  <div key={index} className="HashWrapInner">
                    #{tag}
                  </div>
                ))}
              </div>
              <input
                className="HashInput"
                type="text"
                value={hashtag}
                onChange={onChangeHashtag}
                onKeyUp={onKeyUp}
                placeholder="해시태그 입력"
              />
            </div>
          </div>
        );
      });

    case "숙소":
      return <p>숙소 선택 내용이 여기에 표시됩니다.</p>;
    case "장소":
      return <p>장소 선택 내용이 여기에 표시됩니다.</p>;
    default:
      return <p>내용을 선택해 주세요.</p>;
  }
};

const ExamplePage = () => {
  const location = useLocation();
  const { startDate, endDate } = location.state || {};
  const [sidebarContent, setSidebarContent] = useState("일정");
  const [transportation, setTransportation] = useState("자가용"); // transportation 상태 추가
  const [times, setTimes] = useState({});
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  useEffect(() => {
    if (startDate && endDate) {
      const dates = eachDayOfInterval({ start: startDate, end: endDate });
      const newTimes = {};
      dates.forEach((date) => {
        const formattedDate = format(date, "yyyy-MM-dd");
        newTimes[formattedDate] = {
          startTime: new Date(date.setHours(9, 0, 0, 0)),
          endTime: new Date(date.setHours(18, 0, 0, 0)),
        };
      });
      setTimes(newTimes);
    }
  }, [startDate, endDate]);

  const handleTimeChange = (date, formattedDate, isStartTime) => {
    setTimes((prevTimes) => ({
      ...prevTimes,
      [formattedDate]: {
        ...prevTimes[formattedDate],
        [isStartTime ? "startTime" : "endTime"]: date,
      },
    }));
  };

  const handleTransportationChange = (mode) => {
    setTransportation(mode);
  };

  const onChangeHashtag = useCallback((e) => {
    setHashtag(e.target.value);
  }, []);

  const onKeyUp = useCallback(
    (e) => {
      if (e.keyCode === 13 && hashtag.trim() !== "") {
        setHashArr((hashArr) => [...hashArr, hashtag]);
        setHashtag("");
      }
    },
    [hashtag]
  );

  return (
    <div>
      <SidebarL width={400} isOpen={true}>
        <button
          className={sidebarContent === "일정" ? "selected" : ""}
          onClick={() => setSidebarContent("일정")}
        >
          상세일정
        </button>
        <button
          className={sidebarContent === "숙소" ? "selected" : ""}
          onClick={() => setSidebarContent("숙소")}
        >
          숙소선택
        </button>
        <button
          className={sidebarContent === "장소" ? "selected" : ""}
          onClick={() => setSidebarContent("장소")}
        >
          장소선택
        </button>

        {renderSidebarContent(
          sidebarContent,
          eachDayOfInterval({ start: startDate, end: endDate }),
          times,
          handleTimeChange,
          hashtag,
          hashArr,
          onChangeHashtag,
          onKeyUp,
          transportation, // transportation 전달
          handleTransportationChange // handleTransportationChange 전달
        )}
      </SidebarL>
      <Map />
    </div>
  );
};

export default ExamplePage;
