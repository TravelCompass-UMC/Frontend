//미완성 코드
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/sidebarL.css";

const SidebarL = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
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
  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      setOpen(false);
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
      <button onClick={() => toggleMenu()} className={styles.button}>
        {isOpen ? <span>X</span> : <span>&#9776;</span>}
      </button>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${xPosition}px)`,
        }}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarL;
