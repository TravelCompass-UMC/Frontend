import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/travelplan/travelplandestination.module.css";
import "react-datepicker/dist/react-datepicker.css";
import image1 from "../../assets/images/Pages/Vector (2).png";
import { format } from "date-fns";
import { autocompleteClasses } from "@mui/material";
import Button from "../../components/common_components/common_button";
import { EndSection } from "../../pages/mapages/MyPage";

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
      destinations: [],
      filteredDestinations: [],
    };
  }
  componentDidMount() {
    // 컴포넌트가 마운트될 때 목적지 데이터를 가져옵니다.
    this.fetchDestinations();
  }

  fetchDestinations = () => {
    fetch("http://dev.enble.site:8080/regions")
      .then((response) => response.json())
      .then((data) => {
        if (data.isSuccess && data.result) {
          const destinations = data.result.map((item) => item.name);
          this.setState({ destinations });
        }
      })
      .catch((error) => console.error("Error fetching destinations:", error));
  };
  handlePre = () => {
    this.props.navigate("/");
  };

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
    const { tripTitle, searchInput, startDate, endDate } = this.state;
    if (tripTitle && searchInput) {
      this.props.navigate("/travelplandate", {
        state: { destination: searchInput, startDate, endDate },
      });
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
              <div
                className="destinationList"
                key={index}
                onClick={() => this.selectDestination(destination)}
              >
                <div className="destinationListText">
                  {destination}
                  <img className="image1" src={image1} />
                </div>
              </div>
            ))}
          </ul>
        );
      } else {
        return (
          <ul className="suggestions">
            <div className="destinationList">
              <div className="destinationListText">검색 결과가 없습니다.</div>
            </div>
          </ul>
        );
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
    // 여행 제목과 목적지가 모두 입력되었는지 확인
    const isFormFilled = this.state.tripTitle && this.state.searchInput;

    // 버튼 클래스를 조건부로 설정
    const buttonClass = isFormFilled ? styles.buttonActive : ""; // 활성화 상태에 따라 클래스 변경

    return (
      <div className={styles.container}>
        <div className={styles.informinputContainer}>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.textTitle}> 여행의 제목을 작성해주세요.</div>
            <div className={styles.search_title}>
              <input
                type="text"
                maxLength="20"
                className={styles.search_title1}
                name="tripTitle"
                placeholder=" 여행 제목을 입력해주세요."
                value={this.state.tripTitle}
                onChange={this.handleTripTitleChange}
              />
            </div>
            {/* 목적지 검색 필드 */}
            <div>
              <div className={styles.textTitle}> 어디로 가시나요?</div>
              <div className={styles.search_title}>
                <input
                  type="text"
                  maxLength="20"
                  className={styles.search_title1}
                  name="searchInput"
                  placeholder=" 어디로 가고싶나요?"
                  value={this.state.searchInput}
                  onChange={this.handleSearchInput}
                />
              </div>
              {this.renderSuggestions()}
            </div>

            {/* 초대 코드 입력 섹션 */}
            <div className={styles.textTitle}> 친구에게 초대받으셨나요?</div>
            <div className={styles.search_title}>
              <div className={styles.invitationCodeSection}>
                <input
                  type="text"
                  maxLength="20"
                  className={styles.search_title1}
                  name="invitationCode"
                  placeholder="        초대코드를 입력해주세요."
                  value={this.state.invitationCode}
                  onChange={this.handleInvitationCodeChange}
                ></input>
                <button
                  onClick={this.handleInvitationCodeSubmit}
                  className={styles.search_submit}
                >
                  제출
                </button>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                className={`${styles.pre_btn}`} // 이전 버튼 스타일
                text="이전"
                onClick={this.handlePre}
              />

              <Button
                className={`${styles.nextBtn} ${buttonClass}`} // 조건부 클래스 적용
                text="선택 완료"
                type="submit"
                disabled={!isFormFilled} // 폼이 완전히 채워지지 않으면 버튼 비활성화
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function TrvlPlanWithNavigate(props) {
  let navigate = useNavigate();
  return <TrvlPlan {...props} navigate={navigate} />;
}

export default TrvlPlanWithNavigate;
