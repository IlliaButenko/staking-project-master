import React from "react";
import Content from "../content/Content";
import Text from "../product/Text";
import ImageCard from "../product//ImageCard";
import { CryptoContainer, CrytoTitle, CrytoGameContent } from "./crypto.styled";
import ConnectGame from "../../../asserts/Connect.png";
import EarnGame from "../../../asserts/Earn.png";
import ExploreGame from "../../../asserts/Explore.png";
import Icon from "../product/Icon";
const Crypto = () => {
  return (
    <CryptoContainer>
      <Content>
        <CrytoTitle>
          <Text
            fSize={30}
            Color="#FFFFFF"
            lHeight={45}
            fWeight={700}
            content="Why CryptoLoot?"
          />
          <Icon />
          <Text
            fSize={18}
            Color="#948CB4"
            lHeight={30}
            fWeight={400}
            content="CryptoLoot is the NFT marketplace specifically designed to Buy, Sell & Trade all DeFi In-Game NFTs in one convenient place."
          />
        </CrytoTitle>
        <CrytoGameContent>
          <ImageCard
            imageSize={317}
            imageUrl={ConnectGame}
            title="Connect all Games"
            content="One click and all your DeFi In-Game NFTs are connected to our marketplace. Just set your price and start earning."
          />
          <ImageCard
            imageSize={317}
            imageUrl={EarnGame}
            title="Play-to-Earn"
            content="In collaboration with various DeFi games, players will be able to earn the $CLOOT token by completing challenges in the game."
          />
          <ImageCard
            imageSize={317}
            imageUrl={ExploreGame}
            title="Explore by Game"
            content="Explore new collectibles of your favorite game in the Explore Section. Discover new exclusive items and place a bid on them right away."
          />
        </CrytoGameContent>
      </Content>
    </CryptoContainer>
  );
};

export default Crypto;
