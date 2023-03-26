import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 100px auto;
  font-family: sans-serif;

  a {
    display: block;
    color: white;
    text-decoration: none;
    margin: 10px;
  }

  a:hover {
    text-decoration: underline #00b2df;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const RowDIv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 30px;
  background-color: #00b2df65;
  border-radius: 10px;
  padding: 20px;
  align-items: center;

  .MailContainer {
    width: 150px;
    height: 150px;
    display: flex;
    place-content: center;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 30px;
  }

  .item {
    width: 56%;
    overflow: visible;
    stroke: #fff;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    h2 {
      font-size: medium;
    }
  }
`;

export const MediaDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .wrapper {
    width: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  iframe {
    width: 100%;
    height: 40vh;
    border: none;
    border-radius: 5px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    .wrapper {
      width: 80%;
      text-align: left;
      margin: 0 auto;
    }
  }
  @media (max-width: 700px) {
    .wrapper {
      width: 100%;
    }
  }
`;

export const LogoDiv = styled.div`
  background-color: #00b2df87;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  width: 250px;
`;

export const Logos = styled.img`
  width: 40px;
`;
