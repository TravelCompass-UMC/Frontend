import styled from "styled-components";
import MapImage from "@/assets/images/Place/Map.svg";

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


export const Map = styled.div`
  margin-top: 104px;
  width: 155px;
  height: 180px;
  display: flex;
  align-items: center;
  background-image: url(${MapImage});
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
