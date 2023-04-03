import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 100px auto;

  .carousel {
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: 50px;
    overflow: scroll;
    font-family: sans-serif;
  }

  .carousel::-webkit-scrollbar {
    width: 1px;
  }

  .carousel-slide {
    border-radius: 10px;
    background-color: #80808088;
    text-align: center;
    padding: 10px;
    width: 120px;
    height: 120px;
  }

  img {
    width: 60px;
  }

  @media (min-width: 1800px) {
    .carousel-slide {
      width: 200px;
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
    width: 85%;

    .carousel-slide {
      padding: 15px;
    }

    img {
      width: 40px;
    }

    h4 {
      font-size: 13px;
    }
  }
`;
