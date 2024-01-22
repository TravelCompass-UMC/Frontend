// Mypages.js

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import { Container } from "react-bootstrap";
import myplans from '../../tempdata/myplandata';
import { useState } from "react";

function Mypage() {

    const [plans] = useState(myplans);


    return (
      <div className="container">
        <ProfileSection />
        <MyTravelPlanSection title="나의 여행계획" plans={plans}/>
        <OtherTravelPlanSection title="관심있는 여행계획"/>
        <InterestedPlacesSection title="관심있는 장소" />
        {/* <p>{plans[0].place}</p> */}
        <div className="log-botton">
          <button>로그아웃</button>
          <button>회원탈퇴</button>
        </div>
      </div>
      
    )
  }

export default Mypage;

export function ProfileSection() {
  return (
    <div className="flex items-center mb-8">
      <div>
        <h2 className="user-name">상현님 반갑습니다 !</h2>
        <img src="" alt="프로필 아이콘"/>
        <p className="user-nickname">닉네임</p>
        <p className="user-email">shawn2018@naver.com</p>
      </div>
    </div>
  );
}

export function MyplanThumbnail(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.plans.place}</h4>
      <p>{props.plans.hashtag.join(', ')}</p>
    </div>
  )
}

export function MyTravelPlanSection({ title, plans }) {
  // 처음 3개의 요소만 사용
  const firstThreePlans = plans.slice(0, 3);

  return (
    <div className="w-full mb-8">
      <div className="nav-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <Link to="/myplan" className="morebutton"><button>더보기</button></Link>
      </div>
      <div className="row">
        {
          firstThreePlans.map((plan, i) => (
            <MyplanThumbnail key={i} plans={plan} i={i + 1}></MyplanThumbnail>
          ))
        }
      </div>
    </div>
  );
}

export function OtherplanThumbnail(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{props.plans.place}</h4>
      <p>{props.plans.hashtag.join(', ')}</p>
    </div>
  )
}

export function OtherTravelPlanSection({ title }) {
  return (
    <div className="w-full mb-8">
      <div className="nav-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <Link to="/otherplan" className="morebutton"><button>더보기</button></Link>
      </div>
      <div className="row">
        
        </div>
    </div>
  );
}

export function InterestedPlacesSection({title}) {
  return (
    <div className="w-full">
      <div className="nav-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <Link to="/myplace" className="morebutton"><button>더보기</button></Link>
      </div>
      <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="60%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="60%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="60%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="60%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="60%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="60%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>

        </div>
    </div>
  );
}
