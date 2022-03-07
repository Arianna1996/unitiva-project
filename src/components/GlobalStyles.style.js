import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
  body {
  background-color: #f1f1f1;
  height:100vh;
  padding: 2rem 5rem;
   .spinner {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
  .spinner img {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}
footer{
    display: flex;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  padding: 3rem;
  background: #fff;
  width: 100vw;
  left: 0;
  border-top: 1px solid #555;
.backButton{
  display: flex;
  align-items:center;
  cursor: pointer;
}
.backButton img{
  width: 25px;
  margin-right: .4rem ;
}
.footerItem{
  display: flex;
  justify-content:space-between;
  align-items:center;
}
  p{
    color: #999;
    margin-right:2rem
  }
}
`;

export default GlobalStyles;
