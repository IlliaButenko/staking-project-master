//import react, styled-components module
import React from 'react';
import styled from 'styled-components';

//import section components
import Navbar from './layout/navbar';
import Crypto from './crypto/crypto';
import Feature from './feature/feature';
import Popularity from './popularity/popularity';
import Team from './team/team';
import Partners from './partners/partners';
import Roadmap from './roadmap/roadmap';
import TokenInfo from './tokeninfo';
import Footer from './layout/footer';

//section styled
export const LandingPageContainer = styled.div`
  position: relative;
  background-color: #121117;
`;

const Index = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      <Feature />
      <Crypto />
      <Popularity />
      <Roadmap />
      <TokenInfo />
      <Team />
      <Partners />
      <Footer />
    </LandingPageContainer>
  );
};

export default Index;
