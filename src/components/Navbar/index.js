import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {
  FaBars, 
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
	FaCode
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

const Index = ({ toggle }) =>{
  const[scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=>{
      if(window.scrollY >= 80){
	  setScrollNav(true);
      }else{
	  setScrollNav(false);
      }
  }

  useEffect(() =>{
      window.addEventListener('scroll', changeNav);
  }, [])
  
  const toggleHome =() =>{
      scroll.scrollToTop();
  }

    return(
      <>
      <Nav scrollNav={scrollNav}>
	  <NavbarContainer>
	    <NavLogo to='/' onClick={toggleHome}>Bruno_Valles</NavLogo>
	      <MobileIcon onClick={toggle}>
		<FaBars />
	      </MobileIcon>
	      <NavMenu>
		<NavItem>
		  <NavLinks to="aboutMe" smooth ={true} duration={500} spy={true} exact='true' >.aboutMe()</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="skills" smooth ={true} duration={500} spy={true} exact='true'>.skills()</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="experience" smooth ={true} duration={500} spy={true} exact='true'>.experience()</NavLinks>
		</NavItem>
		<NavItem>
		  <NavLinks to="contact" smooth ={true} duration={500} spy={true} exact='true'>.contact()</NavLinks>
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
					<NavItem><NavSocLinks href= "https://leetcode.com/BrunoValles/"><FaCode/></NavSocLinks></NavItem>
	      </NavMenu>
	  </NavbarContainer>
	</Nav>
      </>
    );
};

export default Index;
