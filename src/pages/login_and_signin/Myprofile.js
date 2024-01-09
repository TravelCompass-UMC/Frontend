// import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import '../../styles/MemberManagement.css';
// // MemberManagement.js

// class MemberManagement extends React.Component {
//   state = {
//     nickname: '',
//     email: ''
//   };

//   componentDidMount() {
//     // 서버에서 사용자 정보를 가져와 state에 설정하는 로직을 작성하세요
//     // 예시: API 호출 또는 로그인 정보를 전달받아 설정
//     const user = {
//       nickname: '사용자 닉네임',
//       email: '사용자 이메일'
//     };
//     this.setState({ nickname: user.nickname, email: user.email });
//   }

//   changePassword = () => {
//     // 비밀번호 변경 페이지로 이동하는 로직을 작성하세요
//   };

//   logout = () => {
//     // 로그아웃 처리 및 로그인 페이지로 이동하는 로직을 작성하세요
//   };

//   withdraw = () => {
//     // 회원 탈퇴 처리 및 홈페이지로 이동하는 로직을 작성하세요
//   };

//   render() {
//     const { nickname, email } = this.state;

//     return (
//       <div className="member-management">
//         <h1>회원 관리 페이지</h1>
//         <div id="profile">
//           <h2>프로필 설정</h2>
//           <p>닉네임: <span id="nickname">{nickname}</span></p>
//           <p>이메일: <span id="email">{email}</span></p>
//         </div>
//         <button onClick={this.changePassword}>비밀번호 변경</button>
//         <button onClick={this.logout}>로그아웃</button>
//         <button onClick={this.withdraw}>회원 탈퇴</button>
//       </div>
//     );
//   }
// }

// export default MemberManagement;

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../styles/MemberManagement.css';
// MemberManagement.js

class MemberManagement extends React.Component {
  state = {
    nickname: '',
    email: ''
  };

  componentDidMount() {
    // 서버에서 사용자 정보를 가져와 state에 설정하는 로직을 작성하세요
    // 예시: API 호출 또는 로그인 정보를 전달받아 설정
    const user = {
      nickname: '사용자 닉네임',
      email: '사용자 이메일'
    };
    this.setState({ nickname: user.nickname, email: user.email });
  }

  changePassword = () => {
    // 비밀번호 변경 페이지로 이동하는 로직을 작성하세요
  };

  logout = () => {
    // 로그아웃 처리 및 로그인 페이지로 이동하는 로직을 작성하세요
  };

  withdraw = () => {
    // 회원 탈퇴 처리 및 홈페이지로 이동하는 로직을 작성하세요
  };

  render() {
    const { nickname, email } = this.state;

    return (
      <div className="member-management">
        <h1>회원 관리 페이지</h1>
        <div id="profile">
          <h2>프로필 설정</h2>
          <p>닉네임: <span id="nickname">{nickname}</span></p>
          <p>이메일: <span id="email">{email}</span></p>
        </div>
        <button onClick={this.changePassword}>비밀번호 변경</button>
        <button onClick={this.logout}>로그아웃</button>
        <button onClick={this.withdraw}>회원 탈퇴</button>
      </div>
    );
  }
}

export default MemberManagement;