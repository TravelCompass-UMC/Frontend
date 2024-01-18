import React, { useState } from "react";
import Diary from "./Diary";

const contents = [
  // 데이터를 별도의 객체와 분리
  {
    place: "제주도",
    hashtag: ["가족 여행"],
  },
  {
    place: "울릉도",
    hashtag: ["추억 여행", "가족 여행"],
  },
  // 추가적인 데이터는 여기에 계속 추가
];

function DiaryList(props) {
  const itemsPerPage = 9; // 페이지당 표시될 Diary 수
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
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {currentItems.map((place) => (
          <Diary
            key={place.place}
            place={place.place}
            hashtag={place.hashtag}
          />
        ))}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
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
            style={{ margin: "0 5px" }}
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
  );
}

export default DiaryList;
