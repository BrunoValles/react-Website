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
          <CvButton to={{pathname:'https://drive.google.com/file/d/1diHCcIp0-9vJftwflIfUxQNR93ig4RSw/view?usp=sharing'}} target="_blank">
			<GitLink><FaFile/> My Resume</GitLink>
		</CvButton>  
	      </TextWrapper>
	    </ExpCol1>
	    <ExpCol2>
	      <ImgWrap>
		<Img src={require('../../images/svg-3.svg').default} alt="matrix"/>
	      </ImgWrap>
	    </ExpCol2>
	  </ExpRow> 
	</ExpWrapper>
      </ExpContainer>
      </>
    )
};

export default ExpSection;
