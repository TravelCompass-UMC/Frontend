// Myplanpage.js
import React, { Component } from "react";
import styles from "../../styles/Mypages.css";
import myplans from "../../tempdata/myplandata";
import { MyTravelPlanSection } from "./MyPage";
import { useState } from "react";
import { MyplanThumbnail } from "./MyPage";
import { Container } from "react-bootstrap";


function Myplanpage(){

    const [plans] = useState(myplans);

    return (
      <div className="container">
      <h3>나의 여행계획</h3>
      <div className="row">
      {
        plans.map((a, i)=>{
            return(
              <MyplanThumbnail plans={plans[i]} i={i+1}></MyplanThumbnail>
            )
        })
      }
      </div>
    </div>  
    );
}

export default Myplanpage;
