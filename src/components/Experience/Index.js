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
import {FaGithub} from 'react-icons/fa';


const ExpSection = () =>{
    return(
      <>
      <ExpContainer  id="experience">
 	<ExpWrapper>
	  <ExpRow imgStart="false">
	    <ExpCol1>
	      <TextWrapper>
		<TopLine>.experience()</TopLine>
		<Heading >Take a look at my work!</Heading>
 		<Subtitle >
		  You can Download my CV Here!
		</Subtitle>
		<CvButton>Download</CvButton>
		<Subtitle>
		You can also see what I'm currently working on in my github!  
		</Subtitle>
		<CvButton href="https://github.com/BrunoValles">
		  <GitLink ><FaGithub/></GitLink> My Github
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
