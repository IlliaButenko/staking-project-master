import styled from "styled-components";
export const RoadmapContainer = styled.div`
  background: #09080d;
`;

export const RoadmapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: auto;
  padding: 110px 0;
  max-width: 1440px;
  scroll-behavior: smooth;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: ${(props) => props.pos}px;
  transition: all 0.85s;
`;
export const ContainerOut = styled.div`
  overflow-x: scroll;
  position: relative;
  width: 90%;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  align-items: flex-start;
`;
export const Main = styled.div`
  margin-top: -75px;
  display: flex;
  flex-direction: column;
  .Midicon {
    font-size: 25px;
    color: white;
    margin-bottom: 42px;
  }
`;
export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  /* grid-gap: 17px; */
  margin-bottom: 22px;
  .iconItem {
    font-size: 25px;
    color: white;
    margin-right: 5px;
    cursor: pointer;
    color: "#4822CF";
  }
`;
export const Line = styled.div`
  border-bottom: 1px dashed white;
  width: 1200px;
  position: absolute;
  top: 195px;
  margin-left: 10px;
`;
