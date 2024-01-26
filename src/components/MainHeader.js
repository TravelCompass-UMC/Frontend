import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "../styles/MainHeader.module.css";
import Modal from "./lginModal";
import Mainlogo from "../assets/images/logo_no_letter.svg";
const MainHeader = () => {
  // 모달 열기/닫기 상태를 관리하는 상태 변수와 함수를 선언합니다.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달을 열고 닫는 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.logobox}>
        <Link to="/" className={classes.logo}>
          <img src={Mainlogo} />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/searchplace">
              장소 검색
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/searchdiary">
              다른 사람의 여행일지
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/travelplandes">
              여행계획 설계
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/mypage">
              마이페이지
            </NavLink>
          </li>
          <li>
            {/* 로그인 버튼을 클릭하면 모달 열기 함수를 호출합니다. */}
            <button onClick={openModal}>로그인</button>
          </li>
        </ul>
      </nav>
      {/* 모달 컴포넌트를 사용하여 모달을 렌더링합니다. */}
      <Modal
        open={isModalOpen}
        close={closeModal}
        // 모달 버튼 클릭 시 모달 닫기
      >
        {/* 모달 내용 */}
        {/* 여기에 로그인 폼 또는 내용을 추가할 수 있습니다. */}
      </Modal>
    </header>
  );
};

export default MainHeader;
