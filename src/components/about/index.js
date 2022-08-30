import {Block, BrandsContainer, Button, Container, ImageContainer, PrimaryButton, SubText, Text, TextContainer, Title, Wrapper} from './styled'

import React from 'react'
import Slider from "react-slick";
import about from '../../assets/about/about.png'
import arrow from '../../assets/icons/arrow.svg'
import coingecko from '../../assets/about/coingecko.png'
import marketcap from '../../assets/about/coinmarketcap.png'
import moralis from '../../assets/about/moralis.png'
import scan from '../../assets/about/bscScan.png'

const About = () => {

    const settings = {
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
            }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            speed: 4000,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 4000,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
            }
        }
        ]
    };
  return (
    <Container className="anim_item">
        <BrandsContainer>
            <Slider {...settings}>
                <ImageContainer>
                    <img src={scan} alt="bsc scan"/>
                </ImageContainer>
                <ImageContainer>
                    <img src={marketcap} alt="coinmarketcap"/>
                </ImageContainer>
                <ImageContainer>
                    <img src={coingecko} alt="coingecko"/>
                </ImageContainer>
                <ImageContainer>
                    <img src={moralis} alt="moralis"/>
                </ImageContainer>
            </Slider>
        </BrandsContainer>
        <Wrapper>
            <img src={about} alt="about" />
            <TextContainer>
                <Title>SmartDApp Platform</Title>
                <Text>
                    SmartDApp is a platform built on the BSC & CRO chain to help average Joe’s make web3 dApps easily and 
                    conveniently. We have premade dApps like staking, farming, NFT minting, smart contract ready on our dApp, 
                    all it takes to make one is edit the frontend using our unique drag and drop editor which is simple and smooth to use. 
                    Our block based editor helps to place elements in blocks and create sites easily. SmartDApps native coin 
                    $ATAP will have an awesome utility, 10% of each and every sale on our platform will be sent to a rewards pool, 
                    which will fill up for an entire week and send the rewards to all the holders according the holding % once every week.
                </Text>
                <Block direction="row">
                    <Block>
                        <SubText>
                        Read our whitepaper<br /> for more Info:
                        </SubText>
                        <Button>
                            White Paper
                            <div>
                                <img src={arrow} alt="arrow"/>
                            </div>
                        </Button>
                    </Block>
                    <Block marginL='64px'>
                        <SubText>
                            View our rewards<br />pool allocation:
                        </SubText>
                        <PrimaryButton>Rewards Pool</PrimaryButton>
                    </Block>
                </Block>
            </TextContainer>
        </Wrapper>
    </Container>
  )
}

export default About
