import React, { useRef, useState, useEffect } from "react";
import "../styles/sidebarL.css";

const SidebarL = ({
  width = 280,
  children,
  isOpen: externalIsOpen,
  toggleSidebar,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const xPosition = isOpen ? 0 : -width;
  const side = useRef();

  // External toggle function is not provided, use internal state
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
    <div className="container">
      <div
        ref={side}
        className="sidebar"
        style={{ transform: `translateX(${xPosition}px)`, width: `${width}px` }}
      >
        <button
          onClick={handleToggle}
          className="toggle-button"
          style={{ transform: `translate(${width}px, 20px)` }}
        >
          {isOpen ? "<" : ">"}
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default SidebarL;
