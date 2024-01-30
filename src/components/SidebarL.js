import React, { useEffect, useRef, useState } from "react";
import "../styles/sidebarL.css";

const SidebarL = ({ width = 280, isOpen: externalIsOpen = true, children }) => {
  const [isOpen, setOpen] = useState(externalIsOpen);
  const [xPosition, setX] = useState(isOpen ? 0 : -width);
  const side = useRef();

  const toggleMenu = () => {
    setX(isOpen ? -width : 0);
    setOpen(!isOpen);
  };

  const handleClose = (e) => {
    if (isOpen && !side.current.contains(e.target)) {
      setX(-width);
      setOpen(false);
    }
  };

  useEffect(() => {
    setOpen(externalIsOpen); // 외부에서 전달된 isOpen 값으로 사이드바 상태 설정
    setX(externalIsOpen ? 0 : -width);
  }, [externalIsOpen, width]);

  useEffect(() => {
    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [isOpen]);

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
