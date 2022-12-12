import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin-left: 48px;
  width: 18rem;
  height: 6rem;
  background-color: ${({ theme }) => theme["gray-900"]};
  border: 1px solid ${({ theme }) => theme["gray-900"]};
  color: ${({ theme }) => theme["gray-100"]};
  font-size: 2rem;

  &:hover {
    transition: background-color 100ms;
    background-color: ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["gray-900"]};
  }
`;
