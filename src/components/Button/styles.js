import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.light_green};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  font-size: 0.875rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark_green};
  }
`;

export const Icon = styled.img`
  margin-right: 10px;
`;
