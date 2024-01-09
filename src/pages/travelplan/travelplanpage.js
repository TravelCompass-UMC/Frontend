import React, { Component } from "react";
import classes from "../../styles/travelplanpage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
locale = { ko };
class trvlplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
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
        <div>
          <h1>여행 기간</h1>
          <p>기간을 선택해주세요</p>
          <div>
            <h2>여행 시작일:</h2>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStartDateChange}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
          </div>
          <div>
            <h2>여행 종료일:</h2>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleEndDateChange}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={this.state.startDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default trvlplan;
