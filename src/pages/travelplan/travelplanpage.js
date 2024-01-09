import React, { Component } from "react";

import classes from "../../styles/travelplanpage.css";
import DatePicker from "react-datepicker";
class trvlplan extends Component {
  constructor(props) {
    super(props);
  }


import "../../styles/travelplanpage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import { format } from "date-fns";
class trvlplan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      modalOpen: false,
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

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };


  render() {
    const formattedStartDate = format(this.state.startDate, "yyyy년 MM월 dd일");
    const formattedEndDate = format(this.state.endDate, "yyyy년 MM월 dd일");

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
              className="datepicker"
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              minDate={new Date()}
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
              className="datepicker"
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              selected={this.state.endDate}
              onChange={this.handleEndDateChange}
              selectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              minDate={this.state.startDate}
            />
          </div>
        </div>
        <React.Fragment>
          <button onClick={this.openModal}>계획 만들기</button>
          <Modal
            open={this.state.modalOpen}
            close={this.closeModal}
            title="Create a chat room"
          >
            {/* Modal.js <main> {this.props.children} </main>에 내용이 입력된다. */}

            <div>여행 시작일: {formattedStartDate}</div>
            <div>여행 종료일: {formattedEndDate}</div>
          </Modal>
        </React.Fragment>
</div>
    );
  }
}

export default trvlplan;
