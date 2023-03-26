import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 100px auto;

  .carousel {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 80px;
    overflow: hidden;
    font-family: sans-serif;
  }

  .carousel-slide {
    border-radius: 10px;
    background-color: #80808088;
    text-align: center;
    padding: 10px;
  }

  img {
    width: 60px;
  }

  @media (min-width: 1800px) {
    .carousel-slide {
      height: 160px;
    }
    img {
      width: 90px;
    }
    h4 {
      font-size: 20px;
    }
  }

  @media (max-width: 700px) {
    width: 95%;

    .carousel-slide {
      padding: 20px;
    }

    img {
      width: 40px;
    }

    h4 {
      font-size: 13px;
    }
  }
`;
