import React, { Component } from "react";
import ReactDOM from "react-dom";
import DiaryList from "../../components/searchdiary/DiaryList";

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
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <srchdiary /> Use the component name with PascalCase */}
    <DiaryList />
  </React.StrictMode>,
  document.getElementById("root")
);

export default srchdiary;
