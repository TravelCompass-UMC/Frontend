import React, { useEffect, useRef, useState } from "react";
import "../styles/sidebarL.css";

const SidebarL = ({ width = 280, isOpen: externalIsOpen, children }) => {
  const [isOpen, setOpen] = useState(externalIsOpen);
  const [xPosition, setX] = useState(isOpen ? 0 : width);
  const [scrollPosition, setScrollPosition] = useState(0);
  const side = useRef();

  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(width);
      setOpen(false);
    }
  };

  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      setX(width);
      setOpen(false);
    }
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    setOpen(externalIsOpen);
    setX(externalIsOpen ? 0 : width);
  }, [externalIsOpen]);

  useEffect(() => {
    window.addEventListener("click", handleClose);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClose);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className={"container"}>
      <div
        ref={side}
        className={"sidebar"}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${-xPosition}px) translateY(${-scrollPosition}px)`, // Adjust the transform property
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className={"sidebarLbutton"}
          style={{ left: `${width}px` }}
        >
          {isOpen ? <span>X</span> : <span>&#9776;</span>}
        </button>

        <div className={"content"}>{children}</div>

        {/* Scrollbar */}
        <div
          className={"scrollbar"}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "12px",
            height: "10%",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "100%",
              backgroundColor: "#2196F3",
              borderRadius: "5px",
              transform: `translateY(${(scrollPosition * 100) / 1000}%)`, // Adjust the scrollbar position based on scroll
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarL;
