// Myplace.js
import React from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";

const Myplace = () => {
    return (
        <div className="myplace-container">
            {/* 관심 있는 장소 컴포넌트의 내용을 작성 */}
            <p>관심 있는 장소</p>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>내용</td>
                        <td>내용</td>
                        <td>내용</td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>내용</td>
                        <td>내용</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Myplace;
