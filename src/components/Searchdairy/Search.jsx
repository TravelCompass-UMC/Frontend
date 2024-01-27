import React, { useState } from "react";
import styles from "../../styles/search.module.css";

// const styles = {
//   titleText: {
//     color: "#191B24",
//     fontSize: 18,
//     fontFamily: "SUIT Variable",
//     fontWeight: "700",
//     wordWrap: "break-word",
//     width: "200px",
//     display: "inline-block",
//   },
//   optionText: {
//     color: "#BFC4D8",
//     fontSize: 15,
//     fontFamily: "SUIT Variable",
//     fontWeight: "700",
//     wordWrap: "break-word",
//   },
//   optionButton: {
//     width: "100px",
//     height: "40px",
//     borderRadius: 8,
//     border: "none",
//   },
//   customBox: {
//     width: '300px', height: '60px', background: '#EBEDF8', borderRadius: 8, border: '1px #BFC4D8 solid'

//   },
// };

const SearchComponent = () => {
  const [selectedDuration, setSelectedDuration] = useState(""); // 선택된 일정
  const [selectedLocation, setSelectedLocation] = useState(""); // 선택된 여행지
  const [selectedTransportation, setSelectedTransportation] = useState(""); // 선택된 교통수단
  const [listItems, setListItems] = useState([]); // 검색된 목록
  const [customDuration, setCustomDuration] = useState(""); // 직접 입력하는 칸의 값
  const [customLocation, setCustomLocation] = useState(""); // 직접 입력하는 칸의 값
  const [customHashtags, setCustomHashtags] = useState([]);
  const [customHashtag, setCustomHashtag] = useState(""); // 직접 입력하는 칸의 값

  const handleDurationButtonClick = (duration) => {
    //일정
    if (duration === "allDuration") {
      setSelectedDuration(
        selectedDuration === "allDuration" ? "" : "allDuration"
      );
    } else if (duration === "oneday") {
      setSelectedDuration(selectedDuration === "oneday" ? "" : "oneday");
    } else if (duration === "twodays") {
      setSelectedDuration(selectedDuration === "twodays" ? "" : "twodays");
    }
  };

  const handleLocationButtonClick = (location) => {
    //여행지
    if (location === "allLocation") {
      setSelectedLocation(
        selectedLocation === "allLocation" ? "" : "allLocation"
      );
    } else if (location === "domestic") {
      setSelectedLocation(selectedLocation === "domestic" ? "" : "domestic");
    } else if (location === "foreign") {
      setSelectedLocation(selectedLocation === "foreign" ? "" : "foreign");
    }
  };

  const handleTransportationButtonClick = (transportation) => {
    //교통수단
    if (transportation === "allTransportation") {
      setSelectedTransportation(
        selectedTransportation === "allTransportation"
          ? ""
          : "allTransportation"
      );
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
    setCustomHashtags([]);

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

  const handleCustomHashtagChange = (e) => {
    setCustomHashtag(e.target.value);
  };

  const handleAddHashtag = () => {
    if (customHashtags.length < 5 && customHashtag.trim() !== "") {
      setCustomHashtags((prevHashtags) => [...prevHashtags, customHashtag]);
      setCustomHashtag(""); // Clear the input after adding the hashtag
    }
  };

  const handleDeleteHashtag = (index) => {
    // 클릭된 인덱스에 해당하는 해시태그를 삭제합니다.
    const updatedHashtags = customHashtags.filter((_, i) => i !== index);
    setCustomHashtags(updatedHashtags);
  };

  return (
    <div style={{ margin: "center" }}>
      <div style={{ width: "100%", marginBottom: "20px" }}>
        {/* <label style={{ width: "100%" }}> */}
        <span className={styles.titleText}>일정</span>
        <button
          className={styles.optionButton}
          style={{
            background:
              selectedDuration === "allDuration" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleDurationButtonClick("allDuration")}
        >
          <div
            className={styles.optionText}
            style={{
              color: selectedDuration === "allDuration" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            전체 선택
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className={styles.optionButton}
          style={{
            background: selectedDuration === "oneday" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleDurationButtonClick("oneday")}
        >
          <div
            className={styles.optionText}
            style={{
              color: selectedDuration === "oneday" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            당일치기
          </div>
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.optionButton}
          style={{
            background: selectedDuration === "twodays" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleDurationButtonClick("twodays")}
        >
          <div
            className={styles.optionText}
            style={{
              color: selectedDuration === "twodays" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            2일 이상
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.customBox}>
          <input
            className={styles.customText}
            type="text"
            placeholder="직접 입력"
            value={customDuration}
            onChange={handleCustomDurationChange}
          />
          <a className={styles.customTextFix}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일 동안
          </a>
        </span>
        {/* </label> */}
      </div>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        {/* <label> */}
        <span className={styles.titleText}>여행지</span>
        <button
          className={styles.optionButton}
          style={{
            background:
              selectedLocation === "allLocation" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleLocationButtonClick("allLocation")}
        >
          <div
            className={styles.optionText}
            style={{
              color: selectedLocation === "allLocation" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            전체 선택
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          className={styles.optionButton}
          style={{
            background: selectedLocation === "domestic" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleLocationButtonClick("domestic")}
        >
          <div
            className={styles.optionText}
            style={{
              color: selectedLocation === "domestic" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            국내
          </div>
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.optionButton}
          style={{
            background: selectedLocation === "foreign" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleLocationButtonClick("foreign")}
        >
          <div
            className={styles.optionText}
            style={{
              color: selectedLocation === "foreign" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            국외
          </div>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.customBox}>
          <select
            className={styles.customText}
            id="location"
            value={customLocation}
            onChange={handleCustomLocationChange}
            name="location"
          >
            {selectedLocation === "domestic" && (
              <>
                <option value="seoul">서울</option>
                <option value="gyeongju">경주</option>
                <option value="busan">부산</option>
                <option value="incheon">인천</option>
                <option value="sokcho">속초</option>
                <option value="gangneung">강릉</option>
                <option value="jeju">제주도</option>
              </>
            )}
          </select>
        </span>
        {/* </label> */}
      </div>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        {/* <label> */}
        <span className={styles.titleText}>교통수단</span>
        <button
          className={styles.optionButton}
          style={{
            background:
              selectedTransportation === "allTransportation"
                ? "#8270FF"
                : "#EBEDF8",
          }}
          onClick={() => handleTransportationButtonClick("allTransportation")}
        >
          <div
            className={styles.optionText}
            style={{
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
          className={styles.optionButton}
          style={{
            background:
              selectedTransportation === "public" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleTransportationButtonClick("public")}
        >
          <div
            className={styles.optionText}
            style={{
              color:
                selectedTransportation === "public" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            대중교통
          </div>
        </button>
        &nbsp;&nbsp;
        <button
          className={styles.optionButton}
          style={{
            background:
              selectedTransportation === "private" ? "#8270FF" : "#EBEDF8",
          }}
          onClick={() => handleTransportationButtonClick("private")}
        >
          <div
            className={styles.optionText}
            style={{
              color:
                selectedTransportation === "private" ? "#FFFFFF" : "#BFC4D8",
            }}
          >
            자가용
          </div>
        </button>
        {/* </label> */}
      </div>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        {/* <label> */}
        <span className={styles.titleText}>해시태그 검색</span>
        <span className={styles.customHashtagBox}>
          <div>
            <input
              className={styles.customHashtagText}
              type="text"
              placeholder="  #원하는 여행 조건을 검색해보세요.(최대 5개)"
              value={customHashtag}
              onChange={handleCustomHashtagChange}
            />
            &nbsp;&nbsp;&nbsp;
            <button className={styles.optionButton} onClick={handleAddHashtag}>
              추가
            </button>
          </div>
          <div>
            {customHashtags.length > 0 && (
              <div style={{ marginLeft: "20px", marginTop: "16px" }}>
                {/* <span className={styles.titleText}>입력된 해시태그</span> */}

                {customHashtags.map((hashtag, index) => (
                  <span key={index} className={styles.hashtagBox}>
                    &nbsp;&nbsp;# {hashtag}&nbsp;
                    <button
                      className={styles.hashtagdelete}
                      onClick={() => handleDeleteHashtag(index)}
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </span>
        {/* </label> */}
      </div>

      <div>
        <button className={styles.optionButton1} onClick={handleResetFilters}>
          조건 초기화
        </button>
        <button className={styles.optionButton2} onClick={handleApplyFilters}>
          조건 적용하기
        </button>

        {/* 여기에서 조건에 따라 생성된 목록을 표시합니다. */}
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
