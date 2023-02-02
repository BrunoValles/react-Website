import React from 'react';
import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarLink, 
} from './SidebarElements';
import {
  FaBars, 
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
	FaCode
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
    return(
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
	<Icon onClick={toggle}>
	  <CloseIcon />
	</Icon>
	<SidebarWrapper>
	  <SidebarLink to="aboutMe" onClick={toggle}>
	   .aboutMe() 
	  </SidebarLink>
      	  <SidebarLink to="skills" onClick={toggle}>
	   .skills()
	  </SidebarLink>
	  <SidebarLink to="experience" onClick={toggle}>
	    .experience()
	  </SidebarLink>
	  <SidebarLink to="contact" onClick={toggle}>
	    .contact()
	  </SidebarLink>
	</SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar;
