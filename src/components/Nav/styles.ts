import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
  border-radius: 0 0 10px 10px;

  background-color: ${({ theme }) => theme["white"]};

  a {
    width: 10rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme["gray-900"]};
    text-align: center;
  }

  img {
    width: 56px;
    height: 56px;
  }

  @media (max-width: 1000px) {
    gap: 1.5rem;
  }
`;
