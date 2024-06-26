import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(90deg, #00f2a9 0%, #02d5fa 100%);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Label = styled.p`
  width: 342px;
  padding: 0 25px;
  margin: 34px auto 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 0 25px;
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  color: #222222;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  outline: none;

  &::placeholder {
    color: #565656;
    font-weight: 300;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;