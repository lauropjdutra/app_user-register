import styled from "styled-components"

export const Footer = styled.footer`
  font-size: 14px;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  span {
    position: absolute;
    bottom: 20px;
  }

  a {
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      opacity: 0.7;
    }
  }
`