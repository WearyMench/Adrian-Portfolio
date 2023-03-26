import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #3d3c3cc2;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "empty text arrow";
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline #00b2df;
  }
`;

export const Text = styled.p`
  grid-area: text;
  text-align: center;

  @media (min-width: 1800px) {
    font-size: 20px;
  }
`;

export const Arrow = styled.button`
  grid-area: arrow;
  width: 40px;
  background: none;
  border-radius: 50%;
  padding: 3px;
  justify-self: center;
  color: white;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    border: 2px solid #00b2df;
  }

  @media (min-width: 1800px) {
    width: 50px;
    padding: 8px;
  }
`;
