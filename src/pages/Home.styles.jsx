import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 200px;
  margin-top: 12%;
  margin-bottom: 230px;

  @media (min-width: 1800px) {
    height: 100vh;
    margin-top: 0;
    margin-bottom: 0px;
  }

  @media (max-width: 1200px) {
    gap: 120px;
    height: 70vh;
    margin-bottom: 0px;
  }

  @media (max-width: 920px) {
    gap: 60px;
    height: 70vh;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    height: 80vh;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: white;

  @media (min-width: 1800px) {
    font-size: 60px;
  }

  @media (max-width: 300px) and (max-height: 200px) {
    font-size: 25px;
  }
`;

export const Span = styled.span`
  display: block;
  color: #00b2df;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  width: 450px;
  border-radius: 30%;

  @media (min-width: 1800px) {
    width: 500px;
  }

  @media (max-width: 920px) {
    width: 300px;
  }

  @media (max-width: 700px) {
    width: 200px;
  }

  @media (max-width: 300px) and (max-height: 200px) {
    display: none;
  }
`;

export const Blob = styled.img`
  width: 430px;
  animation: ${rotate} 5s linear infinite;
  position: absolute;
  top: 140px;
  z-index: -1;

  @media (min-width: 1800px) {
    width: 480px;
    top: 240px;
  }
  @media (max-width: 1200px) {
    top: 190px;
  }

  @media (max-width: 920px) {
    width: 300px;
  }

  @media (max-width: 700px) {
    width: 200px;
    margin-top: 37%;
  }

  @media (max-width: 620px) {
    margin-top: 40%;
  }

  @media (max-width: 500px) {
    margin-top: 50%;
  }

  @media (max-width: 420px) and (max-height: 920px) {
    margin-top: 65%;
  }

  @media (max-width: 380px) and (max-height: 750px) {
    margin-top: 55%;
  }

  @media (max-width: 380px) and (max-height: 680px) {
    margin-top: 46%;
  }

  @media (max-width: 300px) and (max-height: 200px) {
    display: none;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 130px;
  background-color: #3d3c3cc2;

  @media (min-width: 1800px) {
    padding-top: 50px;
    padding-bottom: 150px;
  }

  @media (max-width: 700px) {
    padding-top: 25px;
    padding-bottom: 60px;
  }
`;
