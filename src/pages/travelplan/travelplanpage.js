import React, { Component } from "react";
import classes from "../../styles/travelplanpage.css";
import DatePicker from "react-datepicker";

const [startDate, setStartDate] = useState(new Date());
const [endDaate, setEndDate] = useState(new Date());

class trvlplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

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

        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default trvlplan;
