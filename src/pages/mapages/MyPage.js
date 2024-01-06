import React, { Component } from "react";

class mypage extends Component {
  render() {
    return (
      <div>
        <h3> 마이페이지입니다. </h3>
        <h3> 로그인상태x: 로그인화면으로 이동 </h3>
        <h3>
          {" "}
          본인 정보 수정, 본인의 글 열람, 내가 북마크한 다른 사용자의 여행계획,
          나의 여행계획서, 내가 북마크한 장소들{" "}
        </h3>
      </div>
    );
  }
}

export default mypage;
