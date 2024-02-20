import styled from "styled-components";
import SearchBtn from "../assets/images/Place/searchBtn.svg";

// 페이지별로 용도 나눠주세요

/**  메인홈 페이지 스타일 **/
export const Page = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-height: 980px;
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  border: 1px solid blue;
  background-color: #f8f9f9;
  align-items: center;
`;

/**  장소검색 페이지 스타일 **/
export const Search = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${SearchBtn});
  background-repeat: no-repeat;
`;



/**  여행일지 페이지 스타일 **/





/** 여행계획 페이지 스타일**/




/**  마이페이지 스타일**/



/**  로그인 페이지 스타일**/
