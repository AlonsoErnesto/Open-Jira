import { useContext } from "react";
import { Drawer,Box, Typography, List, ListItem,ListItemIcon,ListItemText,Divider } from "@mui/material";

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import { UIContext } from "@/context/UI";

const menuItems:string[] = ['Inbox','Starred','Send Email','Drafts'];

const Sidebar = () => {
   const { sidemenuOpen,closeSideMenu } = useContext(UIContext)


  return (
      <Drawer 
         anchor="left" 
         open={sidemenuOpen} 
         onClose={closeSideMenu}
      >
         <Box sx={{width:250}}>
            <Box sx={{padding:'5px 10px'}}>
               <Typography variant="h4">Menu</Typography>
            </Box>
            <List>
               {menuItems.map((text,index) => (
                  <ListItem button key={index}>
                     <ListItemIcon>
                        {index % 2 ? <InboxOutlinedIcon/> : <MailOutlineOutlinedIcon/>}
                     </ListItemIcon>
                     <ListItemText primary={text}/>
                  </ListItem>
               ))}
            </List>
            <Divider/>
            <List>
               {menuItems.map((text,index) => (
                  <ListItem button key={index}>
                     <ListItemIcon>
                        {index % 2 ? <InboxOutlinedIcon/> : <MailOutlineOutlinedIcon/>}
                     </ListItemIcon>
                     <ListItemText primary={text}/>
                  </ListItem>
               ))}
            </List>
         </Box>
      </Drawer>
  )
}

export default Sidebar;