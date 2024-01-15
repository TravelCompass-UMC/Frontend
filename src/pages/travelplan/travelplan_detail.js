import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SidebarR from "../../components/SidebarR";
import Map from "../../components/Map";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { eachDayOfInterval, format } from "date-fns";

const renderSidebarContent = (
  sidebarContent,
  dates,
  times,
  handleTimeChange
) => {
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
          </div>
        );
      });

    // 다른 case 처리
    default:
      return <p>내용을 선택해 주세요.</p>;
  }
};

const ExamplePage = () => {
  const location = useLocation();
  const { startDate, endDate } = location.state || {};
  const [sidebarContent, setSidebarContent] = useState("default");
  const [times, setTimes] = useState({});

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

  const dates =
    startDate && endDate
      ? eachDayOfInterval({ start: startDate, end: endDate })
      : [];

  return (
    <div>
      <SidebarR width={600}>
        <button onClick={() => setSidebarContent("일정")}>상세일정</button>
        <button onClick={() => setSidebarContent("숙소")}>숙소선택</button>
        <button onClick={() => setSidebarContent("장소")}>장소선택</button>
        {renderSidebarContent(sidebarContent, dates, times, handleTimeChange)}
      </SidebarR>
      <Map />
    </div>
  );
};

export default ExamplePage;
