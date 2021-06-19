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

const Sidebar = ( ) => {
    return(
      <SidebarContainer>
	<Icon>
	  <CloseIcon />
	</Icon>
	<SidebarWrapper>
	  <SidebarLink to="aboutMe">
	    About Me
	  </SidebarLink>
      	  <SidebarLink to="skills">
	   Skills 
	  </SidebarLink>
	  <SidebarLink to="experience">
	    Experience
	  </SidebarLink>
	  <SidebarLink to="somethingGoesHere">
	    Something 
	  </SidebarLink>
	  <SideBtnWrap>
	    <SidebarRoute>Contact me!</SidebarRoute>
	  </SideBtnWrap>
	</SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar;
