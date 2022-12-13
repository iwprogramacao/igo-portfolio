import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 18rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme["gray-900"]};
  border: 1px solid ${({ theme }) => theme["gray-900"]};
  color: ${({ theme }) => theme["gray-100"]};
  font-size: 2rem;

  &:hover {
    transition: background-color 100ms;
    background-color: ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["gray-900"]};
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 1.5rem;
  }
`;
