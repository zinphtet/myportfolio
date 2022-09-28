import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   html{
     font-size: 62.5%;
     line-height: 1.05;
     font-family: 'Poppins', sans-serif;
     /* overflow-x: hidden; */
     /* overflow-y:hidden; */
     @media screen and (max-width : 56.25rem){
      font-size: 59.375%
     }
     @media screen and (max-width : 37.5rem){
      font-size: 56.25%
     }
   }
   body{
    background-color: ${({ theme: { background } }) => background};
    overflow-x: hidden;
    transition: all .5s linear;
    /* border: 1px solid green; */
   }
   .hide{
    overflow-y:hidden;
   }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style-type: none;
  }
  .section{
     max-width: 120rem;
     margin: 0 auto;
     /* border: 1px solid red; */
     padding-inline: 4rem;
  }
  .section-2{
    max-width: 105rem;
    margin: 0 auto;
    padding-inline: 4rem;
    
  }
  .section-3{
    max-width: 95rem;
    margin: 0 auto;
    padding-inline: 4rem;
  }
  span{
    color: ${({ theme: { thirdColor } }) => thirdColor};
  }
  .title{
    display: flex;
    gap: 1rem;
    align-items: center;
    color:  ${(props) => props.theme.text};
    margin-bottom: 3rem;
    p{
      font-size: 3rem;
      font-family: ${(props) => props.theme.titleFont};
      font-weight: 500;
      
    }
    .line{
      flex: 1;
      height: .1rem;
      background-color:  ${(props) => props.theme.lineColor};
    }
  }
  .btn:hover{
      background-color:  ${(props) => props.theme.thirdColor};
      color:  ${(props) => props.theme.background};
     transition: all .2s linear;
  }
`;

export default GlobalStyle;
