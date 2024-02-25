import styled from "styled-components";
import Background from "../../assets/bg-login.svg";

export const Container = styled.div`
  min-height: 100vh;
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Label = styled.p`
  width: 342px;
  padding: 0 25px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 0 25px;
  margin: 0 auto 34px;
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  color: #ffffff;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  border: none;
  outline: none;

  &::placeholder {
    color: #ffffffaa;
    font-weight: 300;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;