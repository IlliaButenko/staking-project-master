import React from "react";
import Button from "../product/Button";
import {
  FeatureContainer,
  FeatureContent,
  StateContent,
  StateItem,
  ButtonGroup,
  Detail,
  HeaderContent,
} from "./feature.styled";
import Text from "../product/Text";
import Graph from "../../../asserts/graph.png";
import Bolt from "../../../asserts/bolt.png";
import Budget from "../../../asserts/budget.png";
import HeadLogo from "../../../asserts/HeadLogo.png";
import Content from "../content/Content";
const Feature = () => {
  return (
    <Content>
      <FeatureContainer>
        <FeatureContent>
          <HeaderContent>
            <Text
              fSize={55}
              Color="#fff"
              fWeight={700}
              lHeight={72}
              content="The Future of "
            />
            <Text
              fSize={55}
              Color="#fff"
              fWeight={700}
              lHeight={72}
              content="GameFi Marketplaces"
            />
          </HeaderContent>
          <Detail>
            <Text
              fSize={20}
              Color="#948CB4"
              fWeight={500}
              lHeight={36}
              content="The NFT Marketplace specifically designed for"
            />
            <Text
              fSize={20}
              Color="#948CB4"
              fWeight={500}
              lHeight={36}
              content="trading all GameFi NFT assets."
            />
          </Detail>
          <StateContent>
            <StateItem>
              <img
                draggable="false"
                src={Graph}
                alt="graph"
                width="31px"
                height="auto"
              />
              <Text
                fSize={18}
                Color="#948CB4"
                fWeight={400}
                lHeight={30}
                content="Buy, Sell & Discover Gamify NFTs"
              />
            </StateItem>
            <StateItem>
              <img
                draggable="false"
                src={Bolt}
                alt="graph"
                width="30px"
                height="auto"
              />
              <Text
                fSize={18}
                Color="#948CB4"
                fWeight={400}
                lHeight={30}
                content="All Games, One Marketplace"
              />
            </StateItem>
            <StateItem>
              <img
                draggable="false"
                src={Budget}
                alt="graph"
                width="27px"
                height="auto"
              />
              <Text
                fSize={18}
                Color="#948CB4"
                fWeight={400}
                lHeight={30}
                content="Earn CLOOT by playing & trading"
              />
            </StateItem>
          </StateContent>
          <ButtonGroup>
            <a href="https://cryptoloot.trade/auctions">
              <Button
                content="Visit Marketplace Demo"
                width={280}
                height={70}
                fSize={18}
                flag={1}
              />
            </a>
            <a href="https://t.me/CryptoLoot_trade">
              <Button
                content="Join our Community"
                width={280}
                height={70}
                fSize={18}
                icon="true"
                flag={0}
              />
            </a>
          </ButtonGroup>
        </FeatureContent>
        <img
          draggable="false"
          className="HeaderImage"
          src={HeadLogo}
          alt="logo"
        />
      </FeatureContainer>
    </Content>
  );
};

export default Feature;
