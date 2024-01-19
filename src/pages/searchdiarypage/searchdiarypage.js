import React, { Component } from "react";
import ReactDOM from "react-dom";
import DiaryList from "../../components/Searchdairy/DiaryList";
import Search from "../../components/Searchdairy/Search";

const styles = {
  searchText: {
    color: "#191B24",
    fontSize: 22,
    fontFamily: "SUIT Variable",
    fontWeight: "700",
    wordWrap: "break-word",
  },
};

class srchdiary extends Component {
  render() {
    return (
      <div>
        <img src="../../assets/images/Pages/Vector.png" />
        <h3 style={styles.searchText}> 원하는 조건의 계획 찾기 </h3>
        <div>
          <Search />
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
