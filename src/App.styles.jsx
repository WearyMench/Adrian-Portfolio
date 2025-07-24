import { createGlobalStyle } from "styled-components";
import pattern from "./assets/y-so-serious.png";

export const Global = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body{
    margin: 0px;
    padding: 0px;
    min-width: 320px;
    background-image: url(${pattern});
    color: white;
    font-family: 'Playfair Display', serif;
    
    ::-webkit-scrollbar {
      width: 8px;
      background-color: black;
    };
    ::-webkit-scrollbar-track {
      box-shadow: "inset 0 0 6px grey";
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: lightgray;
      border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #00b2df;
    }
  }

  #root {
    /* Sin overflow para evitar scroll interno */
  }

  .main-content {
    display: flex;
    flex-direction: column;
  }
`;
