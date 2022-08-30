import { Container, ImageContainer, SubText, TimelineContainer, TimelineDone, TimelineTextContainer, TimelineTitle, Title, TokenomicsContainer, Wrapper } from './styled'

import React from 'react'
import buyTax from '../../assets/whitepaper/buyTax.svg';
import done from '../../assets/whitepaper/done.svg';
import privateSale from '../../assets/whitepaper/private.svg'
import publicSale from '../../assets/whitepaper/public.svg';
import sellTax from '../../assets/whitepaper/sellTax.svg';

const WhitePaper = () => {
  
  return (
    <Container id="roadmap" className="container">
      <Title>Presale details</Title>
      <ImageContainer>
        <img src={privateSale} alt="private sale" className="anim_item"/>
        <img src={publicSale} alt="public sale" className="anim_item"/>
      </ImageContainer>
      <Title position="left" marginB="60px">Tokenomics</Title>
      <Wrapper>
        <SubText>1,000,000,000 Total Supply 39.6% private + public sale 4% marketing/development/team 55.4% liquidity</SubText>     
        <TokenomicsContainer>
            <img src={buyTax} alt="buy tax" className="anim_item"/>
            <img src={sellTax} alt="sell tax" className="anim_item"/>
        </TokenomicsContainer>
      </Wrapper>
      <Title marginB="48px">Roadmap</Title>
      <TimelineContainer>
            <TimelineTitle className="anim_item">Phase 1</TimelineTitle>
            <TimelineDone><div className="anim_item"><img src={done} alt="done" /></div></TimelineDone>
            <TimelineTextContainer className="anim_item">
                <li>16th - 18th April - Private Sale</li>
                <li>18th - 25th April - Marketing, AMA’S</li>
                <li>26th - 30th April - Pre Sale</li>
                <li>30th Apr - 5th May - Marketing, Calls</li>
                <li>5th - 10th May - Public Launch on PancakeSwap</li>
                <li>5th - 10th May - V1 of PLatform release(BSC,CRO)</li>
                <li>5th - 10th May - Coinmarketcap and CoinGecko listing</li>
                <li>5th - 10th May - Audit and Testing</li>
            </TimelineTextContainer>
      </TimelineContainer>
      <TimelineContainer>
            <TimelineTextContainer className="anim_item">
                <li>15th - 20th May - Cross chain with BSC-CRO</li>
                <li>20th - 30th May - Marketing, Influencers</li>
                <li>30th may - 30th June - Partnerships, Market awareness</li>
                <li>1st - 15th June - V2 of PLatform release(Solana,Matic)</li>
                <li>15th - 25th June - Solana and matic platform marketing</li>
                <li>25th - 30th June - Cross chain launch (SOL,MATIC,BSC,CRO)</li>
            </TimelineTextContainer>
            <TimelineDone><div className="anim_item"><img src={done} alt="done" /></div></TimelineDone>
            <TimelineTitle className="anim_item" position="left">Phase 2</TimelineTitle>
      </TimelineContainer>
      <TimelineContainer>
            <TimelineTitle className="anim_item">Phase 3</TimelineTitle>
            <TimelineDone last={true}><div className="anim_item"><img src={done} alt="done" /></div></TimelineDone>
            <TimelineTextContainer className="anim_item">
                <li>1st July - 1st August - Cross Chain EVM layer 2 protocol for building easy and fast dApps.</li>
                <li>1st July onwards - Marketing, Youtube,Instagram, All over internet Paid ads to raise awareness even more</li>
                <li>MORE TO BE ANNOUNCED IN THE NEAR FUTURE STAY TUNED</li>
            </TimelineTextContainer>
      </TimelineContainer>
    </Container>
  ) 
}

export default WhitePaper


// const tokenomicData = [
//     {title: 'Phase 1', text: 
//     ['16th - 18th April - Private Sale', '18th - 25th April - Marketing, AMA’S', '26th - 30th April - Pre Sale', '30th Apr - 5th May - Marketing, Calls',
//     '5th - 10th May - Public Launch on PancakeSwap', '5th - 10th May - V1 of PLatform release(BSC,CRO)', '5th - 10th May - Coinmarketcap and CoinGecko listing',
//     '5th - 10th May - Audit and Testing']},
//     {title: 'Phase 2', text: 
//     ['15th - 20th May - Cross chain with BSC-CRO', '20th - 30th May - Marketing, Influencers', '30th may - 30th June - Partnerships, Market awareness', '1st - 15th June - V2 of PLatform release(Solana,Matic)',
//     '15th - 25th June - Solana and matic platform marketing', '25th - 30th June - Cross chain launch (SOL,MATIC,BSC,CRO)']},
//     {title: 'Phase 3', text: 
//     ['1st July - 1st August - Cross Chain EVM layer 2 protocol for building easy and fast dApps.', '1st July onwards - Marketing, Youtube,Instagram, All over internet Paid ads to raise awareness even more',
//     'MORE TO BE ANNOUNCED IN THE NEAR FUTURE STAY TUNED']},
// ]