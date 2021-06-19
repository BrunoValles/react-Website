import React from 'react';
import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink, 
  SideBtnWrap, 
  SidebarRoute
} from './SidebarElements';

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
	  <SidebarLink to="somethingGoesHere">
	    .contact()
	  </SidebarLink>
	</SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar;
