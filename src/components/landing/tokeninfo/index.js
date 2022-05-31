import React from 'react';
import { SiBinance } from 'react-icons/si';

import { StyledContainer, TitleSection, Content, Card, CardContent, CardHeading } from './styled';
//import custom components
import Text from '../product/Text';
import Icon from '../product/Icon';

const TokenInfo = () => {
  return (
    <StyledContainer>
      <TitleSection>
        <Text fSize={32} fWeight={700} Color="#fff" lHeight={45} mWidth={800} tAlign="center" content="Token Info" />
        <Icon />
      </TitleSection>
      <Content>
        <Card>
          <CardContent>
            <h4>Token Name</h4>
            <p>CryptoLoot</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h4>TOKEN TICKER</h4>
            <p>CLOOT</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h4>TOTAL MAX SUPPLY</h4>
            <p>100,000,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardHeading>
              <SiBinance />
              <h4>BSC TOKEN CONTRACT</h4>
            </CardHeading>

            <a href="https://bscscan.com/token/0xbf52f597f327d7b682dbaa562536a7399b6aa472" target="_blank">
              0xbf52f59...a472
            </a>
          </CardContent>
        </Card>
      </Content>
    </StyledContainer>
  );
};

export default TokenInfo;
