import React, { useEffect, useRef, useState } from "react";
import "../styles/sidebarL.css";

const SidebarL = ({ width = 280, isOpen: externalIsOpen, children }) => {
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
    setOpen(externalIsOpen);
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
            transform: isOpen
              ? `translate(${width}px, 20px)`
              : `translate(${width - 20}px, 20px)`,
          }}
        >
          {isOpen ? (
            // SVG for close icon when sidebar is open
            <svg
              width="3"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
                fill="#1C1B1F"
              />
            </svg>
          ) : (
            // SVG for open icon (close icon rotated 180 degrees)
            <svg
              width=""
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
                fill="#1C1B1F"
              />
            </svg>
          )}
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default SidebarL;
