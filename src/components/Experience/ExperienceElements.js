import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

export const ExpContainer = styled.div`
  background: #010606;
  

  @media  screen and (max-width: 768px){
    padding: 100px 0;
  }
`;

export const ExpWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center
`;

export const ExpRow =styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const ExpCol1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const ExpCol2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padidng-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercasr;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-hegith: 1.1;
  font-weight: 600;
  color: #fff;
  

  @media scren and (max-width: 480px){
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  margin-top: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;

`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  z-index: 3;
`;

export const GitLink = styled.a`
  font-size: 1rem;
  text-decorations: none;
  color: #010606; 

  &:hover{
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`;

export const CvButton = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
