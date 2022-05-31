import styled from "styled-components";
export const FeatureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 110px 0;
  z-index: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .HeaderImage {
    position: absolute;
    right: 0;
    max-width: 700px;
    z-index: -1;
    transition: all 0.85s;
    @media screen and (max-width: 1248px) {
      opacity: 0.2;
    }

    @media screen and (max-width: 1000px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      top: -100px;
    }
  }
`;
export const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 60%; */
  max-width: 740px;

  @media screen and (max-width: 900px) {
    z-index: 0;
  }
  @media screen and (max-width: 766px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
  }
`;
export const StateContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  grid-gap: 30px;
  max-width: 630px;
  margin-top: 50px;
  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 10px;
  }
  align-items: start;
`;
export const StateItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  * {
    margin-top: 13px;
  }
  @media screen and (max-width: 1400px) {
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 421px) {
    * {
      font-size: 16px !important;
    }
  }
  @media screen and (max-width: 341px) {
    * {
      font-size: 14px !important;
    }
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  margin-top: 70px;
  transition: all 0.85s;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Detail = styled.div`
  margin-top: 25px;
  @media screen and (max-width: 600px) {
    margin: 15px;
  }
`;
export const HeaderContent = styled.div`
  @media screen and (max-width: 425px) {
    margin: 0 5px;
    * {
      font-size: 50px !important;
    }
  }
  @media screen and (max-width: 375px) {
    margin: 0 5px;
    * {
      font-size: 40px !important;
    }
  }
`;
