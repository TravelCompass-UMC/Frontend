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


  const handlePre = () => {
    navigate("/TravelPlandes", {
      state: { destination: startDate, endDate },
    });
  };

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
    navigate("/travelplandetail", { state: { startDate, endDate } });
  };

  const formattedStartDate = format(startDate, "yyyy년 MM월 dd일");
  const formattedEndDate = format(endDate, "yyyy년 MM월 dd일");


  return (
    <div>
      <div style={{ marginTop: "150px" }}>
        <div>
          <span className="dateTitle">여행 기간을 선택해주세요.</span>
          <span className="dateTitle1">여행 기간은 최대 00일까지 선택 가능합니다.</span>
        </div>
        <div style={{ marginTop: "50px" }}>
          <span style={{ marginLeft: "500px", marginTop: "100px" }}>
            {/* <h2>여행 시작일:</h2> */}
            <DatePicker
              className="custom-datepicker large-calendar1" // Add a custom class for styling
              calendarClassName="custom-calendar1" // Add a custom class for the calendar
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "50px, 0px", // Adjust the offset as needed
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: "viewport",
                },
                flip: {
                  enabled: true,
                },
              }}
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              minDate={new Date()}
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              inline
            />
          </span>

          <span style={{ marginLeft: "200px", marginTop: "100px" }}>
            {/* <h2>여행 종료일:</h2> */}
            <DatePicker
              className="custom-datepicker large-calendar" // Add a custom class for styling
              calendarClassName="custom-calendar" // Add a custom class for the calendar
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "500px, 500px", // Adjust the offset as needed
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: "viewport",
                },
                flip: {
                  enabled: true,
                },
              }}
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              inline
            />
          </span>
        </div>
      </div>
      {/* 이전 버튼 */}
      <button onClick={handlePre} className="pre_button" >
        이전
      </button>

      {/* 다음 버튼 */}
      <button type="submit" onClick={openModal} className="next_button">
        선택완료
      </button>
      <Modal
        className="modalContent"
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
