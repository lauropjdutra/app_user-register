import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 342px;
  height: 74px;
  margin: 70px auto 20px;
  border-radius: 14px;
  background: ${({ backTheme }) => (backTheme ? "none" : "#151515")};
  color: ${({ backTheme }) => backTheme ? "#151515" : "#eeeeee"};
  font-size: 18px;
  font-weight: 600;
  border: ${({ backTheme }) => backTheme ? "1px solid #151515" : "none"};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${({ backTheme }) => backTheme ? "rotate(180deg)" : ""};
    filter: ${({ backTheme }) => backTheme ? "invert(85%)" : ""};
  }
`