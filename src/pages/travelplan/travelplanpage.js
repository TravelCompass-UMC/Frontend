import React, { Component } from "react";
import classes from "../../styles/travelplan/travelplanpage.css";
import DatePicker from "react-datepicker";
class trvlplan extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            maxLength="20"
            className="search_input"
            name="search"
            placeholder="어디로 가고싶나요?"
          />
          <input type="submit" value="검색" className="serach_submit" />
        </form>
      </div>
    );
  }
}

export default trvlplan;
