import React, { useState } from "react";

const styles = {
  titleText: {
    color: "#191B24",
    fontSize: 18,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
    width: "200px",
    display: "inline-block",
  },
  optionText: {
    color: "#BFC4D8",
    fontSize: 15,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  optionButton: {
    width: "100px",
    height: "40px",
    borderRadius: 8,
    border: "none",
  },
  customBox: {
    width: '300px', height: '60px', background: '#EBEDF8', borderRadius: 8, border: '1px #BFC4D8 solid'

  },
};

const SearchComponent = () => {
  const [selectedDuration, setSelectedDuration] = useState(""); // 선택된 일정
  const [selectedLocation, setSelectedLocation] = useState(""); // 선택된 여행지
  const [selectedTransportation, setSelectedTransportation] = useState(""); // 선택된 교통수단
  const [listItems, setListItems] = useState([]); // 검색된 목록
  const [customDuration, setCustomDuration] = useState(""); // 직접 입력하는 칸의 값
  const [customLocation, setCustomLocation] = useState(""); // 직접 입력하는 칸의 값

  const handleDurationButtonClick = (duration) => {
    //일정
    if (duration === "allDuration") {
      setSelectedDuration("allDuration");
    } else if (duration === "oneday") {
      setSelectedDuration(selectedDuration === "oneday" ? "" : "oneday");
    } else if (duration === "twodays") {
      setSelectedDuration(selectedDuration === "twodays" ? "" : "twodays");
    }
  };

  const handleLocationButtonClick = (location) => {
    //여행지
    if (location === "allLocation") {
      setSelectedLocation(selectedLocation === "allLocation" ? "" : "allLocation");
    } else if (location === "domestic") {
      setSelectedLocation(selectedLocation === "domestic" ? "" : "domestic");
    } else if (location === "foreign") {
      setSelectedLocation(selectedLocation === "foreign" ? "" : "foreign");
    }
  };

  const handleTransportationButtonClick = (transportation) => {
    //교통수단
    if (transportation === "allTransportation") {
      selectedTransportation === "public" ? "" : "public"
    } else if (transportation === "public") {
      setSelectedTransportation(
        selectedTransportation === "public" ? "" : "public"
      );
    } else if (transportation === "private") {
      setSelectedTransportation(
        selectedTransportation === "private" ? "" : "private"
      );
    }
  };

  const handleApplyFilters = () => {
    // 여기에서 검색된 결과를 생성하거나 다른 작업을 수행할 수 있습니다.
    // 실제로는 백엔드와 통신하여 검색 결과를 가져올 것입니다.
    const filteredList = setListItems(filteredList); // ... 어떤 방식으로든 검색된 목록을 가져오기
  };

  const handleResetFilters = () => {
    setSelectedDuration("");
    setSelectedLocation("");
    setSelectedTransportation("");

    setCustomDuration("");
    setCustomLocation("");

    setListItems([]);
  };

  const handleCustomDurationChange = (e) => {
    // 직접 입력하는 칸의 값 변경
    setCustomDuration(e.target.value);
    // 직접 입력 시 다른 일정 옵션들 초기화
    setSelectedDuration("");
  };

  const handleCustomLocationChange = (ee) => {
    // 직접 입력하는 칸의 값 변경
    setCustomLocation(ee.target.value);
    // 직접 입력 시 다른 일정 옵션들 초기화
    setSelectedDuration("");
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <span style={styles.titleText}>일정</span>
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedDuration === "allDuration" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleDurationButtonClick("allDuration")}
          >
            <div
              style={{
                ...styles.optionText,
                color:
                  selectedDuration === "allDuration" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              전체 선택
            </div>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            style={{
              ...styles.optionButton,
              background: selectedDuration === "oneday" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleDurationButtonClick("oneday")}
          >
            <div
              style={{
                ...styles.optionText,
                color: selectedDuration === "oneday" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              당일치기
            </div>
          </button>
          &nbsp;&nbsp;
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedDuration === "twodays" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleDurationButtonClick("twodays")}
          >
            <div
              style={{
                ...styles.optionText,
                color: selectedDuration === "twodays" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              2일 이상
            </div>
          </button>
          <span style={styles.customBox}>
          <input
            type="text"
            placeholder="일 동안"
            value={customDuration}
            onChange={handleCustomDurationChange}
          />
          </span>
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <span style={styles.titleText}>여행지</span>
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedLocation === "allLocation" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleLocationButtonClick("allLocation")}
          >
            <div
              style={{
                ...styles.optionText,
                color:
                  selectedLocation === "allLocation" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              전체 선택
            </div>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedLocation === "domestic" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleLocationButtonClick("domestic")}
          >
            <div
              style={{
                ...styles.optionText,
                color: selectedLocation === "domestic" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              국내
            </div>
          </button>
          &nbsp;&nbsp;
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedLocation === "foreign" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleLocationButtonClick("foreign")}
          >
            <div
              style={{
                ...styles.optionText,
                color: selectedLocation === "foreign" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              국외
            </div>
          </button>
          {selectedLocation === "custom" && (
            <input
              type="text"
              placeholder="일 동안"
              value={customLocation}
              onChange={handleCustomLocationChange}
            />
          )}
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <span style={styles.titleText}>교통수단</span>
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedTransportation === "allTransportation"
                  ? "#8270FF"
                  : "#EBEDF8",
            }}
            onClick={() => handleTransportationButtonClick("allTransportation")}
          >
            <div
              style={{
                ...styles.optionText,
                color:
                  selectedTransportation === "allTransportation"
                    ? "#FFFFFF"
                    : "#BFC4D8",
              }}
            >
              전체 선택
            </div>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedTransportation === "public" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleTransportationButtonClick("public")}
          >
            <div
              style={{
                ...styles.optionText,
                color:
                  selectedTransportation === "public" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              대중교통
            </div>
          </button>
          &nbsp;&nbsp;
          <button
            style={{
              ...styles.optionButton,
              background:
                selectedTransportation === "private" ? "#8270FF" : "#EBEDF8",
            }}
            onClick={() => handleTransportationButtonClick("private")}
          >
            <div
              style={{
                ...styles.optionText,
                color:
                  selectedTransportation === "private" ? "#FFFFFF" : "#BFC4D8",
              }}
            >
              자가용
            </div>
          </button>
        </label>
      </div>

      <div>
        <button onClick={handleResetFilters}>조건 초기화</button>
        <button onClick={handleApplyFilters}>조건 적용하기</button>

        {/* 여기에서 조건에 따라 생성된 목록을 표시합니다. */}
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchComponent;
