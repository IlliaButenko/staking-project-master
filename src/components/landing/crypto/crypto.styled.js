import styled from "styled-components";
import Before from "../../../asserts/before.png";
export const CryptoContainer = styled.div`
  background: #09080d;
  width: 100%;
  position: relative;
  padding: 110px 0 110px 0;
  ::before {
    content: url(${Before});
    top: -50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
export const CrytoTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: auto;
  max-width: 800px;
  @media screen and (min-width: 1000px) {
    * {
      margin-bottom: 55px;
    }
  }
  @media screen and (max-width: 999px) {
    margin: 0 50px;
  }
  @media screen and (max-width: 450px) {
    margin: 0 30px;
  } ;
`;
export const CrytoGameContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  grid-gap: 60px;
  @media screen and (max-width: 1110px) {
    flex-direction: column;
    text-align: center;
    * {
      margin-top: 10px;
    }
  }
`;
