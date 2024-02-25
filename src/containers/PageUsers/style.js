import styled from "styled-components"
import Background from "../../assets/bg-signup.svg"

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 342px;
  height: 58px;
  padding: 0 10px;
  margin: 30px auto 0;
  border-radius: 14px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  border: none;
  outline: none;

  p:first-child {
    width: 50px;
    text-align: left;
  }

  p {
    text-align: center;
    width: 80px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }

  span {
    color: #ffffff;
  }
`;