import styled from "styled-components";

export const MainContainer = styled.main`
  margin-top: 6rem;
  margin-bottom: 7rem;
`;

export const IntroContainer = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  height: 300px;
  display: grid;
  grid-template-columns: 400px 200px 400px;
  align-items: center;
  gap: 4rem;

  span {
    font-family: "Lastica";
    font-size: 8rem;
    font-weight: bold;
    text-align: center;
  }

  img {
    width: 200px;
    height: 200px;
  }

  small {
    font-family: "Roboto";
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 400;
  }
`;

export const Subtitle = styled.div`
  font-family: "Roboto";
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 2rem;
  align-items: center;

  margin-bottom: 10rem;
`;

export const TechnologiesContainer = styled.div`
  height: 450px;
  background-color: ${({ theme }) => theme["white"]};
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 3rem;
    font-size: 3rem;
  }
`;

export const TechsSymbolsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
    }

    span {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
