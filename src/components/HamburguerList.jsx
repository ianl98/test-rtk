import {InventoryRounded, ClassRounded} from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function HamburguerList() {
  return (
    <Box sx={{width: '100%', maxWidth: 550, bgcolor: 'lightgrey'}}>
        <List aria-label='Barra de navegacion' component='nav'>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <InventoryRounded/>
                    </ListItemIcon>
                    <ListItemText primary='Productos'/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ClassRounded/>
                    </ListItemIcon>
                    <ListItemText primary='Categorias'/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}
