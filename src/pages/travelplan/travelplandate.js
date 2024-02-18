import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/travelplan/travelplandate.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale"; // 변경된 부분
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { format } from "date-fns";
import Button from "../../components/common_components/common_button";

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
    <div className={styles.totalcontainer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.dateTitle}>여행 기간을 선택해주세요. </span>
          <span className={styles.dateTitle1}>
            여행 기간은 최대 7일까지 선택 가능합니다.
          </span>
        </div>
        <div className={styles.calenderContainer}>
          <div>
            {/* <h2>여행 시작일:</h2> */}
            <DatePicker
              className={`${styles["custom-datepicker"]} ${styles["large-calendar1"]}`}
              calendarClassName="custom-calendar"
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "50px, 0px",
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
              nextMonthButtonLabel=">"
              previousMonthButtonLabel="<"
            />
          </div>
          <div>
            <DatePicker
              className={`${styles["custom-datepicker"]} ${styles["large-calendar1"]}`}
              calendarClassName="custom-calendar"
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: "500px, 500px",
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
              nextMonthButtonLabel=">"
              previousMonthButtonLabel="<"
            />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button text="이전" onClick={handlePre} />
          <Button text="선택 완료" onClick={openModal} />
        </div>
      </div>

      <Modal
        className={styles.modalContent}
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
