import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/sidebar.module.css";

const SidebarL = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(true); // 초기에 열린 상태로 설정
  const [xPosition, setX] = useState(0);
  const side = useRef();

  // 사이드바 토글 함수
  const toggleMenu = () => {
    setX((prevX) => (isOpen ? -width : 0));
    setOpen((prevOpen) => !prevOpen);
  };

  // 사이드바 닫기 함수
  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      toggleMenu(); // 닫기 버튼을 누르면 토글 함수를 호출하여 사이드바를 닫음
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      {isOpen && ( // isOpen이 true일 때만 버튼이 보이도록 설정
        <button onClick={toggleMenu} className={styles.hamburgerButton}>
          {isOpen ? <span>X</span> : <span>&#9776;</span>}
        </button>
      )}
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          left: `${xPosition}px`,
        }}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarL;
