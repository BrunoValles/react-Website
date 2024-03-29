import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from  '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import ExpSection from  '../components/Experience/index.js'
// eslint-disable-next-line
import EasterEgg from '../components/EasterEgg/EasterEgg.js'
import {
	  homeObjOne,
	  homeObjTwo,
	  //homeObjThree,
	  homeObjFour 
	} from '../components/InfoSection/Data'


const Home = () => {
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
      setIsOpen(!isOpen)
  }
    return (
      <>

	<Sidebar isOpen={isOpen} toggle={toggle}/>
	<Navbar toggle={toggle}/>
	<HeroSection />
	<InfoSection {...homeObjOne}/>
	<InfoSection {...homeObjTwo}/>
      {/*<InfoSection {...homeObjThree}/>*/}
	<ExpSection />
	<InfoSection {...homeObjFour}/>
	<script src="../components/EasterEgg/EasterEgg.js"></script>
      </>
    );
}

export default Home;
