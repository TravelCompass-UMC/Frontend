import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";

class Myplanpage extends Component {
    render() {
      return (
        <div className="myplanpage-container">
        <div className="mypage_navbar">
          <div>나의 여행계획</div>
          <div style={{ flexGrow: "1" }}></div>
        </div>
  
        <div className="myplan_images">
          <div className="myplan_img">
            썸네일 1
          </div>
          <div className="myplan_img">
            썸네일 2
          </div>
          <div className="myplan_img">
            썸네일 3
          </div>
        
        </div>
      </div>
      );
    }
  }
  
  export default Myplanpage;
  