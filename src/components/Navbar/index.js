import React from 'react';
import {
  FaBars, 
  FaGithub,
  FaLinkedinIn,
 FaTwitter 
} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavSocLinks
  } from './NavbarElements';

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
		<NavItem>
		  <NavSocLinks href="https://github.com/BrunoValles"><FaGithub/></NavSocLinks>
		</NavItem>
		<NavItem>
		  <NavSocLinks href="https://www.linkedin.com/in/bruno-valles-702b33182/?locale=en_US"><FaLinkedinIn/></NavSocLinks>
		</NavItem>
		<NavItem>
		  <NavSocLinks href= "https://twitter.com/Bruno_Valles242"><FaTwitter/></NavSocLinks>
		</NavItem>
	      </NavMenu>
	  </NavbarContainer>
	</Nav>
      </>
    );
};

export default index;
