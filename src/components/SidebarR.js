//SidebarR.js
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/sidebar.module.css";
import arrwoR from "../assets/images/Home/arrow_right.svg";
import arrowL from "../assets/images/Home/arrow_left.svg";

const SidebarR = ({ width = 320, height = 980, children, isOpen: externalIsOpen,   toggleSidebar,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const xPosition = isOpen ? 0 : -width / 3;
  const side = useRef();

  // button 클릭 시 토글
  const handleToggle = () => {
    if (toggleSidebar) {
      toggleSidebar();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  useEffect(() => {
    if (externalIsOpen !== undefined && externalIsOpen !== internalIsOpen) {
      setInternalIsOpen(externalIsOpen);
    }
  }, [externalIsOpen, internalIsOpen]);

  return (
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        transform: `translateX(${-xPosition}px)`
      }}
    >
      <div className={styles.buttonContainer}>
        <button onClick={handleToggle} className={styles.button}>
          {isOpen ? <img src={arrwoR} alt="Close" /> : <img src={arrowL} alt="Open" />}
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SidebarR;

