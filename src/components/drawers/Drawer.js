import React, { useState } from 'react'
import { Box, Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logoWhite from '../../assets/media/logo/gig-white-icon.svg';
import Logo from '../../assets/media/logo/gig-white-icon.svg'


const DrawerComp = ({links}) => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer PaperProps={{ sx: {backgroundColor: 'primary.main', width: 350}}} anchor='right' open={open} onClose={() => setOpen(false)}>
        <Box sx={{textAlign: 'center'}}>
            <img src={Logo} className='logoDrawer' alt='Gig Logo'/>
        </Box>
        <List>
            {links.map((link, index) => (
                <ListItemButton onClick={() => setOpen(false)} key={index} divider >
                <ListItemIcon>
                    <ListItemText sx={{color: 'secondary.main'}}>{link}</ListItemText>
                </ListItemIcon>
            </ListItemButton>))}
        </List>
        <Button color='secondary' variant='outlined' sx={{ m:1 }}>Login</Button>
        <Button color='secondary' variant='contained' sx={{ m:1 }}>Sign Up</Button>
      </Drawer>

      <Toolbar  sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button disableRipple sx={{ maxWidth: 5, display: 'flex', alignItems: 'center' }}>
                <img src={logoWhite} className="logo" alt='Gig Logo' />
            </Button>
            <IconButton sx={{ ml: 'auto', color: 'white' }} onClick={() => setOpen(!open)}>
                <MenuRoundedIcon fontSize="large" />
            </IconButton>
      </Toolbar>
    </div>
  )
}

export default DrawerComp
