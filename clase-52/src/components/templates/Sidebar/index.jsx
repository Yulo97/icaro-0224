import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const Sidebar = ({ open, setOpen }) => {
  return (
    <Drawer
      onClose={() => setOpen(false)}
      open={open}
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          overflowY: "auto",
        },
      }}
    >
      <List sx={{ pt: 5 }}>
        <ListItem key={"asd"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Email"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
