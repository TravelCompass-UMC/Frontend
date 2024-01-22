// Mypages.js

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import { Container } from "react-bootstrap";
import DiaryList from "../../components/Searchdairy/DiaryList";
import Diary from "../../components/Searchdairy/Diary";


class mypage extends Component {
  render(){
    return (
      <div className="container">
          <ProfileSection />
          <MyTravelPlanSection title="나의 여행계획"/>
          <OtherTravelPlanSection title="관심있는 여행계획서"/>
          
      </div>
    )
  }
}

export default mypage;


// class mypage extends Component {
//   render() {
//     return (
//       <div className="mypage-container">
//         <div className="user-container">
//           <div className="flex flex-col items-center py-12">
//             <ProfileSection />
//             <MyTravelPlanSection title="나의 여행계획" />
//             <OtherTravelPlanSection title="관심있는 여행계획서" />
//             <InterestedPlacesSection title="관심있는 장소"/>
//           </div>

//           <div className="log-botton">
//             <button>로그아웃</button>
//             <button>회원탈퇴</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default mypage;

function ProfileSection() {
  return (
    <div className="flex items-center mb-8">
      <div className="rounded-full bg-gray-300 w-24 h-24 mr-4"></div>
      <div>
        <h2 className="user-name">상현님 반갑습니다 !</h2>
        <p className="user-nickname">닉네임</p>
        <p className="user-email">shawn2018@naver.com</p>
      </div>
    </div>
  );
}

function MyTravelPlanSection({ title }) {
  return (
    <div className="w-full mb-8">
      <div className="nav-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <Link to="/myplan" className="morebutton"><button>더보기</button></Link>
      </div>
      <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
    </div>
  );
}

function OtherTravelPlanSection({ title }) {
  return (
    <div className="w-full mb-8">
      <div className="nav-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{title}</h3>
        <Link to="/otherplan" className="morebutton"><button>더보기</button></Link>
      </div>
      <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
    </div>
  );
}

// function InterestedPlacesSection({title}) {
//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-center mb-4">
//         <h3>{title}</h3>
//         <button className="morebutton">더보기</button>
//       </div>
//       <div className="placebox-container">
//         <div className="placebox"></div>
//         <div className="placebox"></div>
//         <div className="placebox"></div>
//         <div className="placebox"></div>
//         <div className="placebox"></div>
//         <div className="placebox"></div>
//       </div>
//     </div>
//   );
// }

