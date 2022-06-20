// 這個部分是IGContainder，IGContainder包含了現實動態,發文章區,跟隨者專區三個部分

import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px; 
  /* 定義內容/發文區的最大寬度 */
  margin: 0 auto;
  /* 在整體頁面左右兩邊留白，讓內容區/文章區會在整體頁面中間 */
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
  /*RWD處理 */
`;

export default Container;
