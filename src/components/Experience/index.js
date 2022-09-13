import React from 'react'
import {
  ExpContainer,
  ExpWrapper,
  ExpRow,
  ExpCol1,
  ExpCol2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  CvButton,
  GitLink
} from './ExperienceElements'
import {FaFile} from 'react-icons/fa';


const ExpSection = () =>{
    return(
      <>
      <ExpContainer  id="experience">
 	<ExpWrapper>
	  <ExpRow imgStart="false">
	    <ExpCol1>
	      <TextWrapper>
		<TopLine>.experience()</TopLine>
		<Heading >Find out more about me!</Heading>
	 	<Subtitle>
		Download my resume over here  
		</Subtitle>
		<CvButton href={require("../../files/Bruno_Valles.pdf")} download="Bruno_Valles_Resume.pdf">
			<GitLink ><FaFile/> My Resume</GitLink>
		</CvButton>  
	      </TextWrapper>
	    </ExpCol1>
	    <ExpCol2>
	      <ImgWrap>
		<Img src={require('../../images/svg-3.svg').default} alt="PC"/>
	      </ImgWrap>
	    </ExpCol2>
	  </ExpRow>
	</ExpWrapper>
      </ExpContainer>
      </>
    )
};

export default ExpSection;
