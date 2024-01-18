
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styles from "../../styles/Mypages.css";
import Myplan from "../../components/Mypage_components/Myplan";  // Myplan 컴포넌트 import
import Otherplan from "../../components/Mypage_components/Otherplan";  // Otherplan 컴포넌트 import
import Myplace from "../../components/Mypage_components/Myplace";  // Myplace 컴포넌트 import

class MyPage extends Component {
  // 서버에서 받아온 임시 데이터 (썸네일 정보)
  thumbnails = [
    { id: 1, src: "썸네일 1" },
    { id: 2, src: "썸네일 2" },
    { id: 3, src: "썸네일 3" },
    // ... 추가 데이터
  ];

  render() {
    return (
      <div className="mypage-container">
        <div className="user">
          <div className="profile-info">
            <img src="path_to_profile_icon.jpg" alt="프로필 아이콘" />
            <div className="user-details">
              <p>닉네임: 홍길동</p>
              <p>이메일: honggildong@example.com</p>
            </div>
          </div>
        </div>

        <div className="my-plans">
          <Myplan thumbnails={this.thumbnails.slice(0, 3)} />
        </div>

        <div className="interest-plans">
          <Otherplan />
        </div>

        <div className="interest-places">
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

export default MyPage;
