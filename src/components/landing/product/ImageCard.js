import React from 'react';
import styled from 'styled-components';

import Text from './Text';

export const ImageCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 390px;
  grid-gap: 10px;
  @media screen and (max-width: 389px) {
    margin: 0 15px;
  }
`;

export const Contact = styled.div`
  a {
    font-size: 16px !important;
    line-height: 1.33 !important;
    color: #4822cf !important;
    margin: 0 !important;
    padding: 0 !important;
    cursor: pointer;
    text-decoration: underline !important;
  }
  span {
    font-size: 16px !important;
    line-height: 1.33 !important;
    color: #4822cf !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageCard = props => {
  return (
    <ImageCardContainer>
      <img draggable="false" src={props.imageUrl} width={props.imageSize} height="auto" alt="image" />
      <Text fSize={24} lHeight={36} fWeight={700} Color="#fff" content={props.title} />
      <Contact>
        <Text fSize={16} lHeight={30} fWeight={400} Color="#948CB4" content={props.content} />
        {props.linkedin && (
          <a href={props.linkedin} target="_blank">
            LInkedIn
          </a>
        )}
        {props.nolinkedin && <span>Undoxxed</span>}
      </Contact>
    </ImageCardContainer>
  );
};

export default ImageCard;
