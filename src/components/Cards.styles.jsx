import styled from "styled-components";

export const Imagen = styled.img`
  width: 80px;

  @media (max-width: 700px) {
    width: 40px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 40px;
`;

export const Card = styled.div`
  border-radius: 10px;
  background-color: #80808088;
  text-align: center;
  padding: 10px;
  display: flex;
  gap: 20px;
  align-items: center;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px white;
  }

  @media (max-width: 700px) {
    padding: 10px;
  }
`;
