import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarL from "../../components/SidebarL";
import Map from "../../components/Map";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { eachDayOfInterval, format } from "date-fns";
import styles from "../../styles/travelplan/travelplan_detail.module.css";
import Searching from "../../components/Search";
import AccommodationsData from "../../tempdata/accommodationdata";
import PlaceData from "../../tempdata/temp_placedata";
import Accommodation from "./accommodationcomponent";
import PlaceComponent from "./placecomponent";
import PlaceDateComponent from "./date_place_component";
import { subDays } from "date-fns";
import ClockIcon from "../../assets/images/clock.svg";
import Googlesearch from "./googlesearch_component";
import Button from "../../components/common_components/common_button";

import PlaceDetail from "../../components/searchPlace/PlaceDetail"; // A component for place details
import PlaceSelection from "../../components/planedit/SearchRecommendations";

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
  const [activeDate, setActiveDate] = useState("");
  const [placeInfos, setPlaceInfos] = useState([]); // 추가된 상태
  const sidebarWidth = sidebarContent === "일정" ? 900 : 1100;

  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [places, setPlaces] = useState([]); // State to store search results and recommendations
  const [selectedPlace, setSelectedPlace] = useState(null); // 선택된 장소 상태를 관리합니다.
  const [showPlaceSelection, setShowPlaceSelection] = useState(false); // 숙소 선택 상태를 관리합니다
  const [showPlaceSelectionForDate, setShowPlaceSelectionForDate] = useState(
    {}
  );

  const [mapLocation, setMapLocation] = useState({
    lat: 36.332586,
    lng: 128.105835,
  }); // Map center state
  const [zoomLevel, setZoomLevel] = useState(7.4); // Map zoom level state

  const [tempSelectedAccommodation, setTempSelectedAccommodation] =
    useState(null);

  const formattedStartDate = startDate
    ? format(new Date(startDate), "yyyy-MM-dd")
    : "";
  const formattedEndDate = endDate
    ? format(new Date(endDate), "yyyy-MM-dd")
    : "";

  useEffect(() => {
    const dates = eachDayOfInterval({ start: startDate, end: endDate });
    const newTimes = {};
    const initialShowPlaceSelectionForDate = {};
    dates.forEach((date) => {
      const formattedDate = format(date, "yyyy-MM-dd");
      initialShowPlaceSelectionForDate[formattedDate] = false;

      newTimes[formattedDate] = {
        startTime: new Date(date.setHours(9, 0, 0, 0)),
        endTime: new Date(date.setHours(18, 0, 0, 0)),
      };
    });
    setTimes(newTimes);
    setShowPlaceSelectionForDate(initialShowPlaceSelectionForDate);
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
  const handlePlaceSelect = (place) => {
    setSelectedPlace(place); // 선택된 장소 상태 업데이트
    setShowPlaceSelection(false); // 숙소 선택을 완료하면 숙소 선택 UI를 숨깁니다.
    setMapLocation({ lat: place.lat, lng: place.lng }); // 지도 중심 이동
    setZoomLevel(16); // 지도 확대
    // 선택된 장소의 상세 정보를 표시하는 로직이 필요한 경우 여기에 추가
  };
  const handlePlaceSelectionButtonClick = () => {
    setShowPlaceSelection(true); // 숙소 선택 UI를 보여줍니다.
  };

  // 날짜별로 선택된 숙소와 장소 정보를 렌더링하는 함수
  const renderSelectedInfoForDate = () => {
    if (!activeDate) return null; // activeDate가 유효하지 않으면 여기서 처리

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
        <div className={styles.HashWrap}>
          <div className={styles.HashWrapOuter}>
            {hashArr.map((tag, index) => (
              <div key={index} className={styles.HashWrapInner}>
                #{tag}
              </div>
            ))}
          </div>
          <input
            className={styles.HashInput}
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

  const handleSearch = (placeData) => {
    setPlaceInfos({
      name: placeData.name,
      photoReference: placeData.photoReference,
      address: placeData.address,
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the Google Places API
      const apiKey = "AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU";
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
          searchQuery
        )}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const results = await response.json();
      // Assume we're just interested in the first result
      const place = results.candidates[0];
      const newPlace = {
        name: place.name,
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
        photos: place.photos
          ? place.photos.map((photo) => photo.photo_reference)
          : [],
        vicinity: place.formatted_address || place.vicinity, // 주소 또는 위치 정보
      };

      // Update your state with the new place
      setPlaces([...places, newPlace]);
      setSelectedPlace(newPlace);
      setMapLocation({ lat: newPlace.lat, lng: newPlace.lng });
      setZoomLevel(16); // Zoom in to the selected place
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const renderPeopleCount = () => {
    return (
      <div className="people-count">
        <div>
          <label>성인: </label>
          <button
            className={styles.minus}
            onClick={() => handleAdultCount("minus")}
          >
            -
          </button>
          <span>{adultCount}</span>
          <button
            className={styles.plus}
            onClick={() => handleAdultCount("plus")}
          >
            +
          </button>
        </div>
        <div>
          <label>미성년자: </label>
          <button
            className={styles.minus}
            onClick={() => handleChildrenCount("minus")}
          >
            -
          </button>
          <span>{childrenCount}</span>
          <button
            className={styles.plus}
            onClick={() => handleChildrenCount("plus")}
          >
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
          <img src={accommodation.imageUrl} alt={accommodation.name} />
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
    setShowPlaceSelectionForDate((prevState) => ({
      ...prevState,
      [formattedDate]: true,
    }));
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
          <div className={styles.searchBar}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="검색할 장소를 입력하세요"
              className={styles.searchInput}
              style={{ width: "30%", height: "100%", border: "none" }}
            />
            <button
              onClick={handleSearchSubmit}
              className={styles.searchButton}
            ></button>
          </div>

          <PlaceSelection
            places={places}
            onRecommendationClick={(place) => {
              setSelectedPlace(place);
              setMapLocation({ lat: place.lat, lng: place.lng });
              setZoomLevel(18); // Zoom in to the selected place
              handlePlaceSelect(place);
            }}
            selectedPlace={selectedPlace}
          />
          {selectedPlace && <PlaceDetail place={selectedPlace} />}
        </div>
        {showPlaceSelection && (
          <PlaceSelection
            places={places}
            onRecommendationClick={(place) => {
              handlePlaceSelect(place);
            }}
            selectedPlace={selectedPlace}
          />
        )}

        {formattedDates.map((formattedDate, index) => (
          <div key={index} className="daily-accommodation-selection">
            <h3>{formattedDate}</h3>

            {showPlaceSelectionForDate[formattedDate] ? (
              <PlaceSelection
                places={places}
                onRecommendationClick={(place) => {
                  handlePlaceSelect(place);
                }}
                selectedPlace={selectedPlace}
              />
            ) : (
              <button
                onClick={() => handleSelectAccommodationForDate(formattedDate)}
              >
                숙소 선택 ({formattedDate})
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
            <div className={styles.informBox}>
              <div>
                <img src={ClockIcon} alt="Clock" />
              </div>

              <div className={styles.info}>
                첫날은 입력하신 시간부터 일정이 시작되고, 그 다음날부터는
                설정하신 숙소로부터 일정이 시작됩니다.
              </div>

              <div>
                <img src={ClockIcon} alt="Clock" />
              </div>
              <div>
                기본 설정은 오전 10시 ~ 오후 10시입니다. 한 장소는 2시간으로
                머물시간이 고정되어 편집 후 바꿀 수 있습니다.
              </div>
            </div>
            {dates.map((date) => {
              const formattedDate = format(date, "yyyy-MM-dd");
              const { startTime, endTime } = times[formattedDate] || {};
              return (
                <div key={formattedDate}>
                  <h3>{format(date, "MM.dd")}</h3>
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
            {/* <div>
              <Googlesearch onSearch={handleSearch} />
              {placeInfos && (
                <div className={styles.placeCard}>
                  <div className={styles.placeName}>{placeInfos.name}</div>
                  {placeInfos.photoReference && (
                    <img
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${placeInfos.photoReference}&key=AIzaSyBPG58Nk2zPjucy4apqdFTrUxZl0bGpddU`}
                      alt={placeInfos.name}
                      className={styles.placeImage}
                    />
                  )}
                  <p className={styles.placeLocation}>
                    위치: {placeInfos.address || "제공되지 않는 정보입니다."}
                  </p>
                </div>
              )}
            </div> */}
            {renderAccommodationSelection()}
          </div>
        );

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
    <div className={styles.totalComponent}>
      <SidebarL width={sidebarWidth} isOpen={true}>
        <div className={styles.sidebarLayout}>
          {/* 첫 번째 열: 버튼 및 컨트롤 */}
          <div className={styles.sidebarButtons}>
            <button
              className={
                sidebarContent === "일정"
                  ? styles.selectedBtn
                  : styles.commonBtn
              }
              onClick={() => setSidebarContent("일정")}
            >
              상세일정
            </button>
            <button
              className={
                sidebarContent === "숙소"
                  ? styles.selectedBtn
                  : styles.commonBtn
              }
              onClick={() => setSidebarContent("숙소")}
            >
              숙소선택
            </button>
            <button
              className={
                sidebarContent === "장소"
                  ? styles.selectedBtn
                  : styles.commonBtn
              }
              onClick={() => setSidebarContent("장소")}
            >
              장소선택
            </button>

            <div className={styles.controlButtons}>
              <button className={styles.prevBtn} onClick={handlePrevious}>
                이전
              </button>
              <button className={styles.nextBtn} onClick={handleNextOrComplete}>
                {sidebarContent === "장소" ? "계획생성완료" : "다음"}
              </button>
            </div>
          </div>

          {/* 두 번째 열: 선택된 섹션의 내용 */}
          <div className={styles.sidebarContent}>
            <div className={styles.sidebarTop}>
              <div className={styles.des}>{destination}</div>
              <div className={styles.date}>
                {formattedStartDate} ~ {formattedEndDate}
              </div>
            </div>
            {renderSidebarContent(
              sidebarContent,
              eachDayOfInterval({ start: startDate, end: endDate }),
              times,
              handleTimeChange,
              renderTransportationButtons,
              renderPeopleCount
            )}
          </div>
        </div>
      </SidebarL>
      <Map
        containerStyle={{ width: "100vw", height: "91vh" }}
        location={mapLocation}
        zoomLevel={zoomLevel}
        places={places} // Pass the places to the Map component
      />
    </div>
  );
};

export default Trvlpage;
