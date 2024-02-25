import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 342px;
  height: 74px;
  margin: 100px auto 0;
  border-radius: 14px;
  background: ${({ backTheme }) => (backTheme ? "none" : "#000000cc")};
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  border: ${({ backTheme }) => backTheme ? "1px solid #ffffff" : "none"};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${({ backTheme }) => backTheme ? "rotate(180deg)" : ""};
  }
`