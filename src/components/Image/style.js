import styled from "styled-components"

export const Image = styled.img`
  margin-top: 30px;

  ${({ marginTop }) => marginTop &&`
    margin-top: 80px;
  `}
`