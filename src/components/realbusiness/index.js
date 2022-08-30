import {AccordionWrapper, Container, ImageContainer, PromoteImageContainer, PromoteTextContainer, PromoteWrapper, Text, Title, Wrapper} from './styled'

import Accordion from '../common/accordion'
import More from '../common/more'
import React from 'react'
import bscScan from '../../assets/hero/bscScan.svg'
import chat from '../../assets/hero/chat.png'
import metric from '../../assets/metric.png'
import promote from '../../assets/promote.png'

const RealBusiness = () => {
  return (
    <Container id="">
      <Title>Prove the Real Business<br /> ROI of Social Media</Title>
      <Wrapper className="anim_item">
        <AccordionWrapper>
          {data.map((el, idx) => 
            <Accordion key={idx * 3} isPopular={idx === 0} text={el.text} title={el.title}/>
          )}
        </AccordionWrapper>
        <ImageContainer>
          <img src={metric} className="metric" alt="main" />
          <img src={bscScan} className="scan" alt="scan" />
        </ImageContainer>
      </Wrapper>
      <PromoteWrapper className="anim_item">
          <PromoteImageContainer>
            <img src={promote} className="promote" alt="promote" />
            <img src={chat} className="chat" alt="chat" />
          </PromoteImageContainer>
          <PromoteTextContainer>
            <Title>Manage, Promote and Grow Your Business</Title>
            <Text>
              Create a website with the SmartDApp website builder and use the built-in professional business suite 
              to promote and manage your business—all in one place. Generate leads and drive conversions with Email Marketing, 
              Facebook Ads, Landing Pages and customer management tools. 
              Then track your success and make data-driven decisions on how to improve with SmartDApp Analytics.
            </Text>
            <More text="Get Started"/>
          </PromoteTextContainer>
      </PromoteWrapper>
    </Container>
  )
}

export default RealBusiness

const data = [
  {title: 'Correlation Analysis', text: "Receive heartfelt contributions instantly & straight to your bank. Guests can choose any amount of money to give, using all major credit cards. It's simple, safe, and 100% secure."},
  {title: 'Drag-and-Drop Dashboard', text: "Receive heartfelt contributions instantly & straight to your bank. Guests can choose any amount of money to give, using all major credit cards. It's simple, safe, and 100% secure."},
  {title: 'Smart Trend Detection', text: "Receive heartfelt contributions instantly & straight to your bank. Guests can choose any amount of money to give, using all major credit cards. It's simple, safe, and 100% secure."},
  {title: 'Correlation Analysis', text: "Receive heartfelt contributions instantly & straight to your bank. Guests can choose any amount of money to give, using all major credit cards. It's simple, safe, and 100% secure."},
]