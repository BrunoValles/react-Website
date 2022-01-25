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
		<Heading >Take a look at where I've been!</Heading>
	    {/*<Subtitle >
		  You can Download my CV Here!
		</Subtitle>
		<CvButton>Download</CvButton>*/}
		<Subtitle>
		Feel free to download my resume over here  
		</Subtitle>
		<CvButton to={{ pathname:'https://github.com/brunovalles'}} target="_blank">
		  <GitLink><FaFile/></GitLink> My Resume 
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
