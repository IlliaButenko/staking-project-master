import styled from "styled-components";
export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 99px 0 111px 0;
`;
export const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 20px;
  text-align: center;
  transition: all 0.85s;
  * {
    max-width: 210px;
  }
  @media screen and (max-width: 1160px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 801px) {
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    margin: 0 10px;
    justify-content: center;
    * {
      width: 250px;
    }
  }
  @media screen and (max-width: 550px) {
    margin: 0 15px;
    * {
      width: 200px;
    }
  }
  @media screen and (max-width: 460px) {
    margin: auto;
    * {
      width: 150px;
    }
  }
  @media screen and (max-width: 390px) {
    margin: auto;
    * {
      width: 130px;
    }
  }
`;
