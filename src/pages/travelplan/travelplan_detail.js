import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarL from "../../components/SidebarL";
import Map from "../../components/Map";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { eachDayOfInterval, format } from "date-fns";
import "../../styles/travelplan/travelplan_detail.css";
import Searching from "../../components/Search";
import AccommodationsData from "../../tempdata/accommodationdata";
import PlaceData from "../../tempdata/temp_placedata";
import Accommodation from "./accommodationcomponent";
import PlaceComponent from "./placecomponent";
import PlaceDateComponent from "./date_place_component";
import { subDays } from "date-fns";

const sidebarOptions = ["일정", "숙소", "장소"];

const Trvlpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { startDate, endDate, destination } = location.state || {};
  // 장소 검색어 상태
  const [searchTerm, setSearchTerm] = useState("");
  // 검색된 장소 목록 상태
  const [filteredPlaces, setFilteredPlaces] = useState(PlaceData);

  const [sidebarContent, setSidebarContent] = useState("일정");
  const [transportation, setTransportation] = useState("자가용");
  const [times, setTimes] = useState({});
  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);
  const [adultCount, setAdultCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [selectedAccommodations, setSelectedAccommodations] = useState({});
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeDate, setActiveDate] = useState("");
  const [selectedPlaces, setSelectedPlaces] = useState({});

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

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPlaces(PlaceData);
    } else {
      const filtered = PlaceData.filter(
        (place) =>
          place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPlaces(filtered);
    }
  }, [searchTerm]);

  // Place 컴포넌트 예시
  const Place = ({ name, address, imageUrl, onSelect, selected }) => {
    const selectedClass = selected ? "selected" : "";

    return (
      <div className={`place-container ${selectedClass}`} onClick={onSelect}>
        <img src={imageUrl} alt={name} className="place-image" />
        <div className="place-info">
          <h3>{name}</h3>
          <p>{address}</p>
        </div>
        {selected && <button className="select-button">선택됨</button>}
      </div>
    );
  };

  const renderPlaceSearch = () => {
    const handleSelectPlace = (id) => {
      // 선택된 장소 ID를 상태에 저장합니다.
      setSelectedPlace(id);
    };

    return (
      <>
        <input
          type="text"
          placeholder="장소 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="place-list">
          {filteredPlaces.map((place) => (
            <PlaceComponent
              key={place.id}
              name={place.name}
              address={place.address}
              imageUrl={place.imageUrl}
              onSelect={() => handleSelectPlace(place.id)}
              selected={selectedPlace === place.id}
            />
          ))}
        </div>
      </>
    );
  };

  // 장소선택 케이스에 날짜별 탭을 렌더링하는 함수
  const renderPlaceSelectionTabs = () => {
    const intervalDates = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });
    const formattedDates = intervalDates.map((date) =>
      format(date, "yyyy-MM-dd")
    );

    // 날짜 탭 클릭 핸들러
    const handleDateTabClick = (date) => {
      setActiveDate(date);
      // setActiveDate를 사용하여 현재 활성화된 날짜 상태를 업데이트
    };

    return (
      <div className="date-tabs">
        {formattedDates.map((date, index) => (
          <button
            key={index}
            className={`date-tab ${activeDate === date ? "active" : ""}`}
            onClick={() => handleDateTabClick(date)}
          >
            {date}
          </button>
        ))}
      </div>
    );
  };

  // 날짜별로 선택된 숙소와 장소 정보를 렌더링하는 함수
  // 날짜별로 선택된 숙소와 장소 정보를 렌더링하는 함수
  const renderSelectedInfoForDate = () => {
    const currentAccommodationId = selectedAccommodations[activeDate];
    const currentAccommodation = AccommodationsData.find(
      (acc) => acc.id === currentAccommodationId
    );

    // 전날 날짜 계산
    const previousDate = format(subDays(new Date(activeDate), 1), "yyyy-MM-dd");
    const previousAccommodationId = selectedAccommodations[previousDate];
    const previousAccommodation = AccommodationsData.find(
      (acc) => acc.id === previousAccommodationId
    );

    return (
      <div>
        {previousAccommodation && (
          <div>
            <h3>전날 선택된 숙소:</h3>
            <div>
              <h4>{previousAccommodation.name}</h4>
              <img
                src={previousAccommodation.imageUrl}
                alt={previousAccommodation.name}
                style={{ width: "100px", height: "auto" }}
              />
            </div>
          </div>
        )}
        {currentAccommodation && (
          <div>
            <h3>선택된 숙소:</h3>
            <div>
              <h4>{currentAccommodation.name}</h4>
              <img
                src={currentAccommodation.imageUrl}
                alt={currentAccommodation.name}
                style={{ width: "100px", height: "auto" }}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

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
            <Accommodation
              key={accommodation.id}
              name={accommodation.name}
              imageUrl={accommodation.imageUrl}
              onSelect={() => onSelectAccommodation(accommodation.id)}
              selected={tempSelectedAccommodation === accommodation.id}
            />
          ))}
        </div>

        {formattedDates.map((formattedDate, index) => (
          <div key={index} className="daily-accommodation-selection">
            <h3>{formattedDate}</h3>
            {selectedAccommodations[formattedDate] ? (
              // 선택된 숙소 정보를 렌더링
              <div className="selected-accommodation-info">
                <p>
                  선택된 숙소:{" "}
                  {
                    AccommodationsData.find(
                      (acc) => acc.id === selectedAccommodations[formattedDate]
                    )?.name
                  }
                </p>
                <button
                  onClick={() => handleSelectAccommodation(null, formattedDate)}
                >
                  숙소 변경
                </button>
              </div>
            ) : (
              // 숙소가 선택되지 않았을 때 숙소 선택 버튼을 렌더링
              <button
                onClick={() => handleSelectAccommodationForDate(formattedDate)}
              >
                + 숙소 선택 ({formattedDate})
              </button>
            )}
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
        return <div>{renderAccommodationSelection()}</div>;

      case "장소":
        return (
          <>
            {renderPlaceSearch()}
            {renderPlaceSelectionTabs()}
            {renderSelectedInfoForDate()}
          </>
        );
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

  const handleNextOrComplete = () => {
    if (sidebarContent === "장소") {
      // 장소 선택이 마지막 단계이므로 여기서는 계획 생성 완료 로직
      navigate("/travelplanedit"); // 여기로 이동
    } else {
      // 나머지 로직은 기존과 동일
      const currentIndex = sidebarOptions.indexOf(sidebarContent);
      if (currentIndex < sidebarOptions.length - 1) {
        setSidebarContent(sidebarOptions[currentIndex + 1]);
      }
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

        <button onClick={handlePrevious}>이전</button>
        {/* "다음" 버튼을 조건부로 "계획생성완료" 버튼으로 변경 */}
        {sidebarContent === "장소" ? (
          <button onClick={handleNextOrComplete}>계획생성완료</button>
        ) : (
          <button onClick={handleNextOrComplete}>다음</button>
        )}
      </SidebarL>

      <Map />
    </div>
  );
};

export default Trvlpage;
