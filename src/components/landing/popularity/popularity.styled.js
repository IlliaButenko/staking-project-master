import styled from "styled-components";
export const PopularityContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 38px 0 25px 0;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    text-align: center;
  }
  @media screen and (max-width: 680px) {
    img {
      width: 100%;
      margin: auto;
    }
  }
`;
export const DetailContent = styled.div`
  max-width: 410px;

  @media screen and (max-width: 1250px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
`;
