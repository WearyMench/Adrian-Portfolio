import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0px auto;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (min-width: 1800px) {
    font-size: 22px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MyPhoto = styled.img`
  width: 400px;
  border-radius: 5px;

  @media (min-width: 1800px) {
    width: 600px;
  }

  @media (max-width: 700px) {
    width: 150px;
  }
`;
