import React, { Component } from "react";
import ReactDOM from "react-dom";
import DiaryList from "../../components/Searchdiary/DiaryList";
class srchdiary extends Component {
  render() {
    return (
      <div>
        <img src="../../assets/images/Pages/Vector.png" />
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
          <DiaryList />
          {/* oneday와 twoplus에 대한 유사한 버튼들 */}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <srchdiary /> Use the component name with PascalCase */}
    <srchdiary />
  </React.StrictMode>,
  document.getElementById("root")
);

export default srchdiary;
