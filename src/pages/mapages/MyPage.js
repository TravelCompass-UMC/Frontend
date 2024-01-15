// import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import styles from "../../styles/Mypages.css";

// class mypage extends Component {
//   render() {
//     return (
//       <div>
//           <p style={{textAlign:"center"}}>user님 반갑습니다 !</p>
//           <div className="user">
//           <p>나의 일정</p>
//           <hr style={{color:"black"}}></hr>
//           <p>관심 있는 여행계획서</p>
//           <hr style={{color:"black"}}></hr>
//           <p>나의 장소</p>
//           </div>
//       </div>
//     );
//   }
// }

// export default mypage;

// Mypage.js

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import Myplan from "./Myplan";  // Myplan 컴포넌트 import
import Otherplan from "./Otherplan";  // Otherplan 컴포넌트 import
import Myplace from "./Myplace";  // Myplace 컴포넌트 import

class mypage extends Component {
  render() {
    return (
      <div className="mypage-container">
        <div className="user">
          <div className="profile-info">
            {/* 프로필 아이콘, 닉네임, 로그인 계정 이메일 표시 */}
            {/* 이 부분은 나중에 로그인 여부에 따라 동적으로 변경할 예정 */}
            <img src="path_to_profile_icon.jpg" alt="프로필 아이콘" />
            <div className="user-details">
              <p>닉네임: 홍길동</p>
              <p>이메일: honggildong@example.com</p>
            </div>
          </div>
        </div>
        <div className="my-plans">
          {/* 내가 저장한 여행 계획들 썸네일 표시 */}
          {/* Myplan.js 컴포넌트를 여기서 렌더링 */}
          <Myplan />
        </div>
        <div className="interest-plans">
          {/* 관심 있는 여행계획서 상위 3개만 가로로 나열 */}
          {/* Otherplan.js 컴포넌트를 여기서 렌더링 */}
          <Otherplan />
        </div>
        <div className="interest-places">
          {/* 관심있는 장소들 2행 3열 표시 */}
          {/* Myplace.js 컴포넌트를 여기서 렌더링 */}
          <Myplace />
        <div className="log-botton">
            <button>로그아웃</button>
            <button>회원탈퇴</button>
        </div>
        </div>
      </div>
    );
  }
}

export default mypage;
