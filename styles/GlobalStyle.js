import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   html{
     font-size: 62.5%;
     line-height: 1.05;
     font-family: 'Poppins', sans-serif;
     scroll-behavior: smooth;
    
     @media screen and (max-width : 56.25rem){
      font-size: 59.375%
     }
     @media screen and (max-width : 37.5rem){
      font-size: 56.25%
     }
   }
   ::-webkit-scrollbar{
    width: 0;
   }
   body{
    background-color: ${({ theme: { background } }) => background};
    overflow-x: hidden;
    transition: all .5s linear;
    backface-visibility: hidden;

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
      font-size: 3.5rem;
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


  .loading{
    
    max-width: 95rem;
    margin: 0 auto;
    padding-inline: 4rem;
    padding-block: 6rem;
  }

.lds-grid {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-grid div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #2962ff;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export default GlobalStyle;
