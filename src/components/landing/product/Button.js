import React from "react";
import styled from "styled-components";

import telegram from "../../../asserts/Vector.png";

export const ButtonContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.fSize}px;
  border-color: transparent !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.flag == 0
      ? "transparent"
      : "linear-gradient(110.86deg, #57048a 9.46%, #4822cf 89.64%)"};
  border-color: ${(props) =>
    props.flag == 0 ? "rgba(255,255,255,0.1)" : "transparent"} !important;
  border-width: ${(props) => (props.flag == 0 ? 2 : 0)}px !important;
  border-style: solid;
  font-family: "Poppins" sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  border-radius: 35px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: ${(props) =>
      props.flag == 0
        ? "linear-gradient(110.86deg, #57048A 9.46%, #4822CF 89.64%)"
        : "transparent"};
    border-color: ${(props) =>
      props.flag == 0 ? "transparent" : "rgba(255,255,255,0.1)"} !important;
    border-width: ${(props) => (props.flag == 0 ? 0 : 2)}px !important;
    transition: all 0.95s;
  }

  img {
    margin-right: 10px;
  }
`;
const Button = (props) => {
  return (
    <ButtonContainer
      fSize={props.fSize}
      width={props.width}
      height={props.height}
      onClick={props.onClick}
      flag={props.flag}
    >
      {props.icon ? (
        <>
          <img src={telegram} width={30} alt="telegram" />
          <span>{props.content}</span>
        </>
      ) : (
        props.content
      )}
    </ButtonContainer>
  );
};

export default Button;
