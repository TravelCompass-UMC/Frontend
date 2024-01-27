import React, { Component } from "react";
import ReactDOM from "react-dom";
import DiaryContent from "../../components/Searchdairy/DiaryContent";

class diarycnt extends Component {
  render() {
    return (
      <div>
        <DiaryContent />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <srchdiary /> Use the component name with PascalCase */}
    <diarycnt />
  </React.StrictMode>,
  document.getElementById("root")
);

export default diarycnt;
