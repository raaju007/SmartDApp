import {Card, CardContainer, CardText, CardTitle, Container, ImageContainer, Text, TextContainer, Title, Wrapper} from './styled'

import More from '../common/more';
import React from 'react'
import chrome from '../../assets/instruction/chrome.png';
import edit from '../../assets/instruction/monitor-mobbile.png';
import feature from '../../assets/instruction/mouse-circle.png';
import main from '../../assets/instruction/Component.png';
import pen from '../../assets/instruction/pen-tool-2.png';
import pen2 from '../../assets/instruction/pen.svg';

const Instruction = () => {
  return (
    <Container id='creation' className='container anim_item' >
        <Title>Build Your Unique<br />Online Presence</Title>
        <Text>To create your own website, follow these steps:</Text>
        <Wrapper>
            <CardContainer>
                {data.map((el, idx) => 
                    <Card key={idx * 4} first={idx === 0}>
                        <div className="image"><img src={el.image} alt="" /></div>
                        <TextContainer>
                            <CardTitle>{el.title}</CardTitle>
                            <CardText>{el.text}</CardText>
                        </TextContainer>
                    </Card>
                )}
            </CardContainer>
            <ImageContainer>
                <img src={main} alt="main" />
                <img src={pen2} alt="pen" className="pen" />
            </ImageContainer>
        </Wrapper>
        <More text="Start Now"/> 
    </Container>
  )
}

export default Instruction

const data = [
    {title: 'Customize your site', text: 'Pick a template and customize anything, or answer a few questions and get a free website designed just for you.', image: `${pen}`},
    {title: 'Add advanced features', text: 'Start your own blog, add an online store and accept bookings online. You can always add more features as you grow.', image: `${feature}`},
    {title: 'Edit your mobile view', text: 'Check out the mobile-optimized version of your site. Switch to the Mobile Editor to personalize it even more.', image: `${edit}`},
    {title: 'Optimize for search engines', text: 'Answer a few questions about your website, location and keywords and get a personalized SEO plan to get found online.', image: `${chrome}`},
]