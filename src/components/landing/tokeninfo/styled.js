import styled from 'styled-components';

export const StyledContainer = styled.div`
  background: #09080d;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  @media screen and (max-width: 1250px) {
    min-height: 450px;
  }
  @media screen and (max-width: 650px) {
    min-height: 650px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  grid-gap: 5px;
  @media screen and (max-width: 1250px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  max-width: 301px;
  width: 301px;
  height: 114px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(72, 34, 207);
`;

export const CardHeading = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  svg {
    color: rgb(244, 186, 89);
    width: 18px;
    height: 18px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    line-height: 2;
    text-transform: uppercase;
    color: white;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.33;
    color: white;
    margin: 0;
    padding: 0;
  }

  a {
    font-size: 1.5rem !important;
    font-weight: 800 !important;
    line-height: 1.33 !important;
    color: white !important;
    margin: 0 !important;
    padding: 0 !important;
    text-decoration: underline !important;
  }
`;
