import React, { Component } from "react";
import ReactDOM from "react-dom";
import diary from "./components/searchdiary/diary";

class srchdiary extends Component {
  render() {
    return (
      <div>
        <img src="./images/Pages/Vector.png" alt="이미지 설명" />
        <h3> 원하는 조건의 계획 찾기 </h3>
        <div>
          <table>
            <tbody>
              <tr>
                <td>일정</td>
              </tr>
            </tbody>
          </table>
          <button
          // onClick={() => this.handleScheduleFilter("all")}
          >
            전체선택
          </button>
          {/* oneday와 twoplus에 대한 유사한 버튼들 */}
        </div>

        <h3> 정렬 필터: 추천순 조회 많은 순 최신순</h3>
        <h3> 페이지네이션 기능 구현</h3>
        <h3> 클릭시 여행계획서로 이동</h3>
        <h3> 내 여행 계획서로 가져오기</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <srchdiary /> {/* Use the component name with PascalCase */}
  </React.StrictMode>,
  document.getElementById("root")
);

export default srchdiary;
