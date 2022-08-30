import { About, FAQ, Footer, Hero, HowToCreate, Instruction, Portfolio, PresaleDetails, RealBusiness, Roadmap, Tokenomics } from "./components";

import setFullHeightVar from './utils/setFullHeight'
import { useAnimation } from "./utils/useAnimation";
import {useEffect} from 'react'

function App() {
  const animation = useAnimation('.anim_item')

  useEffect(() => {
    setFullHeightVar()
  },[])
  
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Instruction/>
      <Portfolio/>
      <RealBusiness/>
      <PresaleDetails/>
      <Tokenomics/>
      <Roadmap/>
      <HowToCreate/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
