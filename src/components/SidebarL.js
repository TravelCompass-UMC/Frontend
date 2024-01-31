import React, { useEffect, useRef, useState, useCallback } from "react";
import "../styles/sidebarL.css";

const SidebarL = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(true); // 항상 열린 상태로 시작
  const [xPosition, setX] = useState(0); // 초기 xPosition 값 0으로 설정하여 열린 상태로 시작
  const side = useRef();

  const toggleMenu = () => {
    setOpen(!isOpen); // 상태를 토글하는 것으로 변경
  };

  const handleClose = useCallback((e) => {
    if (isOpen && !side.current.contains(e.target)) {
      setX(-width);
      setOpen(false);
    }
  }, [isOpen, width]); // 의존성 배열에 isOpen과 width 추가

  useEffect(() => {
    setOpen(true); // 항상 열린 상태로 설정
    setX(0); // 초기 xPosition 값 0으로 설정하여 열린 상태로 시작

    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [handleClose]); // handleClose 함수를 의존성 배열에 추가

  // isOpen 상태에 따라 xPosition 값 설정
  useEffect(() => {
    setX(isOpen ? 0 : -width);
  }, [isOpen, width]);

  return (
    <div className="container">
      <div
        ref={side}
        className="sidebar"
        style={{
          transform: `translateX(${xPosition}px)`,
          width: `${width}px`,
        }}
      >
        <button
          onClick={toggleMenu}
          className="toggle-button"
          style={{
            transform: `translate(${width}px, 20px)`,
          }}
        >
          {isOpen ? "<" : ">"}
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default SidebarL;