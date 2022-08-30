import { AccordionWrapper, Container, Title } from './styled'

import Accordion from '../common/accordionFAQ'
import React from 'react'

const FAQ = () => {
  return (
    <Container className="container anim_item">
        <Title>FAQ</Title>
        <AccordionWrapper>
            {data.map((el, idx) => 
                <Accordion key={idx * 7} title={el.title} text={el.text}/>
            )}
        </AccordionWrapper>
    </Container>
  )
}

export default FAQ

const data = [
  {title: 'How does this platform work?', text: "This platform works by providing web dev tools similiar to wix and backend smart contract tools (new concept) for staking platfrom, nft minting platform, etc for building smooth, secure, clean dApps, Websites, tokens. The payment for the products will be accepted in crypto & fiat(TBA)."},
  {title: 'Are the dapps made from here safe and secure? And how?', text: "The dApps created by this platform are 100% safe as their backend is made using github private repo + moralis + Aws which are one of the safes services to exist on the internet. All the services will be audited by InterFI which is a known audit company."},
  {title: 'How will this affect the blockhain?', text: "There is no website editor, dapp buildder which is easy to use currently on the blockchain, we plan to change this by bringing our platform where anyone can create dapp and websites very easily. Our goal will be to make our tools layer 2 protocol over the evm. We have great plans for the future to conquer the web and dapp development area entirely."},
  {title: 'How well known is the team?', text: "Our team is very well known in the the BSC area and have worked on numerous successful projects in the past. Read about our team on our team section."},
  {title: 'What will be the price for development ?', text: "Not yet decided, but should be between 2.5-4bnb for staking pool + contract, 0.2-0.5bnb for a website, 0.2 for basic contract and 0.4 for advance contract. We will held a poll with our private investors and they will vote for our price."},
  {title: 'Is there vesting? if no then how will you save presale and private investors from dumping day 1?', text: "No we wont be having vesting for neither private nor presale.  If a private or presale investor sells his tokens, his rewards allocation will be reduced so if he sells 50% of his 1 bnb worth tokens bought in private, he will only receive 0.11% revenue rather then 0.22%, even if he buys back 0.5bnb worth tokens the revenue would be 0.11%. Now the 0.11% revenue will be added to normal holders pool which will become 13.21% from 13.1%."}
]