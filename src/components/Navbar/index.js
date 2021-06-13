import React from 'react';
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
  } from './NavbarElements'

const index = () =>{
    return(
      <>
	<Nav>
	  <NavbarContainer>
	    <NavLogo to='/'>Bruno<span>_</span></NavLogo>
	      <MobileIcon>
		<FaBars />
	      </MobileIcon>
	      <NavMenu>
		<NavItem>
		  <NavLinks to="aboutMe">About me</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="skills">Skills</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="experience">Experience</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="somethingGoesHere">Something</NavLinks>
		</NavItem>
	      </NavMenu>
	      <NavBtn>
	        <NavBtnLink to='/Contact'>Contact</NavBtnLink>
	      </NavBtn>
	  </NavbarContainer>
	</Nav>
      </>
    );
};

export default index;