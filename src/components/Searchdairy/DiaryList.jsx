import React, { useState } from "react";
import Diary from "./Diary";
import VectorImage from "../../assets/images/Pages/Vector (1).png"; // 이미지를 import
import styles1 from "../../styles/searchdiary/diarylist.module.css";
import { EndSection } from "../../pages/mapages/MyPage";
import sort from "../../styles/searchdiary/sort.module.css";
import contents from "../../tempdata/searchdiary.js";

// const contents = [
//   // 데이터를 별도의 객체와 분리
//   {
//     place: "제주도1",
//     hashtag: ["가족 여행"],
//   },
//   {
//     place: "울릉도2",
//     hashtag: ["추억 여행", "가족 여행"],
//   },
//   {
//     place: "제주도3",
//     hashtag: ["가족 여행"],
//   },
//   {
//     place: "울릉도4",
//     hashtag: ["추억 여행", "가족 여행"],
//   },

//   // 추가적인 데이터는 여기에 계속 추가
// ];

function DiaryList(props) {
  const itemsPerRow = 3; // Number of diaries per row
  const rowsPerPage = 3; // Number of rows per page
  const itemsPerPage = itemsPerRow * rowsPerPage; // Total diaries per page

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(contents.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contents.slice(indexOfFirstItem, indexOfLastItem);

  const [sortOrder, setSortOrder] = useState("recom"); // 초기 정렬 상태를 '좋아요순'으로 설정
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // 정렬 방식에 따른 제목 결정
  const dropdownTitle = () => {
    if (sortOrder === "recom") return "추천순";
    else if (sortOrder === "look") return "조회많은순";
    else if (sortOrder === "newly") return "최신순";
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  //정렬

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "20%",
          marginTop: "20px",
          marginLeft: "10%",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <img
            src={VectorImage}
            style={{
              position: "relative",
            }}
          />

          <span className={styles1.searchText}> 계획 둘러보기 </span>
          <span className={sort.sortdropdown}>
            <button onClick={toggleDropdown} className={sort.mypagesortbutton}>
              {dropdownTitle()}
            </button>
            {showDropdown && (
              <div className={sort.sortoptions}>
                <button
                  onClick={() => {
                    setSortOrder("recom");
                    setShowDropdown(false);
                  }}
                  className={sort.sortoption1}
                >
                  추천순
                </button>
                <button
                  onClick={() => {
                    setSortOrder("look");
                    setShowDropdown(false);
                  }}
                  className={sort.sortoption2}
                >
                  조회많은순
                </button>
                <button
                  onClick={() => {
                    setSortOrder("newly");
                    setShowDropdown(false);
                  }}
                  className={sort.sortoption2}
                >
                  최신순
                </button>
              </div>
            )}
          </span>
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <table>
            {Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
              <tr key={rowIndex} style={{ display: "flex", gap: "20px" }}>
                {currentItems
                  .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                  .map((place, index) => (
                    <td>
                      <Diary
                        key={index}
                        place={place.place}
                        hashtag={place.hashtag}
                      />
                    </td>
                  ))}
              </tr>
            ))}
          </table>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            className={styles1.prebutton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전 페이지
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              className={styles1.pagenum}
              key={index}
              onClick={() => handlePageChange(index + 1)}
              style={{
                margin: "0 5px",
                fontWeight: index + 1 === currentPage ? "bold" : "normal",
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={styles1.nextbutton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음 페이지
          </button>
        </div>
      </div>
      <EndSection />
    </>
  );
}

export default DiaryList;
