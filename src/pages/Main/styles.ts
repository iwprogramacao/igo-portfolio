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

  @media screen and (max-width: 1000px) {
    display: flex;

    flex-direction: column;
  }
`;

export const Title = styled.div`
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  align-items: center;
  gap: 4rem;

  span {
    font-family: "Lastica";
    font-size: 8rem;
    font-weight: bold;
    text-align: right;
  }

  img {
    width: 200px;
    height: 200px;
  }

  h2 {
    font-family: "Roboto";
    font-size: 3rem;
    text-transform: uppercase;
    text-align: left;
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

  margin-bottom: 8rem;
`;

export const TechnologiesContainer = styled.div`
  height: 450px;
  background-color: ${({ theme }) => theme["white"]};
  display: flex;
  align-items: center;
  margin-bottom: 10rem;

  h2 {
    margin-bottom: 4rem;
    font-size: 3rem;
    text-align: center;
  }
`;

export const TechsSymbolsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

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
      font-size: 1.125rem;
      text-align: center;
    }
  }
`;
