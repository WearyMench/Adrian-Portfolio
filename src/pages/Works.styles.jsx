import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 50px auto;

  .title {
    width: 85%;
    margin: 0 auto;
    font-family: "Roboto Mono", monospace;
  }

  h1 {
    width: fit-content;
    margin-top: 70px;
  }

  .title span {
    color: rgba(91, 134, 203, 1);
  }

  .tag-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  .button-tag {
    background: none;
    padding: 5px;
    border: 1px solid lightcyan;
    border-radius: 10px;
    font-size: 14px;
    color: lightgray;
  }

  .selected {
    background-color: #5b86cb;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 40px;
  }

  hr {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const CardDiv = styled.div`
  background-color: rgba(128, 128, 128, 0.533);
  width: fit-content;
  border-radius: 10px;

  iframe {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 3px solid gray;
  }

  .card-body {
    width: 90%;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .card-body h4 {
    font-family: "PT Sans Narrow", sans-serif;
  }

  .tag {
    padding: 5px;
    border: 1px solid lightcyan;
    border-radius: 10px;
    font-size: 14px;
  }

  .logo-container {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  .logo {
    width: 40px;
    filter: invert(1);
  }
`;
