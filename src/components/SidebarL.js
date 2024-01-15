import React, { useEffect, useRef, useState } from "react";
import "../styles/sidebarL.css";

const SidebarL = ({ width = 280, isOpen: externalIsOpen, children }) => {
  const [isOpen, setOpen] = useState(externalIsOpen);
  const [xPosition, setX] = useState(isOpen ? 0 : width);
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

  useEffect(() => {
    setOpen(externalIsOpen);
    setX(externalIsOpen ? 0 : width);
  }, [externalIsOpen]);

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
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

