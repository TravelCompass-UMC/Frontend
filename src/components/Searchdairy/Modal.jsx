import React from "react";
import styles from "../../styles/Modal.module.css"; // 모달에 대한 스타일을 적용하기 위한 CSS 모듈을 임포트합니다.
import eclose from "../../assets/images/Pages/close.png"; // 닫기 이미지

const Modal = ({ data, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            {/* 배경을 클릭하면 모달이 닫히도록 합니다. */}
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {/* 모달 내용 */}
                {/* <h2>{data.placeName}</h2>
                <p>{data.time}</p> */}
                {/* 추가적인 데이터 표시 */}
                {/* 예: <p>{data.someOtherField}</p> */}
                {/* 모달 닫기 버튼 */}
                <img className={styles.closeImage} src={eclose} onClick={onClose} />

                <div style={{ height: "40px", marginTop: "30px" }}>
                    <span className={styles.modalTitle}>성산일출봉</span>
                    <span className={styles.modalPlace}>명소</span>
                </div>
                <div style={{ height: "40px" }}>
                    <p className={styles.modallocation}>제주 제주시 애월읍 고내1길 33</p>
                </div>
                <div style={{ backgroundColor: "black", height: "50px", }}>
                    스크랩
                </div>
                <div style={{ height: "60px", marginTop: "20px" }}>
                    <p className={styles.modalplaceinform}>장소 설명을 간단하게 적어 놓는 공간입니다.
                        장소 설명을 간단하게 적어 놓는 공간입니다. 장소 설명을 간단하게 적어 놓는 공간입니다.</p>
                </div>
                <div style={{ height: "60px", marginTop: "40px" }}>
                    <p className={styles.modalplaceinformmore}>장소 정보 더 자세히 보기</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;