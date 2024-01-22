//Otherplanpage.js
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import { OtherTravelPlanSection } from "./MyPage";
import { OtherplanThumbnail } from "./MyPage";
import { Container } from "react-bootstrap";
import { useState } from "react";
import otherplans from "../../tempdata/otherplandata";

function Otherplanpage() {

  const [others] = useState(otherplans);

  return (
    <div className="container">
      <h3>관심있는 여행계획</h3>
      <div className="row">
        {
          others.map((a, i) => {
            return (
              <OtherplanThumbnail others={others[i]} i={i + 1}></OtherplanThumbnail>
            )
          })
        }
      </div>
    </div>
  );

  }
  
  export default Otherplanpage;
  