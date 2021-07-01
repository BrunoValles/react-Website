import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const GlitchAnimation = keyframes`
  0%{
    text-shadow:
    0.05em 0 0 rgba(217, 41, 56, .75),
    -0.025em -0.05em 0 rgba(98, 195, 217, .75),
    0.025em 0.05em 0 rgba(50, 140, 62, .75);
  }

  30%{
    text-shadow:
    0.025em 0.05em 0 rgba(217, 41, 56, .75),
    0.05em 0 0 rgba(98, 195, 217, .75),
    0 -0.05em 0 rgba(50, 140, 62, .75);
  }
  98%{
    text-shadow:
    0.025em 0.05em 0 rgba(217, 41, 56, .75),
    0.05em 0 0 rgba(98, 195, 217, .75),
    0 -0.05em 0 rgba(50, 140, 62, .75);
  }
  99%{
    text-shadow:
    -0.05em -0.25em 0 rgba(217, 41, 56, .75),
    0.025em 0.25em 0 rgba(98, 195, 217, .75),
    -0.05em -0.05em 0 rgba(50, 140, 62, .75);
  }
  100%{
    text-shadow:
    -0.05em -0.25em 0 rgba(217, 41, 56, .75),
    0.025em 0.25em 0 rgba(98, 195, 217, .75),
    -0.05em -0.05em 0 rgba(50, 140, 62, .75);
  }
`;
export const Nav = styled.nav`
  background-color: #000;
  transparency: 90%;
  height: 50px;
  margin-top: -80;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
      transition; 0.8s all ease;
  }
`;

export const NavbarContainer =styled.div`
  display:flex;
  justify-content: space-between;
  height: 50px;
  z-index: 1;
  width: 100%;
  padding: 0 24;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  float: left;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  text-shadow:
    0 0 0 rgba(217, 41, 56, .75),
    0 0 0 rgba(98, 195, 217, .75),
    0 0 0 rgba(50, 140, 62, .75);

  &:hover{
    animation: ${GlitchAnimation}; 
    animation-duration: 250ms;
    animation-fill-mode: forwards;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;
    }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  color: #fff;
  text-align: center;
  margin-right: -22px;
  font-size: .8rem;
  
  @media screen and (max-width: 768px){
    display: none;

  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

 &.active{
  border-bottom: 3px solid #01bf71;
 }
 &.hover{
  color: #1bf71;
  transition:  0. ease-in-out;
 }

`;

export const NavSocLinks = styled.a`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

 &.active{
  border-bottom: 3px solid #01bf71;
 }
 &.hover{
  color: #1bf71;
  transition:  0. ease-in-out;
 }

`;
//export const NavBtn = styled.nav`
  //display: flex;
  //align-items: center;

  //@media screen and (max-width: 768px){
    //display: none;

  //}
//`;

//export const NavBtnLink = styled(LinkR)`
  //border-radius: 50px;
  //background: #01bf71;
  //white-space: nowrap;
  //padding: 10px 22px;
  //color: #010606;
  //font-size: 16px;
  //outline: none;
  //border: none;
  //cursor: pointer;
  //transition: all 0.2s ease-in-out;
  //text-decoration: none;
  
  //&:hover{
    //transition: all 0.2s ease-in-out;
    //background: #fff;
    //color: #010606;
  //}
//`;
