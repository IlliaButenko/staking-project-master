import styled from 'styled-components';

export const PartnersContainer = styled.div`
  background: #09080d;
  padding: 73px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1310px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ControlButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ControlButton = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid #948cb4;
  box-sizing: border-box;
  font-size: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.85s;
  cursor: pointer;
`;
export const DisplayPartners = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-gap: 50px;
  img {
    opacity: 0.6;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1310px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const DisplayPad = styled.div`
  grid-gap: 20px;
  opacity: 0.6;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  display: flex;
  align-items: center;
  span {
    color: white;
    font-size: 35px;
    font-weight: 600;
  }
`;
