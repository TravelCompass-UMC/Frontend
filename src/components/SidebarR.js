//SidebarR.js
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/sidebar.module.css";

const SidebarR = ({ width = 450, children }) => {
  const [isOpen, setOpen] = useState(true); // 초기값을 true로 변경
  const [xPosition, setX] = useState(0); // 초기값을 0으로 변경
  const side = useRef();

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  const topOffset = 62.5; // 상단바 높이

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${-xPosition}px) translateY(${topOffset}px)`, // 아래로 이동
        }}
      >
        <div className={styles.buttonContainer}>
          <button onClick={() => toggleMenu()} className={styles.button}>
            {isOpen ? <span>X</span> : <span>&#9776;</span>}
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarR;

