//import react and styled components
import React from "react";
import {
  RoadmapContainer,
  RoadmapContent,
  Container,
  ContainerOut,
  Item,
  DetailItem,
  Main,
  Line,
} from "./roadmap.styled";

//import icon module
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdRadioButtonChecked } from "react-icons/md";

//import custom components
import Text from "../product/Text";
import Icon from "../product/Icon";

const Roadmap = () => {
  return (
    <RoadmapContainer id="roadmap">
      <RoadmapContent>
        <Text
          fSize={60}
          fWeight={700}
          Color="#fff"
          lHeight={45}
          mWidth={800}
          tAlign="center"
          content="ROADMAP"
        />
        <Icon />
        <ContainerOut className="container-out">
          <Container>
            <Line />
            <Item>
              <Text
                fSize={120}
                fWeight={700}
                Color="#4822CF"
                lHeight={180}
                content="Q4"
              />
              <Main>
                <Text
                  fSize={30}
                  fWeight={700}
                  Color="#fff"
                  lHeight={45}
                  content="2021"
                  mBottom={33}
                />
                <MdRadioButtonChecked className="Midicon" />
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" color="#4822CF" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Token Contract Launch"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" color="#4822CF" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Initial Platform Design"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" color="#4822CF" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Marketplace Demo Live"
                  />
                </DetailItem>
              </Main>
            </Item>
            <Item>
              <Text
                fSize={120}
                fWeight={700}
                Color="#4822CF"
                lHeight={180}
                content="Q1"
              />
              <Main>
                <Text
                  fSize={30}
                  fWeight={700}
                  Color="#fff"
                  lHeight={45}
                  content="2022"
                  mBottom={33}
                />
                <MdRadioButtonChecked className="Midicon" />
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" color="#fff" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Token launch event"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" color="#fff" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="BSC marketplace live"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" color="#fff" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Establish partnership"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" color="#fff" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Awareness marketing campaign"
                  />
                </DetailItem>
              </Main>
            </Item>
            <Item>
              <Text
                fSize={120}
                fWeight={700}
                Color="#4822CF"
                lHeight={180}
                content="Q2"
              />
              <Main>
                <Text
                  fSize={30}
                  fWeight={700}
                  Color="#fff"
                  lHeight={45}
                  content="2022"
                  mBottom={33}
                />
                <MdRadioButtonChecked className="Midicon" />
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Ethereum marketplace test"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Team expansion"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Ethereum marketplace live"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Market-maker protocol test"
                  />
                </DetailItem>
              </Main>
            </Item>
            <Item>
              <Text
                fSize={120}
                fWeight={700}
                Color="#4822CF"
                lHeight={180}
                content="Q3+"
              />
              <Main>
                <Text
                  fSize={30}
                  fWeight={700}
                  Color="#fff"
                  lHeight={45}
                  content="2022"
                  mBottom={33}
                />
                <MdRadioButtonChecked className="Midicon" />
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Expansion to more blockchains"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Solana"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Avalanche"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Fantom"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="More…"
                  />
                </DetailItem>
                <DetailItem>
                  <AiOutlineCheckCircle className="iconItem" />
                  <Text
                    fSize={14}
                    fWeight={400}
                    Color="#948CB4"
                    lHeight={40}
                    content="Mobile marketplace app"
                  />
                </DetailItem>
              </Main>
            </Item>
          </Container>
        </ContainerOut>
      </RoadmapContent>
    </RoadmapContainer>
  );
};

export default Roadmap;
