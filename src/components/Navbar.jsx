import { Menu } from "@mui/icons-material";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import HamburguerList from "./HamburguerList";


export default function Navbar() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) =>{
    setState(open);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={()=>{toggleDrawer(true)}}
        >
          <Menu />
        </IconButton>
        <Drawer
            anchor='left'
            open={state}
            onClose={()=>{toggleDrawer(false)}}
            PaperProps={{
              sx: {width: "20%"}
            }}
          >
            <HamburguerList/>
          </Drawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-commerce
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
