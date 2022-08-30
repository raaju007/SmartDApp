import {Container, StepContainer, Text, Title, Wrapper} from './styled'

import More from '../common/more'
import React from 'react'

const HowToCreate = () => {
  return (
    <Container id="instruction" className="anim_item">
      <div className="container">
        <Title>How to create a dapp/ website first time</Title>
        <Text>Follow these 6 simple steps to create a website today.</Text>
        <StepContainer>
            <li>Sign up for a free website builder. Choose what kind of website you want to create.</li>
            <li>Customize a template or get a website made for you. Choose your starting point.</li>
            <li>Drag and drop 100s of design features. Add text, galleries, videos, vector art and more.</li>
            <li>Get ready for business. Add an online store, booking system, members area and blog.</li>
            <li>Publish your website and go live. Start building your professional online presence.</li>
            <li>Drive traffic to your site. Use advanced SEO tools and integrated marketing solutions.</li>
        </StepContainer>
        <Wrapper>
          <More text="Get Started"/>
          <More text="Learn How to Create a Website"/>
        </Wrapper>
      </div>
    </Container>
  )
}

export default HowToCreate