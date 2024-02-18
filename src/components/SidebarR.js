//SidebarR.js
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/sidebar.module.css";

const SidebarR = ({ width = 320, height = 980, children, isOpen: externalIsOpen,   toggleSidebar,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const xPosition = isOpen ? 0 : -width+30;
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
          transform: `translateX(${-xPosition}px)` }}
      >
        <div className={styles.buttonContainer}>
          <button onClick={handleToggle} className={styles.button}>
            {isOpen ? ">" : "<"}
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
  );
};

export default SidebarR;

