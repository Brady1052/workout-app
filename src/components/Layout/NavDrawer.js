import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function NavDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        anchor="top"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Exercises</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
        sx={{ position: 'absolute', right: '0' }}
      >
        <MenuRoundedIcon style={{ color: 'white' }} />
      </IconButton>
    </>
  );
}

export default NavDrawer;
