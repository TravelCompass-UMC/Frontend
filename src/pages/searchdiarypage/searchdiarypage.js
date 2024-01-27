import React, { Component } from "react";
import ReactDOM from "react-dom";
import DiaryList from "../../components/Searchdairy/DiaryList";
import Search from "../../components/Searchdairy/Search";
import VectorImage from "../../assets/images/Pages/Vector.png"; // 이미지를 import

// const styles = {
//   searchText: {
//     color: "#191B24",
//     fontSize: 22,
//     fontFamily: "SUIT Variable",
//     fontWeight: "700",
//     wordWrap: "break-word",
//   },
// };

class srchdiary extends Component {
  render() {
    return (
      <div>
        {/* <div style={{ marginTop: "50px" }}>
          <img
            src={VectorImage}
            style={{
              position: "relative",
            }}
          />

          <h3
            style={{
              ...styles.searchText,
              marginLeft: "25px",
              marginTop: "-15px",
              position: "relative",
            }}
          >
            {" "}
            원하는 조건의 계획 찾기{" "}
          </h3>
        </div> */}

        <Search />
        <DiaryList />
        {/* oneday와 twoplus에 대한 유사한 버튼들 */}
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
