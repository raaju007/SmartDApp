import { Container, TimelineContainer, TimelineDone, TimelineTextContainer, TimelineTitle, Title } from './styled'

import React from 'react'
import done from '../../assets/whitepaper/done.svg';

const Roadmap = () => {
  return (
    <Container id="roadmap" className="container">
      <Title marginB="48px">Roadmap</Title>
      <TimelineContainer>
            <TimelineTitle className="anim_item">Phase 1</TimelineTitle>
            <TimelineDone ><div className="anim_item"></div></TimelineDone>
            <TimelineTextContainer className="anim_item">
                <li>16th - 18th April - Private Sale</li>
                <li>Starts on 2nd July - Pre Sale with Initial Marketing</li>
                <li>9th - 15th July - Marketing, AMA’S & Calls</li>
                <li>10th - 17th July - Public Launch on PancakeSwap with Audit</li>
                <li>5th - 10th May - Coinmarketcap and CoinGecko listing</li>
            </TimelineTextContainer>
      </TimelineContainer>
      <TimelineContainer>
            <TimelineTextContainer className="anim_item">
                <li>15th - 20th July - Cross chain with BSC-CRO</li>
                <li>20th - 30th July - Marketing, Influencers</li>
                <li>30th may - 30th August - Partnerships, Market awareness</li>
                <li>1st - 15th August - V2 of PLatform release(Solana,Matic)</li>
                <li>15th - 25th August - Solana and matic platform marketing</li>
                <li>25th - 30th August - Cross chain launch (SOL,MATIC,BSC,CRO)</li>
            </TimelineTextContainer>
            <TimelineDone><div className="anim_item"></div></TimelineDone>
            <TimelineTitle className="anim_item" position="left">Phase 2</TimelineTitle>
      </TimelineContainer>
      <TimelineContainer>
            <TimelineTitle className="anim_item">Phase 3</TimelineTitle>
            <TimelineDone last={true}><div className="anim_item"></div></TimelineDone>
            <TimelineTextContainer className="anim_item">
                <li>1st July - 1st August - Cross Chain EVM layer 2 protocol for building easy and fast dApps.</li>
                <li>1st July onwards - Marketing, Youtube,Instagram, All over internet Paid ads to raise awareness even more</li>
                <li>MORE TO BE ANNOUNCED IN THE NEAR FUTURE STAY TUNED</li>
            </TimelineTextContainer>
      </TimelineContainer>
    </Container>
  ) 
}

export default Roadmap


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