import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SidebarL from "../../components/SidebarL";
import Map from "../../components/Map";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { eachDayOfInterval, format } from "date-fns";
import "../../styles/travelplan_detail.css";
import Searching from "../../components/Search";
import AccommodationsData from "../../tempdata/accommodationdata";
import Accommodation from "./accommodationcomponent";

const sidebarOptions = ["일정", "숙소", "장소"];

const Trvlpage = () => {
  const location = useLocation();
  const { startDate, endDate, destination } = location.state || {};

  const [sidebarContent, setSidebarContent] = useState("일정");
  const [transportation, setTransportation] = useState("자가용");
  const [times, setTimes] = useState({});
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [selectedAccommodations, setSelectedAccommodations] = useState({});
  const [tempSelectedAccommodation, setTempSelectedAccommodation] =
    useState(null);

  const formattedStartDate = startDate
    ? format(new Date(startDate), "yyyy-MM-dd")
    : "";
  const formattedEndDate = endDate
    ? format(new Date(endDate), "yyyy-MM-dd")
    : "";

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
  };

  const handleAdultCount = (action) => {
    if (action === "plus") {
      setAdultCount((count) => count + 1);
    } else if (action === "minus" && adultCount > 1) {
      setAdultCount((count) => count - 1);
    }
  };

  const handleChildrenCount = (action) => {
    if (action === "plus") {
      setChildrenCount((count) => count + 1);
    } else if (action === "minus" && childrenCount > 0) {
      setChildrenCount((count) => count - 1);
    }
  };

  const renderPeopleCount = () => {
    return (
      <div className="people-count">
        <div>
          <label>성인: </label>
          <button className="minus" onClick={() => handleAdultCount("minus")}>
            -
          </button>
          <span>{adultCount}</span>
          <button className="plus" onClick={() => handleAdultCount("plus")}>
            +
          </button>
        </div>
        <div>
          <label>미성년자: </label>
          <button
            className="minus"
            onClick={() => handleChildrenCount("minus")}
          >
            -
          </button>
          <span>{childrenCount}</span>
          <button className="plus" onClick={() => handleChildrenCount("plus")}>
            +
          </button>
        </div>
      </div>
    );
  };

  const handleSelectAccommodation = (accommodationId, formattedDate, e) => {
    if (e) e.stopPropagation(); // 조건부로 이벤트 전파 중지
    setSelectedAccommodation(accommodationId);
    setSelectedAccommodations((prev) => ({
      ...prev,
      [formattedDate]: accommodationId,
    }));
    setSidebarContent("숙소");
  };

  const renderSelectedAccommodationInfo = (formattedDate) => {
    const accommodationId = selectedAccommodations[formattedDate];
    if (!accommodationId) return null; // 숙소가 선택되지 않은 경우

    const accommodation = AccommodationsData.find(
      (acc) => acc.id === accommodationId
    );
    if (!accommodation) return null; // 선택된 숙소 ID에 해당하는 정보가 없는 경우

    return (
      <div className="selected-accommodation-info">
        <h4>{accommodation.name}</h4>
        <p>{accommodation.address}</p>
        {/* 이미지가 있을 경우 */}
        {accommodation.imageUrl && (
          <img
            src={accommodation.imageUrl}
            alt={accommodation.name}
            style={{ width: "100px", height: "auto" }}
          />
        )}
        {/* 숙소 선택 변경 또는 해제 처리를 위한 버튼 */}
        <button onClick={() => handleSelectAccommodation(null, formattedDate)}>
          숙소 변경
        </button>
      </div>
    );
  };

  const onSelectAccommodation = (accommodationId) => {
    setTempSelectedAccommodation(accommodationId);
  };

  const handleSelectAccommodationForDate = (formattedDate) => {
    if (tempSelectedAccommodation) {
      setSelectedAccommodations((prev) => ({
        ...prev,
        [formattedDate]: tempSelectedAccommodation,
      }));
      setTempSelectedAccommodation(null); // 임시 선택 초기화
      // 여기서는 setSidebarContent("숙소")를 호출하지 않습니다.
    }
  };

  // 숙소 선택 및 "+숙소 선택(날짜)" 버튼을 렌더링하는 로직을 수정하여,
  // 숙소 리스트와 선택된 숙소 정보를 동시에 표시합니다.
  const renderAccommodationSelection = () => {
    const intervalDates = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });
    const formattedDates = intervalDates.map((date) =>
      format(date, "yyyy-MM-dd")
    );

    return (
      <>
        <div>
          {AccommodationsData.map((accommodation) => (
            <div
              key={accommodation.id}
              onClick={() => setTempSelectedAccommodation(accommodation.id)}
            >
              <h4>{accommodation.name}</h4>
              <p>{accommodation.address}</p>
              {accommodation.imageUrl && (
                <img
                  src={accommodation.imageUrl}
                  alt={accommodation.name}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
            </div>
          ))}
        </div>
        {formattedDates.map((formattedDate, index) => (
          <div key={index} className="daily-accommodation-selection">
            <h3>{formattedDate}</h3>
            {selectedAccommodations[formattedDate] && (
              <div>
                <p>
                  선택된 숙소:{" "}
                  {
                    AccommodationsData.find(
                      (acc) => acc.id === selectedAccommodations[formattedDate]
                    )?.name
                  }
                </p>
              </div>
            )}
            <button
              onClick={() => handleSelectAccommodationForDate(formattedDate)}
            >
              + 숙소 선택 ({formattedDate})
            </button>
          </div>
        ))}
      </>
    );
  };

  const renderSidebarContent = (
    sidebarContent,
    dates,
    times,
    handleTimeChange,
    renderTransportationButtons,
    renderPeopleCount
  ) => {
    switch (sidebarContent) {
      case "일정":
        return (
          <>
            {dates.map((date) => {
              const formattedDate = format(date, "yyyy-MM-dd");
              const { startTime, endTime } = times[formattedDate] || {};
              return (
                <div key={formattedDate}>
                  <h3>{format(date, "yyyy년 MM월 dd일")}</h3>
                  <div>
                    <label>시작 시간: </label>
                    <DatePicker
                      selected={startTime}
                      onChange={(date) =>
                        handleTimeChange(date, formattedDate, true)
                      }
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
            })}
            {renderTransportationButtons()}
            {renderPeopleCount()}
          </>
        );

      case "숙소":
        return (
          <div>
            {renderAccommodationSelection()}
            {/* eachDayOfInterval 호출을 제거하고, 선택된 숙소 정보를 여기서 직접 렌더링합니다. */}
            {Object.keys(selectedAccommodations).map((formattedDate) =>
              renderSelectedAccommodationInfo(formattedDate)
            )}
          </div>
        );

      case "장소":
        return <p>장소 선택 내용이 여기에 표시됩니다.</p>;

      default:
        return <p>내용을 선택해 주세요.</p>;
    }
  };

  // 나머지 컴포넌트 로직은 동일합니다.

  const handlePrevious = () => {
    const currentIndex = sidebarOptions.indexOf(sidebarContent);
    if (currentIndex > 0) {
      setSidebarContent(sidebarOptions[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = sidebarOptions.indexOf(sidebarContent);
    if (currentIndex < sidebarOptions.length - 1) {
      setSidebarContent(sidebarOptions[currentIndex + 1]);
    }
  };

  return (
    <div>
      <SidebarL width={400} isOpen={true}>
        <h2>여행지: {destination}</h2>
        <h3>
          여행 기간: {formattedStartDate} ~ {formattedEndDate}
        </h3>
        <div className="search-component">
          {sidebarContent === "숙소" && <Searching />}
        </div>
        <button
          className={sidebarContent === "일정" ? "selected" : ""}
          onClick={() => setSidebarContent("일정")}
          data-content="일정"
        >
          상세일정
        </button>
        <button
          className={sidebarContent === "숙소" ? "selected" : ""}
          onClick={() => setSidebarContent("숙소")}
          data-content="숙소"
        >
          숙소선택
        </button>
        <button
          className={sidebarContent === "장소" ? "selected" : ""}
          onClick={() => setSidebarContent("장소")}
          data-content="장소"
        >
          장소선택
        </button>
        {renderSidebarContent(
          sidebarContent,
          eachDayOfInterval({ start: startDate, end: endDate }),
          times,
          handleTimeChange,
          renderTransportationButtons,
          renderPeopleCount
        )}
        {sidebarContent === "숙소" ? renderAccommodationSelection() : null}
        {renderSelectedAccommodationInfo()}

        <button onClick={handlePrevious}>이전</button>
        <button onClick={handleNext}>다음</button>
      </SidebarL>

      <Map />
    </div>
  );
};

export default Trvlpage;
