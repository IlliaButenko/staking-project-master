import React from "react";
import styled from "styled-components";
export const ContentContainer = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 50px;
  }
  @media screen and (max-width: 1439px) {
    margin: 0 50px;
  }
  @media screen and (max-width: 735px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 0 !important;
  }
`;
const Content = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;
