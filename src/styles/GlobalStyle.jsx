import { createGlobalStyle } from "styled-components";

// 필요한 전역 스타일 작성해주세요.

const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Pretendard';
    margin: 0;
    font-size: 16px;
}

  button {
    outline: none;
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 16px;
  }

  input {
    outline: none;
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 16px;
  }

`;

export default GlobalStyle;
