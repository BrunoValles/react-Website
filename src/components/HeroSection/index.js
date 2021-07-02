import React from 'react'
import Video from '../../videos/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements';

const HeroSection = () => {
    return(
	<HeroContainer id='/'>
	  <HeroBg>
	    <VideoBg autoPlay loop muted src = {Video} type='video/mp4' />
	  </HeroBg>
	  <HeroContent>
	    <HeroH1>Hello, I'm Bruno Valles</HeroH1>
	    <HeroP> >I Code and Stuff</HeroP>
	  </HeroContent>
	</HeroContainer> 
    )
}

export default HeroSection;
