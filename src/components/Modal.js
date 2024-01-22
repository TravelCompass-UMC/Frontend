// Modal.js
import React from "react";
import "../styles/Modal.css";

const Modal = ({
  open,
  close,
  header,
  buttonText = "이대로 계획 만들기!",
  onButtonClick,
  children,
}) => {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{children}</main>{" "}
          {/* 여기서 props.children을 직접 children으로 변경 */}
          <footer>
            <button className="close" onClick={onButtonClick || close}>
              {buttonText}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
