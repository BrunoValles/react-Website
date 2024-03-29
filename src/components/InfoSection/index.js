import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  List
} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, description2, skillList, img, alt} ) =>{
    return(
      <>
      <InfoContainer lightBg={lightBg} id={id}>
 	<InfoWrapper>
	  <InfoRow imgStart={imgStart}>
	    <Column1>
	      <TextWrapper>
		<TopLine>{topLine}</TopLine>
		<Heading lightText={lightText}>{headLine}</Heading>
		<Subtitle darkText={darkText}>{description}</Subtitle>
    <Subtitle darkText={darkText}>{description2}</Subtitle>
    <List darkText={darkText}>{skillList}</List>
	      </TextWrapper>
	    </Column1>
	    <Column2>
	      <ImgWrap>
		<Img src={img} alt={alt}/>
	      </ImgWrap>
	    </Column2>
	  </InfoRow>
	</InfoWrapper>
      </InfoContainer>
      </>
    )
};

export default InfoSection;
