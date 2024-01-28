//SidebarR.js
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/sidebar.module.css";

const SidebarR = ({ width = 800, children }) => {
  const [isOpen, setOpen] = useState(true); // 초기 상태에서 열린 상태로 설정
  const [xPosition, setX] = useState(0);
  const side = useRef();
  const closingWidth = 300;

  const toggleMenu = () => {
    if (isOpen) {
      setX(-width + closingWidth); // 사이드바를 닫는 버튼 클릭 시
    } else {
      setX(0); // 사이드바를 열어야 하는 버튼 클릭 시
    }
    setOpen(!isOpen);
  };

  const handleButtonClick = (e) => {
    toggleMenu();
    e.stopPropagation();
  };

  const handleClose = (e) => {
    if (isOpen && e.target.tagName !== "BUTTON") {
      e.stopPropagation();
      return;
    }
  };
  
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClose);
    } else {
      window.removeEventListener("click", handleClose);
    }
  }, [isOpen]);
  
  const topOffset = 54;

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "80%",
          transform: `translateX(${-xPosition}px) translateY(${topOffset}px)`,
        }}
      >
        <button onClick={handleButtonClick} className={styles.button}>
          {isOpen ? <span>X</span> : <span>&#9776;</span>} {/* 열기와 닫기 아이콘을 반대로 표시 */}
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarR;
