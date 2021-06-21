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
  NavBtnLink,
  } from './NavbarElements'

const index = ({ toggle }) =>{
    return(
      <>
	<Nav>
	  <NavbarContainer>
	    <NavLogo to='/'>Bruno_Valles</NavLogo>
	      <MobileIcon onClick={toggle}>
		<FaBars />
	      </MobileIcon>
	      <NavMenu>
		<NavItem>
		  <NavLinks to="aboutMe">.aboutMe()</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="skills">.skills()</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="experience">.experience()</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="contact">.contact()</NavLinks>
		</NavItem>
	      </NavMenu>
	  </NavbarContainer>
	</Nav>
      </>
    );
};

export default index;
