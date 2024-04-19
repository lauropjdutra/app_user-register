import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #00f2a9 0%, #02d5fa 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 342px;
  min-height: 70px;
  padding-left: 10px;
  margin: 30px auto 0;
  border-radius: 14px;
  box-shadow: 0px 0px 10px 0px #00000040;
  background: #eeeeee40;

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div:nth-child(2) {
    max-width: 230px;
    word-wrap: break-word;
  }

  img {
    height: 42px;
  }

  b {
    font-weight: 600;
  }

  p {
    padding: 0 10px;
    color: #222222;
    font-size: 16px;
    font-weight: 300;
  }

  button {
    display: flex;
    align-items: center;
    min-height: 100px;
    padding: 0 10px;
    background: #ff2514;
    border: none;
    border-radius: 0px 13px 13px 0px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }

    img {
      width: 15px;
    }
  }

  span {
    margin: 0 auto;
    color: #151515;
  }
`;