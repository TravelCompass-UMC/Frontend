import styled from "styled-components";
import Search from "../assets/images/Place/검색창.svg";

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

export const SearchBtn = styled.div`
  position: absolute;
  top: 90px;
  left: 390px;
  z-index: 1;
  width: 436px; /* 원하는 너비로 조절 */
  height: 64px; /* 원하는 높이로 조절 */
  background-image: url(${Search});
  background-repeat: no-repeat;

`;

export const StyledTitle = styled.div`
  margin-top: 20px;
  font-family: 'Nanum Pen', cursive;
  font-size: 25px;
  line-height: 0.5;
  color: #333;
  text-align: center;
`;

/**  여행일지 페이지 스타일 **/





/** 여행계획 페이지 스타일**/




/**  마이페이지 스타일**/



/**  로그인 페이지 스타일**/
