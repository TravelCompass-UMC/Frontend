import React, { useEffect, useRef, useState } from "react";
import "../styles/sidebarL.css";

const SidebarL = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(width);
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

  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      await setX(width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={"container"}>
      <div
        ref={side}
        className={"sidebar"}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translateX(${-xPosition}px)`,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className={"button"}
          style={{ left: `${width}px` }}
        >
          {isOpen ? <span>X</span> : <span>&#9776;</span>}
        </button>

        <div className={"content"}>{children}</div>
      </div>
    </div>
  );
};

export default SidebarL;
