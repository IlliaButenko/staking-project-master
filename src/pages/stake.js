import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { BigNumber, ethers } from 'ethers';

import {
  StakeContainer,
  StakeCard,
  TabHeader,
  TabHeaderItem,
  TabContent,
  ContentSection,
  LeftSection,
  Form,
  FormInput,
  FormLabel,
  Icon,
  StyledButton,
  Wanning,
  ButtonLabel,
  Description,
  RightSection,
  StyledCard,
  RewardBlock,
  ClaimRewardBtn,
  SpanMax,
} from './stake.styled';
import Navbar from '../components/landing/layout/navbar';
import Footer from '../components/landing/layout/footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

import config from '../config';

const N = num => Math.floor(Number(num) * 1e8) / 1e8;

const Stake = () => {
  const history = useHistory();
  const [tabActive, setTabActive] = useState('stake');
  const [stakeAmount, setStakeAmount] = useState('');
  const [stakeWarnning, setStakeWanning] = useState('');
  const [claimWarning, setClaimWarning] = useState('');
  const [userInfo, setUserInfo] = useState({ balance: '0', rewardable: '0', rewards: '0', stakingAmount: '0', totalStakingAmount: '0' });

  const handleTabClick = tabState => {
    setTabActive(tabState);
  };

  useEffect(() => {
    const t_walletAddress = localStorage.getItem('walletAddress');
    if (!t_walletAddress) {
      return history.push('/wallet-connect');
    }
    getInfo(t_walletAddress);
  }, []);

  const getInfo = async wallet => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const staking = new ethers.Contract(config.staking.contract, config.staking.abi, provider);
      const userInfo = await staking.getStakeInfo(wallet);

      const token = new ethers.Contract(config.cloot.contract, config.cloot.abi, provider);
      const balance = await token.balanceOf(wallet);

      setUserInfo({
        balance: ethers.utils.formatUnits(balance, config.cloot.decimals),
        rewardable: ethers.utils.formatUnits(userInfo._rewardable, config.cloot.decimals),
        rewards: ethers.utils.formatUnits(userInfo._rewards, config.cloot.decimals),
        stakingAmount: ethers.utils.formatUnits(userInfo._staking, config.cloot.decimals),
        totalStakingAmount: ethers.utils.formatUnits(userInfo._total, config.cloot.decimals),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const stake = async () => {
    if (!parseFloat(stakeAmount) || parseFloat(stakeAmount) <= 0) {
      setStakeWanning('Please input the number of token correctly');
      return;
    } else if (parseFloat(userInfo.balance) < parseFloat(stakeAmount)) {
      setStakeWanning(`You have not enough token to stake ${parseFloat(stakeAmount)} tokens`);
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const value = ethers.utils.parseUnits(stakeAmount, config.cloot.decimals);
      const token = new ethers.Contract(config.cloot.contract, config.cloot.abi, signer);
      const transferTx = await token.approve(config.staking.contract, value);
      await transferTx.wait();
      const staking = new ethers.Contract(config.staking.contract, config.staking.abi, signer);
      const stakingTx = await staking.stake(value);
      await stakingTx.wait();
    } catch (error) {
      console.log(error);
      setStakeWanning(`You can not stake tokens`);
    }
  };

  const unstake = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const staking = new ethers.Contract(config.staking.contract, config.staking.abi, signer);
      const unstakingTx = await staking.unstaking();
      await unstakingTx.wait();
    } catch (error) {
      console.log(error);
    }
  };

  const claimRewards = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const staking = new ethers.Contract(config.staking.contract, config.staking.abi, signer);
      const claimRewardTx = await staking.claimRewards();
      await claimRewardTx.wait();
    } catch (error) {
      console.log(error);
      setClaimWarning('You can not claim rewards');
    }
  };

  return (
    <div className="main">
      <Navbar />
      <StakeContainer>
        <h3>staking</h3>
        <StakeCard>
          <TabHeader>
            <TabHeaderItem active={tabActive === 'stake' ? true : false} onClick={() => handleTabClick('stake')}>
              Stake
            </TabHeaderItem>
            <TabHeaderItem active={tabActive === 'unstake' ? true : false} onClick={() => handleTabClick('unstake')}>
              Unstake
            </TabHeaderItem>
          </TabHeader>
          {tabActive === 'stake' ? (
            <TabContent>
              <p>Stake your CLOOT and start earning.</p>
              <ContentSection>
                <LeftSection>
                  <div />
                  <Form>
                    <FormLabel>
                      <span>Your balance</span>
                      <span>{N(userInfo.balance)} CLOOT</span>
                    </FormLabel>
                    <FormInput>
                      <input
                        value={stakeAmount}
                        type="number"
                        placeholder="0.00000000"
                        onChange={e => {
                          setStakeWanning('');
                          setStakeAmount(e.target.value);
                        }}
                      />
                      <div>
                        <SpanMax onClick={() => setStakeAmount(userInfo.balance)}>MAX</SpanMax>
                        <Icon>
                          <SiBinance />
                        </Icon>
                      </div>
                    </FormInput>
                    <Wanning>{stakeWarnning}</Wanning>
                  </Form>
                  <StyledButton onClick={() => stake()}>
                    <ButtonLabel>
                      <FaLock />
                      <span>Stake</span>
                    </ButtonLabel>
                  </StyledButton>
                  <Description>Your CLOOT tokens will be locked for 7 days. After that time, you're free to withdraw any time.</Description>
                </LeftSection>
                <RightSection>
                  <Wanning>{claimWarning}</Wanning>
                  <StyledCard>
                    <RewardBlock>
                      <span className="top">Reward</span>
                      <ClaimRewardBtn onClick={() => claimRewards()}>
                        <ButtonLabel>
                          <span>Claim reward</span>
                        </ButtonLabel>
                      </ClaimRewardBtn>
                    </RewardBlock>
                    <hr />
                    <span className="bottom">{N(userInfo.rewardable)}</span>
                  </StyledCard>
                  <StyledCard>
                    <span className="top">Staked</span>
                    <hr />
                    <span className="bottom">{N(userInfo.stakingAmount)}</span>
                  </StyledCard>
                </RightSection>
              </ContentSection>
            </TabContent>
          ) : (
            <TabContent>
              <p>Stake your CLOOT and start earning.</p>
              <ContentSection>
                <LeftSection>
                  <div />
                  <Form>
                    <FormLabel>
                      <span>Your balance</span>
                      <span>{userInfo.balance} CLOOT</span>
                    </FormLabel>
                  </Form>
                  <StyledButton onClick={() => unstake()}>
                    <ButtonLabel>
                      <FaLock />
                      <span>UnStake</span>
                    </ButtonLabel>
                  </StyledButton>
                  <Description>Your CLOOT tokens will be locked for 7 days. After that time, you're free to withdraw any time.</Description>
                </LeftSection>
                <RightSection>
                  <Wanning>{claimWarning}</Wanning>
                  <StyledCard>
                    <RewardBlock>
                      <span className="top">Reward</span>
                      <ClaimRewardBtn onClick={() => claimRewards()}>
                        <ButtonLabel>
                          <span>Claim reward</span>
                        </ButtonLabel>
                      </ClaimRewardBtn>
                    </RewardBlock>
                    <hr />
                    <span className="bottom">{N(userInfo.rewardable)}</span>
                  </StyledCard>
                  <StyledCard>
                    <span className="top">Staked</span>
                    <hr />
                    <span className="bottom">{N(userInfo.stakingAmount)}</span>
                  </StyledCard>
                </RightSection>
              </ContentSection>
            </TabContent>
          )}
        </StakeCard>
      </StakeContainer>
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default Stake;
