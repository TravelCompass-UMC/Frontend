import React, { useState } from "react";
import Diary from "./Diary";

const contents = [
  // 데이터를 별도의 객체와 분리
  {
    place: "제주도1",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도2",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도3",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도4",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도5",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도6",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도7",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도8",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도9",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도10",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도11",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도12",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도1",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도2",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도3",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도4",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도5",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도6",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도7",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도8",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도9",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도10",
    hashtag: ["추억 여행", "가족 여행"],
  },
  {
    place: "제주도11",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도12",
    hashtag: ["추억 여행", "가족 여행"],
  },
  // 추가적인 데이터는 여기에 계속 추가
];

const styles = {
  contextBox: {
    color: "#191B24",
    fontSize: 22,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
  },
  imageTitle: {
    width: "50px",
    height: "30px",
    opacity: 0.6,
    border: "6px #8270FF solid",
  },
};

function DiaryList(props) {
  const itemsPerRow = 3; // Number of diaries per row
  const rowsPerPage = 3; // Number of rows per page
  const itemsPerPage = itemsPerRow * rowsPerPage; // Total diaries per page

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(contents.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contents.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div style={styles.contextBox}>
        {/* <div style={styles.imageTitle}></div>계획 둘러보기 */}
        <img
          style={styles.imageTitle}
          src="../../assets/images/Pages/Vetor.png"
          alt=""
        />
        계획 둘러보기
      </div>
      <div>
        {Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            {currentItems
              .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
              .map((place, index) => (
                <Diary
                  key={index}
                  place={place.place}
                  hashtag={place.hashtag}
                />
              ))}
          </div>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전 페이지
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
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
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음 페이지
          </button>
        </div>
      </div>
    </>
  );
}

export default DiaryList;
