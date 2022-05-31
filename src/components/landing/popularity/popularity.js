//import react and styled components
import React from "react";
import { PopularityContainer, DetailContent } from "./popularity.styled";

//import custom components
import Text from "../product//Text";
import Content from "../content/Content";
import Icon from "../product//Icon";

//import image
import Money from "../../../asserts/money.png";

const Popularity = () => {
  return (
    <Content>
      <PopularityContainer>
        <img
          draggable="false"
          src={Money}
          alt="money"
          width="607px"
          height="auto"
        />
        <DetailContent>
          <Text
            fSize={30}
            fWeight={700}
            Color="#FFFFFF"
            lHeight={45}
            content="Growing Popularity of DeFi Games"
          />
          <Icon />
          <Text
            fSize={18}
            fWeight={400}
            Color="#948CB4"
            lHeight={30}
            content="DeFi games have become more and more popular since the start of 2021. Where most of the In-Game assets, items, collectibles and rewards are available in the form of ownable NFTs."
          />
        </DetailContent>
      </PopularityContainer>
    </Content>
  );
};

export default Popularity;
