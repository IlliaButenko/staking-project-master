//import react and styled components
import React from 'react';
import styled from 'styled-components';

//custom components
import Content from '../content/Content';
import Text from '../product/Text';

//image
import Mark from '../../../asserts/Union.png';
import Telegram from '../../../asserts/Telegram.png';
import Twitter from '../../../asserts/Twitter.png';
import Gmail from '../../../asserts/gmail.png';

//Icons
import { MdEmail } from 'react-icons/md';

//set section style
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 400px;
  bottom: 0;
  padding-top: 100px;
  position: static;
  align-items: flex-start;
  transition: all 0.85s;
  @media screen and (max-width: 850px) {
    grid-gap: 50px;
  }
  @media screen and (max-width: 735px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  grid-gap: 30px;
  a {
    text-decoration: none;
    color: #948cb4;
  }
  @media screen and (max-width: 735px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  * {
    font-size: 16px;
    line-height: 24px;
    color: #948cb4;
    cursor: pointer;
  }
  @media screen and (max-width: 580px) {
    text-align: left;
  }
  transition: all 0.85s;
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
  margin-bottom: 15px;
  transition: all 0.85s;
`;
export const MdemailIconOut = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #27262c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSection = styled.div`
  display: flex;
  grid-gap: 50px;
  @media screen and (max-width: 735px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Footer = () => {
  return (
    <Content>
      <FooterContainer>
        <LeftSection>
          <Item>
            <img draggable="false" src={Mark} alt="mark" width="102px" height="auto" />
            <Text
              fSize={16}
              fWeight={400}
              Color="#948CB4"
              lHeight={30}
              content="The NFT Marketplace specifically designed for trading all GameFi NFT assets."
            />
          </Item>
          <Item>
            <Text fSize={24} fWeight={700} Color="#fff" lHeight={36} content="Business" />
            <LinkGroup>
              <a style={{ color: '#948cb4' }} href="https://cryptoloot.gitbook.io/cryptoloot" target="_blank">
                Documentation
              </a>
              <a style={{ color: '#948cb4' }} href="https://drive.google.com/file/d/1vgzK40eKr0mU4B8mBHsiK2hoEE8Xgg2W/view" target="_blank">
                Pitch Deck
              </a>
              <a style={{ color: '#948cb4' }} href="https://cryptoloot.gitbook.io/cryptoloot/help/privacy-policy" target="_blank">
                Privacy Policy
              </a>
              <a style={{ color: '#948cb4' }} href="https://cryptoloot.gitbook.io/cryptoloot/help/terms-and-conditions" target="_blank">
                Terms of service
              </a>
            </LinkGroup>
          </Item>
        </LeftSection>
        <Item>
          <Text fSize={24} fWeight={700} Color="#fff" lHeight={36} content="Community" />
          <IconGroup>
            <a href="https://t.me/CryptoLoot_trade" target="_blank" style={{ color: '#948cb4' }}>
              <img draggable="false" src={Telegram} alt="telegram" width="50px" height="50px" />
            </a>
            <a href="https://twitter.com/CryptoLootTrade" target="_blank" style={{ color: '#948cb4' }}>
              <img draggable="false" src={Twitter} alt="Twitter" width="50px" height="50px" />
            </a>
            <a href="https://contact@cryptoloot.trade" target="_blank">
              <MdemailIconOut>
                <MdEmail className="mdemail" />
              </MdemailIconOut>
            </a>
          </IconGroup>
          <Text fSize={12} fWeight={400} Color="#948CB4" lHeight={30} content={`©${new Date().getFullYear()} CryptoLoot, All Rights Reserved.`} />
        </Item>
      </FooterContainer>
    </Content>
  );
};

export default Footer;
