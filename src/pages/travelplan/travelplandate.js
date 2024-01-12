import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/travelplanpage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale"; // 변경된 부분
import { Link } from "react-router-dom";

import Modal from "../../components/Modal";
import { format } from "date-fns";

const TrvlPlan = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToDetail = () => {
    closeModal();
    navigate("/travelplandetail"); // 페이지 이동
  };

  const formattedStartDate = format(startDate, "yyyy년 MM월 dd일");
  const formattedEndDate = format(endDate, "yyyy년 MM월 dd일");

  return (
    <div>
      <div>
        <h1>여행 기간</h1>
        <p>기간을 선택해주세요</p>
        <div>
          <h2>여행 시작일:</h2>
          <DatePicker
            className="datepicker"
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            minDate={new Date()}
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <div>
          <h2>여행 종료일:</h2>
          <DatePicker
            className="datepicker"
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
      <button onClick={openModal}>계획 만들기</button>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="여행 계획"
        buttonText="지금 만들기"
        onButtonClick={goToDetail}
      >
        <div>여행 시작일: {formattedStartDate}</div>
        <div>여행 종료일: {formattedEndDate}</div>
      </Modal>
    </div>
  );
};

export default TrvlPlan;
