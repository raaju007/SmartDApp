import { CardContainer, CardImage, CardText, CardWrapper, Container, Text, Title } from './styled'

import More from '../common/more'
import React from 'react'
import image from '../../assets/portfolio/1.png'
import image2 from '../../assets/portfolio/2.png'
import image3 from '../../assets/portfolio/3.png'
import image4 from '../../assets/portfolio/4.png'
import image5 from '../../assets/portfolio/5.png'
import image6 from '../../assets/portfolio/6.png'

const Portfolio = () => {
  return (
    <Container id='portfolio' className='container anim_item'>
        <Title>Professionally Designed Website Templates</Title>
        <Text>Choose from 15+ customizable website templates that are built to meet your business needs.</Text>
        <More text="See All Website Templates" position="center"/>
        <CardWrapper>
            <CardContainer className='anim_item'>
                <CardImage src={image}/>
                <CardText>Trading Crypto</CardText>
            </CardContainer>
            <CardContainer className='anim_item'>
                <CardImage src={image2}/>
                <CardText>Crypto Buy and Sell</CardText>
            </CardContainer>
            <CardContainer className='anim_item'>
                <CardImage src={image3}/>
                <CardText>Cryptocurrency</CardText>
            </CardContainer>
            <CardContainer className='anim_item'>
                <CardImage src={image4}/>
                <CardText>Crypto Exchange</CardText>
            </CardContainer>
            <CardContainer className='anim_item'>
                <CardImage src={image5}/>
                <CardText>Investment</CardText>
            </CardContainer>
            <CardContainer className='anim_item'>
                <CardImage src={image6}/>
                <CardText>Sell NFTs</CardText>
            </CardContainer>
        </CardWrapper>
    </Container>
  )
}

export default Portfolio;