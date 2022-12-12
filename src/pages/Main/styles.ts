import styled from "styled-components";

export const MainContainer = styled.main`
  margin-top: 6rem;
  margin-bottom: 4rem;
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

  strong {
    color: ${({ theme }) => theme["orange-500"]};
  }
`;

export const TechnologiesContainer = styled.div`
  height: 450px;
  background-color: ${({ theme }) => theme["white"]};
  display: flex;
  align-items: center;

  h2 {
    font-family: "Roboto";
    margin-bottom: 4rem;
    font-size: 3rem;
    text-align: right;
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

export const ExamplesContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  p {
    font-weight: bold;
    text-align: left;
    font-size: 3rem;
  }
`;

export const ExamplesContent = styled.div``;

export const ContactContainer = styled.div`
  height: 500px;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme["white"]};

  > div {
    display: grid;
    grid-template-columns: 6fr 3fr;
    align-items: center;
  }
`;

export const ContactContent = styled.div`
  strong {
    font-size: 4rem;
    color: ${({ theme }) => theme["orange-500"]};
  }

  span {
    font-size: 2rem;
    color: ${({ theme }) => theme["gray-700"]};
    display: block;
  }
`;

export const ContactActives = styled.div`
  display: flex;
  gap: 3rem;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const Footer = styled.footer`
  margin-top: 4rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
