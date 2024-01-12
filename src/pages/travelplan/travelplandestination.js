import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/travelplanpage.css";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

class TrvlPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      modalOpen: false,
      searchInput: "",
      tripTitle: "",
      invitationCode: "",
      showSuggestions: false,
      destinations: [
        "서울",
        "부산",
        "제주도",
        "여수",
        "속초/강릉/양양",
        "경주",
      ],
      filteredDestinations: [],
    };
  }

  handleStartDateChange = (date) => {
    this.setState({ startDate: date });
  };

  handleEndDateChange = (date) => {
    this.setState({ endDate: date });
  };

  handleSearchInput = (e) => {
    const input = e.target.value;
    const { destinations } = this.state;
    const filteredDestinations = destinations.filter((destination) =>
      destination.toLowerCase().includes(input.toLowerCase())
    );

    this.setState({
      searchInput: input,
      showSuggestions: true,
      filteredDestinations,
    });
  };

  selectDestination = (destination) => {
    this.setState({
      searchInput: destination,
      showSuggestions: false,
    });
  };

  handleTripTitleChange = (e) => {
    this.setState({ tripTitle: e.target.value });
  };

  handleInvitationCodeChange = (e) => {
    this.setState({ invitationCode: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tripTitle, searchInput } = this.state;
    if (tripTitle && searchInput) {
      this.props.navigate("/travelplandate");
    } else {
      alert("모든 필드를 입력해주세요.");
    }
  };

  renderSuggestions = () => {
    const { showSuggestions, filteredDestinations } = this.state;

    if (showSuggestions) {
      if (filteredDestinations.length) {
        return (
          <ul className="suggestions">
            {filteredDestinations.map((destination, index) => (
              <li
                key={index}
                onClick={() => this.selectDestination(destination)}
              >
                {destination}
              </li>
            ))}
          </ul>
        );
      } else {
        return <div className="no-suggestions">검색 결과가 없습니다.</div>;
      }
    }

    return null;
  };
  handleInvitationCodeSubmit = (e) => {
    e.preventDefault();
    // 초대 코드 제출 로직을 여기에 구현
    alert("초대 코드가 제출되었습니다: " + this.state.invitationCode);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            maxLength="20"
            className="search_input"
            name="tripTitle"
            placeholder="여행 제목을 입력해주세요."
            value={this.state.tripTitle}
            onChange={this.handleTripTitleChange}
          />
          <input
            type="text"
            maxLength="20"
            className="search_input"
            name="searchInput"
            placeholder="어디로 가고싶나요?"
            value={this.state.searchInput}
            onChange={this.handleSearchInput}
          />
          {this.renderSuggestions()}
          <div className="invitationCodeSection">
            <input
              type="text"
              maxLength="20"
              className="search_input"
              name="invitationCode"
              placeholder="초대코드를 입력해주세요."
              value={this.state.invitationCode}
              onChange={this.handleInvitationCodeChange}
            />
            <button
              onClick={this.handleInvitationCodeSubmit}
              className="submit_button"
            >
              제출
            </button>
          </div>

          <button type="submit" className="next_button">
            다음
          </button>
        </form>
      </div>
    );
  }
}

// 클래스 컴포넌트 내에서 useNavigate 훅을 사용하기 위한 래퍼 컴포넌트
function TrvlPlanWithNavigate(props) {
  let navigate = useNavigate();
  return <TrvlPlan {...props} navigate={navigate} />;
}

export default TrvlPlanWithNavigate;
