import React from "react";
import styled from "styled-components";

export const TextContainer = styled.div`
  font-size: ${(props) => props.fSize}px;
  color: ${(props) => props.Color};
  font-weight: ${(props) => props.fWeight};
  line-height: ${(props) => props.lHeight}px;
  text-align: ${(props) => props.tAlign};
  max-width: ${(props) => props.mWidth}px;
  margin-bottom: ${(props) => (props.mBottom != 0 ? props.mBottom : 0)}px;

  font-family: "Poppins" sans-serif;
  font-style: normal;
`;
const Text = (props) => {
  return (
    <TextContainer
      fSize={props.fSize}
      fWeight={props.fWeight}
      Color={props.Color}
      lHeight={props.lHeight}
      mBottom={props.mBottom}
      tAlign={props.tAlign}
      mWidth={props.mWidth}
    >
      {props.content}
    </TextContainer>
  );
};

export default Text;
